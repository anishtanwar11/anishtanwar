/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========= MENU SHOW =============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*============ MENU CLOSE ========== */
/* Validation if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SKILLS TAB ====================*/
let list = document.querySelectorAll('.tab');
let itemBox = document.querySelectorAll('.skills__name');

// Function to show a specific data-item
function showDataItem(dataFilter) {
    // Hide all data-item elements
    for (let k = 0; k < itemBox.length; k++) {
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');
    }

    // Show the data-item that matches the data-filter
    for (let k = 0; k < itemBox.length; k++) {
        if (itemBox[k].getAttribute('data-item') == dataFilter) {
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
            break;
        }
    }
}

// Add click event listeners to tabs
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataFilter = this.getAttribute('data-filter');
        showDataItem(dataFilter);
    });
}

// Initialize by showing the default data-item
for (let k = 0; k < itemBox.length; k++) {
    if (itemBox[k].getAttribute('data-default') == 'true') {
        showDataItem(itemBox[k].getAttribute('data-item'));
        break;
    }
}

