
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




/*=================== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport heigh, add the show-scroll class to the a tag with the scroll
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



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




/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




// ====================================================


// /*==================== PROJECT SECTION ====================*/
let projectButton = document.querySelectorAll('.Pbutton');
let projectItem = document.querySelectorAll('.project__main');

// Function to show a specific data-item
function ShowDataItem(DataFilter) {
    // Hide all data-item elements
    for (let k = 0; k < projectItem.length; k++) {
        projectItem[k].classList.remove('active');
        projectItem[k].classList.add('hide-project');
    }

    // Show the data-item that matches the data-filter
    for (let k = 0; k < projectItem.length; k++) {
        if (projectItem[k].getAttribute('data-item') == DataFilter) {
            projectItem[k].classList.remove('hide-project');
            projectItem[k].classList.add('active');
            break;
        }
    }
}

// Add click event listeners to tabs
for (let i = 0; i < projectButton.length; i++) {
    projectButton[i].addEventListener('click', function () {
        for (let j = 0; j < projectButton.length; j++) {
            projectButton[j].classList.remove('active');
        }
        this.classList.add('active');
        let DataFilter = this.getAttribute('data-filter');
        ShowDataItem(DataFilter);
    });
}

// Initialize by showing the default data-item
for (let k = 0; k < projectItem.length; k++) {
    if (projectItem[k].getAttribute('data-default') == 'true') {
        ShowDataItem(projectItem[k].getAttribute('data-item'));
        break;
    }
}




// ========================== LIGHT BOX FOR PROJECT SECTION =======================
const projectCard = document.querySelectorAll('.project__card')
// Create a lightbox for each itemBox
for (let i = 0; i < projectCard.length; i++) {
    projectCard[i].addEventListener('click', function () {
        // Create a new lightbox element
        const lightBox = document.createElement('div');
        lightBox.classList.add('lightBox');
        // FOR VIDEO
        const videoUrl = this.getAttribute('data-video');
        // FOR PROJECT DESCRIPTION
        const discription = this.getAttribute('data-discription');
        // FOR PROJECT LINK
        const viewWebsite = this.getAttribute('data-link');
        // FOR PROJECT NAME
        const imgName = this.getAttribute('data-name');
        // const imageNameElement = document.getElementById('imageName');
        // imageNameElement.textContent = imgName;

        

        lightBox.innerHTML = `
            <div class="wrapper">
                <header>
                    <div class="logo-img">
                        <img src="images/faveicon-anish.png" alt="logo-img"/>
                    </div>
                    <div class="buttons" id="closePreview">
                       <i class="ri-close-line" ></i>
                    </div>
                </header>
                <div class="preview-img">
                    <div class="img">
                        <img src="${this.querySelector('img').src}" alt="preview">
                    </div>

                    <div class="video-container">
                        <div class="project">
                            <span>${imgName}</span>
                        </div>

                        <div>
                            <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <div class="discription">
                            <p>${discription}</p>
                        </div>

                        <div class="view-project">
                            <a href="${viewWebsite}" target="_blank">View Project</a>
                        </div>
                    </div>
                </div>
        `;

        // Append the lightbox to the body
        document.body.appendChild(lightBox);

        // Add a click event listener to close the lightbox
        const closeLightBox = lightBox.querySelector('#closePreview');
        closeLightBox.addEventListener('click', function () {
            document.body.removeChild(lightBox);
        });

        // Show the lightbox
        lightBox.classList.add('show-lightBox');
    });
}


/*===================== EMAIL JS ================ */
const btn = document.getElementById('contact-button');
function sendMail() {
    (function () {
        emailjs.init("g-KJQRLNcfxfV8syG");
    })();
    contactMessage = document.getElementById('contact-message')
    

    var params = {
        user_name: document.querySelector("#user_name").value,
        user_email: document.querySelector("#user_email").value,
        user_project: document.querySelector("#user_project").value,
    };
    
    var serviceID = "service_8umdftp";
    var templateID = "template_6fsniup";

    if (params.user_name === '' || params.user_email === '' || params.user_project === '') {
        console.log("Fill all feilds")
        // Add and remove color
        contactMessage.classList.remove('color-bule')
        contactMessage.classList.add('color-red')
        // show message

        contactMessage.textContent = 'Write all the input field 📩'

    } else {
        btn.value = 'Sending...';
        emailjs.send(serviceID, templateID, params)
            .then(res => {
                // Show message and add color
                contactMessage.classList.remove('color-red')
                contactMessage.classList.add('color-bule')
                contactMessage.textContent = 'Message sent ✅'

                // Clear form input fields
                document.querySelector("#user_name").value = '';
                document.querySelector("#user_email").value = '';
                document.querySelector("#user_project").value = '';
                btn.value = 'Send';
                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000);
            })
            .catch();
    }
}




// ========================= GSAP ANIMATION ==========================

// FOR HOME
gsap.from('.founder_name', {duration:1, x:'-100%', ease:'power3',delay:1})
gsap.from('.home__title', {duration:1, x:'-110%', ease:'power3', delay:2})
gsap.from('.home__info-title', {duration:1, x:'-120%', ease:'power3', delay:3})
gsap.from('.home__buttons', {duration:1, opacity:0, delay:4, ease:'slow'})

// FOR QUALIFACTION
// gsap.from('.qualification_one', {duration:1, opacity:0, delay:1})
