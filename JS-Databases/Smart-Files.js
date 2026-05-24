import { SmartSource } from "../Modules/resources.js";
import { chapterLengths } from "../Modules/fileSources.js";

import { generated_google_drive_urls } from "./Google-Drive-IDs.js";

// Variables
const writen_smart_files = [
    'Blank',
    'TOTW #1 Remaster - Cover',
    'TOTW #1 Remaster - Pg.1',
    'TOTW #1 Remaster - Pg.2',
    'TOTW #1 Remaster - Pg.3',
    'TOTW #1 Remaster - Pg.4',
    'TOTW #1 Remaster - Pg.5',
];
var generated_smart_files = {};
var generated_smart_file_pointers = [];

// Contents
writen_smart_files.forEach(fileName => {
    generated_smart_files[fileName] = new SmartSource();
    generated_smart_file_pointers.push(fileName);
});

for (let chapter = 0; chapter < chapterLengths.length; chapter++) {
    generated_smart_files['TOTW #' + (chapter + 1) + ' - Cover'] = new SmartSource();
    generated_smart_file_pointers.push('TOTW #' + (chapter + 1) + ' - Cover');
    for (let page = 1; page <= chapterLengths[chapter]; page++) {
        let title = 'TOTW #' + (chapter + 1) + ' - Pg.' + page;

        generated_smart_files[title] = new SmartSource();
        generated_smart_file_pointers.push(title);
    };
};

generated_google_drive_urls.forEach(gDrive_url => {
    generated_smart_files[gDrive_url.title].addSources([gDrive_url.url])
});

// Exports
export { generated_smart_files, generated_smart_file_pointers };