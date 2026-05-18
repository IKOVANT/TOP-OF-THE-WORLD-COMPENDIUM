import { URL, SmartSource, Page, Comic, Chapter } from "./resources.js";
import { files } from "./fileSources.js";

// Variables
let chapters = {
    'TOTW #1': new Chapter('TOP OF THE WORLD', [
        files["TOTW #1 - Cover"],
        files["TOTW #1 - Pg.1"],
        files["TOTW #1 - Pg.2"],
        files["TOTW #1 - Pg.3"],
        files["TOTW #1 - Pg.4"],
        files["TOTW #1 - Pg.5"],
    ]),
};

// Contents

// Functions
export { chapters };