import { webPages } from "../Modules/fileSources.js";

// Variables
var flipBooks = document.getElementsByClassName('flipBook');
var activeFlipBook = flipBooks[0];

// Contents
function reformatFlipbooks () {
    let startingFlipbooks = document.getElementsByClassName('flipBook');

    let newFlipbooks = []
    for (let flipBookID = 0; flipBookID < startingFlipbooks.length; flipBookID++) {
        let flipBookHolder = document.createElement('div');
            flipBookHolder.classList.add('flex', 'horizontal', 'grow', 'center');

            let flipBook = document.createElement('div');
                flipBook.classList.add('flipBook', 'flex', 'horizontal');
                    
                let flipBookInner = document.createElement('div');
                    flipBookInner.classList.add('flipBookInner', 'flex', 'horizontal');
                    
                    for (let pageID = 0; pageID < startingFlipbooks[flipBookID].childElementCount; pageID++) {
                        let flipBookPage = document.createElement('div');
                            flipBookPage.classList = startingFlipbooks[flipBookID].children[pageID].classList;

                            let flipBookImage = document.createElement('img');
                                flipBookImage.src = startingFlipbooks[flipBookID].children[pageID].src;
                            flipBookPage.appendChild(flipBookImage);
                        flipBookInner.appendChild(flipBookPage);
                    };
                flipBook.appendChild(flipBookInner);
            flipBookHolder.appendChild(flipBook);
        startingFlipbooks[flipBookID].replaceWith(flipBookHolder);
    };

};

function generateFlipbooks () {
    for (let i = 0; i < flipBooks.length; i++){
        let flipBook = flipBooks[i];
        let flipBookInner = flipBooks[i].getElementsByClassName('flipBookInner')[0];

        let flipBookPrev = flipBooks[i].getElementsByClassName('flipBookPrev')[0];
        let flipBookNext = flipBooks[i].getElementsByClassName('flipBookNext')[0];

        flipBook.setAttribute('flip-progress', 1);
        flipBook.setAttribute('flip-max', flipBookInner.childElementCount);

        // flipBookPrev.addEventListener('click', function () {
        //     activeFlipBook = flipBook;
        //     flipBook_flipBackward(flipBook);
        // });
        // flipBookNext.addEventListener('click', function () {
        //     activeFlipBook = flipBook;
        //     flipBook_flipForward(flipBook);
        // });

        for (let pageNum = 0; pageNum < flipBookInner.childElementCount; pageNum++) {
            let page = flipBookInner.children[pageNum];
            page.addEventListener('click', function () {
                activeFlipBook = flipBook;

                if (page.classList.contains('currentPage')) {
                    flipBook_flipForward(flipBook);
                } else if (page.classList.contains('previousPage')) {
                    flipBook_flipBackward(flipBook);
                }
            });
        };
    };



    updateFlipbooks();

    document.onkeypress = function (e) {
        switch (e.code) {
            case 'ArrowRight':
            case 'KeyD':
                flipBook_flipForward(activeFlipBook);
                break;
            case 'ArrowLeft':
            case 'KeyA':
                flipBook_flipBackward(activeFlipBook);
                break;
            case 'KeyE':
                goToNextWebPage();
                break;
            case 'KeyQ':
                goToPreviousWebPage();
                break;
            case 'KeyS':
                megaFlipBook_next();
                break;
            case 'KeyW':
                megaFlipBook_previous();
                break;
        };
    };

    let inputTip = document.createElement('h2');
        inputTip.innerText = 'Try tapping the pages, or using WASD'
    document.getElementsByTagName('footer')[0].appendChild(inputTip);

    flipBook_flipForward(activeFlipBook);
    flipBook_flipBackward(activeFlipBook);
    megaFlipBook_next();
    megaFlipBook_previous();
};


// Function
function flipBook_flipForward (flipBook) {
    let flipProgress = Number(flipBook.getAttribute('flip-progress'));
    let flipMax = Number(flipBook.getAttribute('flip-max'));

     if (flipProgress < flipMax) {
        flipBook.setAttribute('flip-progress', flipProgress + 2);

        updateFlipbooks();
    } else {
        megaFlipBook_next();
    }
};
function flipBook_flipBackward (flipBook) {
        let flipProgress = Number(flipBook.getAttribute('flip-progress'));

        if (flipProgress > 1) {
            flipBook.setAttribute('flip-progress', Math.max(flipProgress - 2, 1));

            updateFlipbooks();
        } else {
            megaFlipBook_previous();
        };
};

function megaFlipBook_next () {
    let activeFlipBookID = 0;
    for (let i = 0; i < flipBooks.length; i++){
        if (flipBooks[i] == activeFlipBook) {
            activeFlipBookID = i;
        };
    };

    if (flipBooks[activeFlipBookID + 1] != null) {
        activeFlipBook = flipBooks[activeFlipBookID + 1];
    };

    updateFlipbooks();
};
function megaFlipBook_previous () {
    let activeFlipBookID = 0;
    for (let i = 0; i < flipBooks.length; i++){
        if (flipBooks[i] == activeFlipBook) {
            activeFlipBookID = i;
        };
    };

    if (flipBooks[activeFlipBookID - 1] != null) {
        activeFlipBook = flipBooks[activeFlipBookID - 1];
    };
    
    updateFlipbooks();
};

function goToNextWebPage () {
    let thisPage = document.getElementsByTagName('title')[0].innerHTML;
    let newPage = webPages[webPages[thisPage].next].link;

    if (newPage != null) {
        window.open('./Chapters/' + newPage, '_self');
    };
};
function goToPreviousWebPage () {
    let thisPage = document.getElementsByTagName('title')[0].innerHTML;
    let newPage = webPages[webPages[thisPage].previous].link;

    if (newPage != null) {
        window.open('./Chapters/' + newPage, '_self');
    };
}

function updateFlipbooks () {
    let activeFlipBookID = 0;


    for (let i = 0; i < flipBooks.length; i++){
        if (flipBooks[i] == activeFlipBook) {
            activeFlipBookID = i;
        };
    };

    document.getElementById('header').innerHTML = 'TOP OF THE WORLD #' + (activeFlipBookID + 1);

    for (let i = 0; i < flipBooks.length; i++){
        let flipBook = flipBooks[i];
        let flipBookInner = flipBooks[i].getElementsByClassName('flipBookInner')[0];

        for (let i2 = 0; i2 < flipBookInner.childElementCount; i2++) {
            let flipBookProgress = flipBook.getAttribute('flip-progress');

            let flipBookPage = flipBookInner.children[i2];
                flipBookPage.style.setProperty('--offset', flipBookProgress - i2)

            if (flipBookProgress == i2 + 1) {
                flipBookPage.classList.add('currentPage');
                flipBookPage.classList.remove('previousPage', 'oldPage');
            } else
            if (flipBookProgress - 1 == i2 + 1) {
                flipBookPage.classList.add('previousPage');
                flipBookPage.classList.remove('currentPage', 'oldPage');
            } else
            if (flipBookProgress >= i2 + 1) {
                flipBookPage.classList.add('oldPage');
                flipBookPage.classList.remove('currentPage', 'previousPage');
            } else {
                flipBookPage.classList.remove('currentPage', 'previousPage', 'oldPage');
            };
        };

        flipBook.parentElement.style.setProperty('--offset', i - activeFlipBookID);
        // flipBook.parentElement.style.zIndex = i - activeFlipBookID;
    };
};

// Exports
export { reformatFlipbooks, generateFlipbooks };