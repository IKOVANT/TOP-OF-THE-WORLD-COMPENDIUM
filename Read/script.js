import { generated_smart_files, generated_smart_file_pointers } from "../JS-Databases/Smart-Files.js";
import { parseHTMLLinks } from '../Scripts/htmlLinkParser.js';
import { generateFlipbooks, reformatFlipbooks } from '../Scripts/flipBooks.js';

import { chapterLengths } from '../Modules/fileSources.js';

// Contents
reformatFlipbooks();

parseHTMLLinks();
generateFlipbooks();