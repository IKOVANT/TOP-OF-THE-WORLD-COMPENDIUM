import { URL, SmartSource, Page, Comic, Chapter } from "./resources.js";
import { generated_smart_files } from "../JS-Databases/Smart-Files.js";

// Variables
let chapters = {
    'TOTW #1': new Chapter('TOP OF THE WORLD', [
        generated_smart_files["TOTW #1 - Cover"],
        generated_smart_files["TOTW #1 - Pg.1"],
        generated_smart_files["TOTW #1 - Pg.2"],
        generated_smart_files["TOTW #1 - Pg.3"],
        generated_smart_files["TOTW #1 - Pg.4"],
        generated_smart_files["TOTW #1 - Pg.5"],
    ]),
};

// Contents

// Functions
export { chapters };