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
const blogContentTemplate = fs.readFileSync(path.join(ROOT_DIR, 'common/blog-content.html'), 'utf8');
const blogCommentsTemplate = fs.readFileSync(path.join(ROOT_DIR, 'common/blog-comments.html'), 'utf8');

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

function replaceBlogContent(content, rendered) {
    const start = content.indexOf('<div class="single-post-content">');
    const end = content.indexOf('</div>', start);
    if (start === -1 || end === -1) {
        throw new Error('blog content block not found');
    }
    return content.slice(0, start) + rendered + content.slice(end + '</div>'.length);
}

function replaceBlogComments(content, rendered) {
    const start = content.indexOf('<div class="comment-lists">');
    const end = content.indexOf('<div class="comments-box', start);
    if (start === -1 || end === -1) {
        throw new Error('blog comments block not found');
    }
    return content.slice(0, start) + rendered + content.slice(end);
}

function translateTagDetail(content) {
    const replacements = [
        ['>Design</a>', '>设计</a>'],
        ['>Culture</a>', '>文化</a>'],
        ['>13 July, 2018</span>', '>2018年7月13日</span>'],
        ['9 Post written by the author', '作者共发表了9篇文章'],
        ['Descriptions than no a return office they sick', '这些描述并没有让办公室恢复原状，反而让人不适'],
        ["Own, and scent had woman's do considerations", '拥有，以及那份气味，还有女人们要考虑的事'],
        ['Instantly anyone hollow fly in that clean took needs', '瞬间，任何人都能空洞地飞进那份干净的需求之中'],
        ['NEWER POSTS', '较新的文章'],
        ['OLDER POSTS', '较旧的文章'],
    ];
    for (const [source, translated] of replacements) {
        content = content.split(source).join(translated);
    }
    content = content.replace(/>Design<\/h2>/g, '>设计<\/h2>');
    content = content.replace(/Could of client of so hologram identification get to\s+far he its from thing way\. A please left some gloomy still phase unmoved the annoyed\./g, '这是一段关于作者和文章内容的介绍，欢迎阅读并了解更多信息。');
    content = content.replace(/Descriptions\s+than no a return office they sick/g, '这些描述并没有让办公室恢复原状，反而让人不适');
    content = content.replace(/Own,\s*and scent had woman\'s do considerations/g, '拥有，以及那份气味，还有女人们要考虑的事');
    content = content.replace(/Instantly\s+anyone hollow fly in that clean took needs/g, '瞬间，任何人都能空洞地飞进那份干净的需求之中');
    return content;
}

function normalizeTagImagePaths(content) {
    return content.split('assets/img/banner/').join('../static/img/tag-img/');
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
    if (target === path.join('pages', 'blog-single.html') || target === path.join('pages', 'blog-single-2.html')) {
        content = replaceBlogContent(content, renderTemplate(blogContentTemplate, tokens));
        content = replaceBlogComments(content, renderTemplate(blogCommentsTemplate, tokens));
    }
    if (['tag-single.html', 'tag-single-2.html', 'tag-single-with-bg-image.html'].includes(path.basename(target))) {
        content = translateTagDetail(content);
    }
    if (['tag-2.html', 'tag-with-bg-image.html'].includes(path.basename(target))) {
        content = normalizeTagImagePaths(content);
    }
    content = replaceScripts(content, renderTemplate(scriptsTemplate, tokens));
    content = content.replace(/\n{3,}/g, '\n\n');
    fs.writeFileSync(filePath, content);
    console.log(`built ${target}`);
}
