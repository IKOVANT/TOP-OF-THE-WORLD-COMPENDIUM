// Contents

// Functions
function activateComic (comic = document.getElementsByClassName('comic')[0]) {
    comic.setAttribute('current-page', 0);
    comic.setAttribute('last-page', (comic.childElementCount - 1));
    comic.style.setProperty('--current-page', 0)
    comic.style.setProperty('--last-page', (comic.childElementCount - 1))

    for (let pageNum = 0; pageNum < comic.childElementCount; pageNum++) {
        let page = comic.children[pageNum];
        page.setAttribute('index', pageNum);
        page.style.setProperty('--index', pageNum)
    };

    updateComic();
};

function comic_nextPage () {
    let comic = document.getElementsByClassName('comic')[0];
    let currentPage = Number(comic.getAttribute('current-page'));
    let lastPage = Number(comic.getAttribute('last-page'));

    if (currentPage < lastPage) {
        comic.setAttribute('current-page', currentPage + 2);
        comic.style.setProperty('--current-page', currentPage + 2);
    };

    updateComic();
};
function comic_previousPage () {
    let comic = document.getElementsByClassName('comic')[0];
    let currentPage = Number(comic.getAttribute('current-page'));
    let lastPage = Number(comic.getAttribute('last-page'));

    if (currentPage > 0) {
        comic.setAttribute('current-page', currentPage - 2);
        comic.style.setProperty('--current-page', currentPage - 2);
    };

    updateComic();
};

function updateComic (comic = document.getElementsByClassName('comic')[0]) {
    let currentPage = Number(comic.getAttribute('current-page'));

    for (let pageNum = 0; pageNum < comic.childElementCount; pageNum++) {
        let page = comic.children[pageNum];
        let index = Number(page.getAttribute('index'));

        page.removeEventListener('click', comic_previousPage);
        page.removeEventListener('click', comic_nextPage);

        if (index < currentPage) {
            page.classList.add('old');
            page.style.setProperty('--placement', -1);

            page.addEventListener('click', comic_previousPage);
        } else {
            page.classList.remove('old');
            page.style.setProperty('--placement', 1);

            page.addEventListener('click', comic_nextPage);
        };
    };
};

// Exports
export { activateComic, comic_nextPage, comic_previousPage };