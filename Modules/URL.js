import { generated_smart_files } from '../JS-Databases/Smart-Files.js';

// Functions
function url (url = '') {
    if (url.split('://')[1] == null) {
        return url;
    };

    let root = url.split('://')[0];
    let link = url.split('://')[1];

    switch (root.toUpperCase()) {
        case 'SMART':
            return generated_smart_files[link].URL;
        case 'FAVICON':
            return getFavicon(link);
        case 'DRIVE':
            return getGoogleDriveImage(link);
        case 'NEWGROUNDS':
            return getNewgroundsLink(link);
        case 'NGSERIES':
            return getNewgroundsSeriesLink(link);
        case 'NGFILE':
            return getNewgroundsFile(link)
        default:
            return url
    };
};

function getFavicon (website = '') {
    return 'https://icons.duckduckgo.com/ip3/' + website + '.ico';
};
function getGoogleDriveImage (imageID = '') {
    return 'https://drive.google.com/thumbnail?id=' + imageID + '&sz=w1000';
};
function getNewgroundsLink (page = '') {
    return 'https://www.newgrounds.com/' + page;
}
function getNewgroundsSeriesLink (series = '') {
    return 'https://www.newgrounds.com/series/' + series;
};
function getNewgroundsFile (file = '') {
    return 'https://img.ngfiles.com/' + file;
}

// Exports
export { url };
export default { url };