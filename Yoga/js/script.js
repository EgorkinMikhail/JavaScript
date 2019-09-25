
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent= document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');   
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadLine = '2019-09-21';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date());
        //console.log(t);
        let hh = Math.floor(t/(1000*60*60)),
            mm = Math.floor((t/1000/60) % 60),
            ss = Math.floor((t/1000) % 60);
            ss = (ss > 9) ? ss : "0"+ss;
            mm = (mm > 9) ? mm : "0"+mm;
            hh = (hh > 9) ? hh : "0"+hh;
        return {
            'total' : t,
            'hh' : hh,
            'mm' : mm,
            'ss' : ss
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hh = timer.querySelector('.hours'),
            mm = timer.querySelector('.minutes'),
            ss = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
            function updateClock() {
                let t = getTimeRemaining(endTime);
                hh.textContent = t.hh;
                mm.textContent = t.mm;
                ss.textContent = t.ss;                
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hh.textContent = "00";
                mm.textContent = "00";
                ss.textContent = "00";
            }
        }
    }

    setClock('timer', deadLine);
});