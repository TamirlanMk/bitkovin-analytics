Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const ADVANTAGES_LIST_INFO_CLASS = '.advantages__info-list__item'
const advantages = document.querySelectorAll('.advantages__item')

advantages.forEach((item, index) => {
    item.onmouseover = (e) => {
        const info = document.querySelectorAll(`${ADVANTAGES_LIST_INFO_CLASS}[data-advantage="${item.dataset.advantageIndex}"]`);

        advantages.forEach(i => {
            if (i.dataset.advantageIndex !== item.dataset.advantageIndex)
                i.classList.add('close-title')
        });

        info.forEach(item => {
            item.classList.add('active')
        });
    }

    item.onmouseout = (e) => {
        const info = document.querySelectorAll(`${ADVANTAGES_LIST_INFO_CLASS}[data-advantage="${item.dataset.advantageIndex}"]`);

        advantages.forEach(i => {
            i.classList.remove('close-title')
        });

        info.forEach(item => {
            item.classList.remove('active')
        });
    }
})

const howWorksAccordion = document.querySelectorAll('.accordion-item');

howWorksAccordion.forEach(item => {
    item.onclick = () => {
        if (item.classList.contains('active') && item.dataset.type !== 'removable') {
            return
        } else if (item.classList.contains('active') && item.dataset.type === 'removable') {
            item.classList.remove('active')
            return;
        }

        howWorksAccordion.forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
    }
})

const offerCollapseBtn = document.querySelectorAll('.offer__collapse')

offerCollapseBtn.forEach(btn => {
    btn.onclick = (e) => {
        e.preventDefault();
        const offer = e.target.closest('.offer');

        if (offer && btn.classList.contains('active')) {
            offer.classList.remove('active')
            let timer = setTimeout(() => {
                btn.classList.remove('active')
                clearTimeout(timer)
            }, 150)
        } else {
            offer.classList.add('active')
            let timer = setTimeout(() => {
                btn.classList.add('active')
                clearTimeout(timer)
            }, 150)
        }
    }
})

const offerTabs = document.querySelectorAll('.tabs .tab')
const offerNavTabs = document.querySelectorAll('.tabs__nav-link')

offerNavTabs.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault()
        let tab = document.querySelector(`${btn.getAttribute('href')}`)

        offerNavTabs.forEach((i) => {
            i.setAttribute('data-btn-type', 'white');
        })
        btn.setAttribute('data-btn-type', 'dark');

        offerTabs.forEach(t => {
            t.classList.remove('active')
        })

        tab.classList.add('active')
    }
})