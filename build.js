// Regenerates the <header> and footer-wrapper block of every page from common/header.html
// and common/footer.html. Run with: node build.js
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const headTemplate = fs.readFileSync(path.join(ROOT_DIR, 'common/head.html'), 'utf8');
const headerTemplate = fs.readFileSync(path.join(ROOT_DIR, 'common/header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(ROOT_DIR, 'common/footer.html'), 'utf8');
const goTopTemplate = fs.readFileSync(path.join(ROOT_DIR, 'common/go-top.html'), 'utf8');
const scriptsTemplate = fs.readFileSync(path.join(ROOT_DIR, 'common/scripts.html'), 'utf8');

function renderTemplate(template, tokens) {
    let rendered = template;
    for (const [key, value] of Object.entries(tokens)) {
        rendered = rendered.split(`{{${key}}}`).join(value);
    }
    return rendered;
}

function replaceHead(content, rendered) {
    const start = content.indexOf('<head>');
    const end = content.indexOf('</head>', start);
    if (start === -1 || end === -1) {
        throw new Error('head block not found');
    }
    const endTagEnd = end + '</head>'.length;
    return content.slice(0, start) + rendered + content.slice(endTagEnd);
}

function replaceGoTop(content, rendered) {
    const start = content.indexOf('<div class="go-top"');
    const end = content.indexOf('</div>', start);
    if (start === -1 || end === -1) {
        throw new Error('go-top block not found');
    }
    const endTagEnd = end + '</div>'.length;
    return content.slice(0, start) + rendered + content.slice(endTagEnd);
}

function replaceHeader(content, rendered) {
    const start = content.indexOf('<header class="header-area">');
    const end = content.indexOf('</header>', start);
    if (start === -1 || end === -1) {
        throw new Error('header block not found');
    }
    const endTagEnd = end + '</header>'.length;
    return content.slice(0, start) + rendered + content.slice(endTagEnd);
}

function replaceFooter(content, rendered) {
    const start = content.indexOf('<div class="footer-wrapper">');
    if (start === -1) {
        throw new Error('footer block not found');
    }
    let depth = 0;
    let cursor = start;
    const divOpen = /<div\b/g;
    const divClose = /<\/div>/g;
    while (true) {
        divOpen.lastIndex = cursor;
        divClose.lastIndex = cursor;
        const openMatch = divOpen.exec(content);
        const closeMatch = divClose.exec(content);
        if (!closeMatch) {
            throw new Error('unbalanced footer block');
        }
        if (openMatch && openMatch.index < closeMatch.index) {
            depth += 1;
            cursor = openMatch.index + openMatch[0].length;
        } else {
            depth -= 1;
            cursor = closeMatch.index + closeMatch[0].length;
            if (depth === 0) {
                return content.slice(0, start) + rendered + content.slice(cursor);
            }
        }
    }
}

function replaceScripts(content, rendered) {
    const start = content.indexOf('<script src=');
    const end = content.indexOf('</body>', start);
    if (start === -1 || end === -1) {
        throw new Error('script block not found');
    }
    return content.slice(0, start) + rendered + content.slice(end);
}

const targets = [
    'index.html',
    ...fs.readdirSync(path.join(ROOT_DIR, 'pages'))
        .filter((f) => f.endsWith('.html'))
        .map((f) => path.join('pages', f)),
];

for (const target of targets) {
    const isRoot = !target.includes(path.sep);
    const tokens = {
        ROOT: isRoot ? './' : '../',
        PAGE: isRoot ? './pages/' : '',
        SELF: path.basename(target),
        TITLE: 'Lanuit',
    };
    const filePath = path.join(ROOT_DIR, target);
    let content = fs.readFileSync(filePath, 'utf8');
    content = replaceHead(content, renderTemplate(headTemplate, tokens));
    content = replaceGoTop(content, renderTemplate(goTopTemplate, tokens));
    content = replaceHeader(content, renderTemplate(headerTemplate, tokens));
    content = replaceFooter(content, renderTemplate(footerTemplate, tokens));
    content = replaceScripts(content, renderTemplate(scriptsTemplate, tokens));
    fs.writeFileSync(filePath, content);
    console.log(`built ${target}`);
}
