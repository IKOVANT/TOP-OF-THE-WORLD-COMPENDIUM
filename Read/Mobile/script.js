import { parseHTMLLinks } from '../../Scripts/htmlLinkParser.js';
import { generateFlipbooks, reformatFlipbooks } from '../../Scripts/flipBooks.js';

import { chapterLengths } from '../../Modules/fileSources.js';

// Contents
parseHTMLLinks();
generateFlipbooks();