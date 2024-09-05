

export function createTag(type, propertyName, property, content) {
    const tag = document.createElement(type);
    tag.setAttribute(propertyName, property);
    tag.content = content;
    document.head.insertBefore(tag, document.head.firstChild);
}
const toRemove = 'meta[name="description"], meta[property="og:title"], meta[property="og:site_name"], meta[property="og:description"], meta[property="og:url"]'
export function removeTags() {
    const existingMetaTags = document.querySelectorAll(toRemove);
    existingMetaTags.forEach(tag => tag.remove());
}