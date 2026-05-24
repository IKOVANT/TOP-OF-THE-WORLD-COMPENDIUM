import { parseHTMLLinks } from "./Scripts/htmlLinkParser.js";
import { written_chapters, sequential_chapter_pointers } from "./JS-Databases/Chapters.js";
import { chapterLengths } from "./Modules/fileSources.js";

// Variables
let chapterSelectElement = document.getElementById('chapterSelect');

let githubPrefix = window.location.href.includes('github.io') ? 'TOP-OF-THE-WORLD-COMPENDIUM' : '';

// Contents

for (let chapter = 0; chapter < sequential_chapter_pointers.length; chapter++) {
    let chapterPointer = sequential_chapter_pointers[chapter];

    let chapterHolderElement = document.createElement('a');
        chapterHolderElement.classList = 'chapterLink flex horizontal';
        chapterHolderElement.href = 'Read/?chapter=' + (chapter + 1);

        let chapterImageElement = document.createElement('img');
            chapterImageElement.classList = 'chapterThumbnail';
            chapterImageElement.src = written_chapters[chapterPointer].pages[0].URL;

        chapterHolderElement.appendChild(chapterImageElement);

        let chapterTitleElement = document.createElement('p');
            chapterTitleElement.classList = 'chapterTitle';
            chapterTitleElement.innerHTML = written_chapters[chapterPointer].title;

        chapterHolderElement.appendChild(chapterTitleElement);
    chapterSelectElement.appendChild(chapterHolderElement);
};

parseHTMLLinks();

document.onkeydown = function (e) {
    console.log(e.code)
    switch (e.code) {
        case 'Digit2':
            window.open('../Read/?chapter=1', '_self');
            break;
    };
};

// Functions
