const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.popup__close-enter');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup-enter'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup-enter.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content-enter')) {
                popupClose(e.target.closest('.popup-enter'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup-enter.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();


//Tabs
// let tabs = document.querySelectorAll("._tabs");
// for (let index = 0; index < tabs.length; index++) {
//     let tab = tabs[index];
//     let tabs_items = tab.querySelectorAll("._tabs-item");
//     let tabs_blocks = tab.querySelectorAll("._tabs-block");
//     for (let index = 0; index < tabs_items.length; index++) {
//         let tabs_item = tabs_items[index];
//         tabs_item.addEventListener("click", function (e) {
//             for (let index = 0; index < tabs_items.length; index++) {
//                 let tabs_item = tabs_items[index];
//                 tabs_item.classList.remove('_active');
//                 tabs_blocks[index].classList.remove('_active');
//             }
//             tabs_item.classList.add('_active');
//             tabs_blocks[index].classList.add('_active');
//             e.preventDefault();
//         });
//     }
// }

// let toggleSortImgs = document.querySelectorAll('.registration-mark__item');
// if (toggleSortImgs) {
//     for (let index = 0; index < toggleSortImgs.length; index++) {
//         let toggleSortImg = toggleSortImgs[index];
//         toggleSortImg.addEventListener("click", function (e) {
//             let toggleSortImgItems = document.querySelectorAll('.registration-mark__item img');
//             for (let index = 0; index < toggleSortImgItems.length; index++) {
//                 let toggleSortImgItem = toggleSortImgItems[index];
//                 // if (toggleSortImgItem.classList.closest('._spoller-active')) {
//                 toggleSortImgItem.classList.toggle('_active');
//                 // }

//             }
//         })
//     }
// }

// let toggleSortImgs = document.querySelectorAll('.registration-mark__item');
// if (toggleSortImgs) {
//     for (let index = 0; index < toggleSortImgs.length; index++) {
//         let toggleSortImg = toggleSortImgs[index];
//         toggleSortImg.addEventListener("click", function (e) {
//             let toggleSortImgItems = document.querySelector('.registration-mark__item-img');
//             toggleSortImgItems.classList.toggle('_active');
//         })
//     }
// }







