import { generated_smart_files, generated_smart_file_pointers } from "../../JS-Databases/Smart-Files.js";
import { parseHTMLLinks } from "../../Scripts/htmlLinkParser.js";

// Variables
let body = document.getElementsByTagName('body')[0];

// Contents
generated_smart_file_pointers.forEach(smartFile => {
    let newElement = document.createElement('div');
        newElement.innerHTML = '<img src="' + generated_smart_files[smartFile].URL + '">';

    body.appendChild(newElement);
});

parseHTMLLinks();