function tabSwitcher(tabClass, infoClass, tabContentClass) {
    window.addEventListener('DOMContentLoaded', function () {
        'use strict';
        let tab = document.querySelectorAll(`.${tabClass}`),
            info = document.querySelector(`.${infoClass}`),
            tabContent = document.querySelectorAll(`.${tabContentClass}`);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        hideTabContent(1);

        info.addEventListener('click', function (e) {
            let target = e.target;
            if (target && target.classList.contains(tabClass)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    });
}
