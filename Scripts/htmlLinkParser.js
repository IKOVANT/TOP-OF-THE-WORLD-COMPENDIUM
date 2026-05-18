import { url } from '../Modules/URL.js'

// Variables
let elementsWithSources = [];
let tempList = [];

// Contents

function parseHTMLLinks () {
    tempList = document.getElementsByTagName('img');
    for (let i = 0; i < tempList.length; i++) {
        let element = tempList[i];
        if (element.src != null) {
            element.src = url(element.src);
        }
    };

    tempList = document.getElementsByTagName('a');
    for (let i = 0; i < tempList.length; i++) {
        let element = tempList[i];
        if (element.href != null) {
            element.href = url(element.href);
        }
    };
};

// Exports
export { parseHTMLLinks };