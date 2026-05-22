import { written_chapters, sequential_chapter_pointers, remastered_chapter_pointers } from "../../JS-Databases/Chapters.js";
import { parseHTMLLinks } from "../../Scripts/htmlLinkParser.js";

// Variables
let body = document.getElementsByTagName('body')[0];

// Contents
let newTempElement = document.createElement('h2');
    newTempElement.innerHTML = 'Sequential Chapters';
body.appendChild(newTempElement);

sequential_chapter_pointers.forEach(chapter => {
    let newElement = document.createElement('div');
        newElement.innerHTML = '<p>'+written_chapters[chapter].title+'</p>';

        for (let pageID = 0; pageID < written_chapters[chapter].pages.length; pageID++) {
            let newImageElement = document.createElement('img');
                newImageElement.src = written_chapters[chapter].pages[pageID].URL;

            newElement.appendChild(newImageElement)
        };        

    body.appendChild(newElement);
});

newTempElement = document.createElement('h2');
    newTempElement.innerHTML = 'Remastered Chapters';
body.appendChild(newTempElement);

remastered_chapter_pointers.forEach(chapter => {
    let newElement = document.createElement('div');
        newElement.innerHTML = '<p>'+written_chapters[chapter].title+'</p>';

        for (let pageID = 0; pageID < written_chapters[chapter].pages.length; pageID++) {
            let newImageElement = document.createElement('img');
                newImageElement.src = written_chapters[chapter].pages[pageID].URL;

            newElement.appendChild(newImageElement)
        };        

    body.appendChild(newElement);
});

parseHTMLLinks();