import { parseHTMLLinks } from '../Scripts/htmlLinkParser.js';
import { activateComic, comic_nextPage, comic_previousPage } from '../Scripts/comics.js';
import { written_chapters, sequential_chapter_pointers } from '../JS-Databases/Chapters.js';

// Variables
var chapterLookup = {
    '1': 'TOTW #1',
    '1R': 'TOTW #1 Remastered',
    '2': 'TOTW #2',
    '3': 'TOTW #3',
    '4': 'TOTW #4',
    '5': 'TOTW #5',
    '6': 'TOTW #6',
    '7': 'TOTW #7',
    '8': 'TOTW #8',
    '9': 'TOTW #9',
    '10': 'TOTW #10',
    '11': 'TOTW #11',
    '12': 'TOTW #12',
    '13': 'TOTW #13',
    '14': 'TOTW #14',
    '15': 'TOTW #15',
    '16': 'TOTW #16',
    '17': 'TOTW #17',
    '18': 'TOTW #18',
    '19': 'TOTW #19',
    '20': 'TOTW #20',
    '21': 'TOTW #21',
}

var queryChapter = window.location.search != '' ? window.location.search.split('chapter=')[1].split('&')[0] : '1';
var loadedChapter = chapterLookup[queryChapter] != null ? written_chapters[chapterLookup[queryChapter]] : 'TOTW #1';

let comicElement = document.getElementsByClassName('comic')[0];

let githubPrefix = window.location.href.includes('github.io') ? 'TOP-OF-THE-WORLD-COMPENDIUM' : '';

// Contents

if (window.location.search == '' || chapterLookup[queryChapter] == null) {
    window.location.replace('../Read/?chapter=1');
};

console.log(written_chapters[chapterLookup[queryChapter]].pages.length);

document.getElementById('header').innerHTML = loadedChapter.title;

comicElement.innerHTML = '';

let previousPageURL = ''
for (let pageID = 0; pageID < loadedChapter.pages.length; pageID++) {
    let newPageURL = loadedChapter.pages[pageID].URL;

    let pageElement = document.createElement('img');
        if (newPageURL == previousPageURL) {
            comicElement.lastElementChild.classList.add('spread');
            pageElement.classList = 'comicPage spread';
        } else {
            pageElement.classList = 'comicPage';
        };
        pageElement.src = newPageURL;
    comicElement.appendChild(pageElement);

    previousPageURL = newPageURL;
};

activateComic();

parseHTMLLinks();

document.onkeypress = function (e) {
    console.log(e.code)
    switch (e.code) {
        case 'ArrowRight':
        case 'KeyD':
            comic_nextPage();
            break;
        case 'ArrowLeft':
        case 'KeyA':
            comic_previousPage();
            break;
        case 'KeyS':
            window.open('../Read/?chapter=' + (Math.min(Number(queryChapter) + 1, sequential_chapter_pointers.length)), '_self');
            break;
        case 'KeyW':
            window.open('../Read/?chapter=' + (Math.max(Number(queryChapter) - 1, 1)), '_self');
            break;
        case 'Digit1':
            window.open('../', '_self');
            break;
    };
};