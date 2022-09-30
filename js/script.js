let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let loginBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form");
let formClose = document.querySelector('#form-close');
let videoBtn = document.querySelectorAll('.vid-btn');
let reg = document.querySelector('.btn-reg');
let reg1 = document.querySelector('.btn-reg1');
let reg2 = document.querySelector('.btn-reg2');
let reg3 = document.querySelector('.btn-reg3');
let reg4 = document.querySelector('.btn-reg4');
let bookReg = document.querySelector('.book-reg');
let count1 = 1;
let count2 = 1;
let count3 = 1;



var loader = document.querySelector('.preloader');
window.addEventListener('load', function () {
    loader.style.display = "none";
})

var clients = setInterval(project, 10);
var years = setInterval(year, 100);
var tour = setInterval(tours, 100);


function project() {
    count1++;
    document.querySelector('.number').innerHTML = count1;
    if (count1 == 600) {
        clearInterval(clients);
    }

}

function year() {
    count2++;
    document.querySelector('.number1').innerHTML = count2;
    if (count2 == 12) {
        clearInterval(years);
    }

}

function tours() {
    count3++;
    document.querySelector('.number2').innerHTML = count3;
    if (count3 == 100) {
        clearInterval(tour);
    }

}


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formClose.addEventListener('click', () => {

    loginForm.classList.remove('loginactive');
});

loginBtn.addEventListener('click', () => {

    loginForm.classList.add('loginactive');
});


reg.addEventListener('click', () => {
    loginForm.classList.add('loginactive');
})



videoBtn.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        button.classList.add('active');
        let src = button.getAttribute('data-src');
        document.querySelector('#video-slider').src = src
    });
});






reg.addEventListener('click', () => {
    loginForm.classList.add('loginactive');
})

reg1.addEventListener('click', () => {
    loginForm.classList.add('loginactive');
})
reg2.addEventListener('click', () => {
    loginForm.classList.add('loginactive');
})
reg3.addEventListener('click', () => {
    loginForm.classList.add('loginactive');
})
reg4.addEventListener('click', () => {
    loginForm.classList.add('loginactive');
})
bookReg.addEventListener('click', () => {
    loginForm.classList.add('loginactive');
})
