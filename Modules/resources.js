// Classes
class URL {
    constructor (link = 'DRIVE://1X2RS296nQoZK1yf315O2FzfypYyiaou5') {
        this.link = link;
        this.type = this.link.split('://')[0];
        this.shortURL = this.link.split('://')[1];

        switch (this.type.toUpperCase()) {
            case 'FAVICON':
                this.type = 'favicon';
                break;
            case 'DRIVE':
            case 'GOOGLEDRIVE':
            case 'GOOGLE_DRIVE':
                this.type = 'google_drive';
                break;
            default:
                this.type = 'none';
                break;
        };
    };
    get URL () {
        switch (this.type) {
            case 'none':
                return this.link;
                break;
            case 'google_drive':
                return getGoogleDriveImage(this.shortURL);
                break;
            case 'favicon':
                return getFavicon(this.shortURL);
                break;
        };
    };
};
class SmartSource {
    constructor (sources = ['']) {
        this.URLs = [];
        this.sources = [];
        
        this.addSources(sources)
    };
    get URL () {
        return this.URLs[this.sources.indexOf(fileSource)];
    };
    addSources (sources = ['']) {
        for (let i = 0; i < sources.length; i++) {
            let tempURL = new URL (sources[i])

            this.URLs.push(tempURL.URL);
            this.sources.push(tempURL.type);
        };
    };
};
class KeyValue {
    constructor (key = '', value = '') {
        this.key = key;
        this.value = value;
    };
};
class MetaData {
    constructor (data = [KeyValue]) {
        this.data = {};

        for (let i = 0; i < data.length; i++) {
            this.data[data[i][0]] = data[i][1];
        }

        return this.data
    };
};
class Page {
    constructor (fileSource = SmartSource, metadata = MetaData) {
        this.sources = fileSource
        this.metadata = metadata;
    };
};
class Comic {
    constructor (title = '', pages = [URL]) {
        this.title = title;
        this.pages = pages;
    };
    get cover () {
        return this.pages[0];
    };
    get lastPage () {
        return this.pages[pages.length - 1];
    };
    thumbnailElement () {
        let holderElement = document.createElement('div');
            holderElement.classList = 'comicThumbnail';

            let imageElement = document.createElement('img');
                imageElement.classList = 'thumbnail';
                imageElement.src = this.cover.URL;

            holderElement.appendChild(imageElement)

        return holderElement;
    };
};
class Chapter extends Comic {
};
class WebPage {
    constructor (title = '', metadata = MetaData) {
        this.title = title;
        this.metadata = metadata;
    };
    get previous () {
        return this.metadata.previous;
    };
    get next () {
        return this.metadata.next;
    };
    get link () {
        return this.metadata.link;
    };
};

// Variables
var fileSource = 'google_drive';

// Functions
function getFavicon (website = '') {
    return 'https://icons.duckduckgo.com/ip3/' + website + '.ico';
};
function getGoogleDriveImage (imageID = '') {
    return 'https://drive.google.com/thumbnail?id=' + imageID + '&sz=w1000';
};

// Exports
export { URL, SmartSource, KeyValue, MetaData, Page, Comic, Chapter, WebPage };