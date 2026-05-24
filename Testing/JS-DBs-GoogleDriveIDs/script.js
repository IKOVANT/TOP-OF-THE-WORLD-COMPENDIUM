import { generated_google_drive_urls } from "../../JS-Databases/Google-Drive-IDs.js";
import { parseHTMLLinks } from "../../Scripts/htmlLinkParser.js";

// Variables
let body = document.getElementsByTagName('body')[0];

// Contents
generated_google_drive_urls.forEach(gDrive_url => {
    let newElement = document.createElement('div');
        newElement.innerHTML = 
            '<label for="'+gDrive_url.title+'">' + gDrive_url.title + 
            '</label><ul name="'+gDrive_url.title+'"><li>'+
                gDrive_url.url+
            '</li><li><img src="'+gDrive_url.url+'"></li></ul>';

    body.appendChild(newElement);
});

parseHTMLLinks();