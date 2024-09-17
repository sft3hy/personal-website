

export function createTag(type, propertyName, property, content) {
    const tag = document.createElement(type);
    tag.setAttribute(propertyName, property);
    tag.content = content;
    document.head.insertBefore(tag, document.head.firstChild);
}

const toRemove = 'meta[name="description"], meta[property="og:title"], meta[property="og:site_name"], meta[property="og:description"], meta[property="og:url"], link[rel="canonical"]'
export function removeTags() {
    const existingMetaTags = document.querySelectorAll(toRemove);
    existingMetaTags.forEach(tag => tag.remove());
}



function loadImages(folderName) {
    const imageFolders = {
        folder1: import.meta.glob('/src/assets/images/about_pictures/backpacking*.jpeg', { eager: true }),
        folder2: import.meta.glob('/src/assets/images/home_picture/Climbing*.jpeg', { eager: true }),
    }
    console.log(imageFolders);
    if (folderName === 'about_pictures') {
        return imageFolders.folder1 || {};
    } else if (folderName === 'home_picture') {
        return imageFolders.folder2 || {};
    }
}


export function preloadImage(folderName) {
    const images = loadImages(folderName);
    for (const path in images) {
        if ((folderName === 'about_pictures' && path.includes('backpackingCamino')) || folderName === 'home_picture') {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = images[path].default;
            document.head.appendChild(link);
            break;
        }

    }

}