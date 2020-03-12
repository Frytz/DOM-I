const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": ["img/logo.png", "img/logo1.png"]
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street \n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
console.log(siteContent["nav"]["img-src"].length)
// Example: Update the img src for the logo
  


let logo = document.getElementById("logo-img");
  var i = 1;
  // while (i < 1){
  //   i++
  // } 
  

logo.setAttribute('src', siteContent["nav"]["img-src"][i])

// nav bar
const navList = document.querySelectorAll('a');
navList[0].textContent = siteContent['nav']['nav-item-1'];
navList[1].textContent = siteContent['nav']['nav-item-2'];
navList[2].textContent = siteContent['nav']['nav-item-3'];
navList[3].textContent = siteContent['nav']['nav-item-4'];
navList[4].textContent = siteContent['nav']['nav-item-5'];
navList[5].textContent = siteContent['nav']['nav-item-6'];

navList.forEach((element, index) => element.style.color = "green");

// new nav items
let nav = document.querySelector("nav");

let newNav1 = document.createElement("a");
let newNav2 = document.createElement("a");
let n1 = document.createTextNode("Twitter");
let n2 = document.createTextNode("Facebook");

newNav1.appendChild(n1);
newNav2.appendChild(n2);

nav.appendChild(newNav1);
nav.prepend(newNav2);

newNav1.style.color = "green";
newNav2.style.color = "green";

newNav1.setAttribute("href", "#");
newNav2.setAttribute("href", "#");
console.log(navList);

// cta section
//const headerSec = document.getElementsByClassName('cta')
//console.log(headerSec);
 let header = document.getElementById("cta-img");
 header.setAttribute('src', siteContent ["cta"]["img-src"])

let ctaText = document.querySelector('h1');
ctaText.innerText = siteContent['cta']['h1'];
ctaText.style.color = "green";

let btnText = document.querySelector('button');
btnText.innerText = siteContent['cta']['button'];
btnText.style.color = "green";
//main content

const contentHeaders = document.querySelectorAll('h4');
const contentPara = document.querySelectorAll ('p');
const contentImg = document.getElementById("middle-img");
contentImg.setAttribute('src', siteContent ["main-content"]["middle-img-src"]);

console.log(contentHeaders);

contentHeaders[0].textContent = siteContent['main-content']['features-h4'];
contentHeaders[0].style.color = "green";
contentPara[0].innerHTML = siteContent['main-content']['features-content'];

contentHeaders[1].textContent = siteContent['main-content']['about-h4'];
contentHeaders[1].style.color = "green";
contentPara[1].innerHTML = siteContent['main-content']['about-content'];

contentHeaders[2].textContent = siteContent['main-content']['services-h4'];
contentHeaders[2].style.color = "green";
contentPara[2].innerHTML = siteContent['main-content']['services-content'];

contentHeaders[3].textContent = siteContent['main-content']['product-h4'];
contentHeaders[3].style.color = "green";
contentPara[3].innerHTML = siteContent['main-content']['product-content'];

contentHeaders[4].textContent = siteContent['main-content']['vision-h4'];
contentHeaders[4].style.color = "green";
contentPara[4].innerHTML = siteContent['main-content']['vision-content'];

//contact

contentHeaders[5].textContent = siteContent['contact']['contact-h4'];
contentHeaders[5].style.color = "green";
contentPara[5].innerText = siteContent['contact']['address'];
contentPara[6].textContent = siteContent['contact']['phone'];
contentPara[7].innerText = siteContent['contact']['email'];
console.log(contentPara);

//footer
contentPara[8].innerText = siteContent['footer']['copyright'];
