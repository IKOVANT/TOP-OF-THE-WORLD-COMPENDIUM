// Variables
let saveData = {
    'save': saveItem,
    'load': loadItem,
    'delete': deleteItem,
    'whipe': whipeAllSaveData,
    'exists': itemExists,
};

var prefered_database = 'google_drive';

// Contents
if (saveData.exists('prefered_database')) {
    prefered_database = saveData.load('prefered_database');
} else {
    saveData.save('prefered_database', prefered_database);
};

// Functions
function saveItem (key = '', value = ''|0|false) {
    localStorage.setItem(key, value);
};
function loadItem (key = '') {
    return localStorage.getItem(key);
};
function deleteItem (key = '') {
    localStorage.removeItem(key, value);
};
function whipeAllSaveData () {
    localStorage.clear();
};
function itemExists (key = '') {
    return (localStorage.getItem(key) != null);
};

// Exports
export { saveData, prefered_database, saveItem, loadItem, deleteItem, whipeAllSaveData, itemExists };
export default { saveData };