// Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function() {scrollFunction()};
// khai báo hàm scrollFunction
function scrollFunction() {
    if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
        document.querySelector(".to-top").style.display = "block";
    } else {
        document.querySelector(".to-top").style.display = "none";
    }
}
// search
const items = [
    {
        name: 'Spider man: no way home',
        link: './spider-man-no-way-home.html',
        image: 'Spider-man-no-way-home-img.jpg'// done
    },
    {
        name: 'Free Guy',
        link: './free-guy.html',
        image: 'Free-guy-img.jpg'// done
    },
    {
        name: '1917',
        link: './1917.html',
        image: '1917-img.jpg'// done
    },
    {
        name: 'Arcane',
        link: './Arcane.html',
        image: 'Arcane-img.jpg'// done
    },
    {
        name: 'Eternals',
        link: './Eternals.html',
        image: 'Eternals-img.png'// done
    },
    {
        name: 'Invisible Man',
        link: './Invisible-man.html',
        image: 'Invisible-man-img.jpg'// done
    },
    {
        name: 'Joker',
        link: './Joker.html',
        image: 'Joker-img.jpg'// done
    },
    {
        name: 'Little Women',
        link: './Little-Women.html',
        image: 'Little-women-img.jpg'// done
    },
    {
        name: 'The Medium',
        link: './Medium.html',
        image: 'The-medium-img.jpg'// done
    },
    {
        name: 'Life of Pi',
        link: './Pi.html',
        image: 'Pi-img.jpg'// done
    },
    {
        name: 'Sherlock',
        link: './Sherlock.html',
        image: 'Sherlock-img.jpg'// done
    },
    {
        name: 'The Greatest Showman',
        link: './the-greatest-showman.html',
        image: 'The-greatest-showman-img.jpg'// done
    },
]
function render() {
    var data = document.querySelector('.search-box-web').value
    var html = "";
    for (const item of items) {
        var temp = "";
        if ((item.name.toLowerCase()).indexOf(data.toLowerCase()) != -1) {
            temp = `
            <div class="col l-3 m-4 sm-12">
                <div class="search-item">
                    <img src="./assets/img/${item.image}" alt="${item.name}">
                    <a href="${item.link}"><h4>${item.name}</h4></a>
                </div>
            </div>`
        }
        html = html.concat(temp, "");
    }
    if (data == '') {
        html = items.map(item => `
        <div class="col l-3 m-4 sm-12">
            <div class="search-item">
                <img src="./assets/img/${item.image}" alt="${item.name}">
                <a href="${item.link}"><h4>${item.name}</h4></a>
            </div>
        </div>`).join('')
    }
    document.querySelector('#js-search-list').innerHTML = html
}
const search = document.querySelector('.search-box-web');
if (search != null) {
    search.onkeypress = function (d) {
        if (d.keyCode == 13){
            render()
        }
    }
}
// nav bar mobile tablet
const navOverlay = document.querySelector('.nav-overlay');
const navMobileTablet = document.querySelector('.js-nav-mobile-tablet')
function nav_open() {
    navOverlay.style.display = 'block';
    navMobileTablet.style.display = 'block';
}
function nav_exit() {
    navOverlay.style.display = 'none';
    navMobileTablet.style.display = 'none';
    sub_nav.style.display = 'none'
}

// category
const sub_nav = document.querySelector('.sub-nav-mobile-tablet')
function category_open() {
    if (sub_nav.style.display == 'none') {
        sub_nav.style.display = 'inline-block';    
    }
    else {
        sub_nav.style.display = 'none';
    }
}

// slideshow auto
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.querySelectorAll('.js-mySlides');
    if (slides.length == 0) {
        return;
    }
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = 'none'; //
    }
    slideIndex= slideIndex +1;
    if (slideIndex > slides.length) {slideIndex = 1}    
    const temp = slides[slideIndex - 1];
    temp.style.display = 'block';
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// slide main post
var slideIndexPost = 1;
showSlidesPost(slideIndexPost);

function plusSlides(n) {
    showSlidesPost(slideIndexPost += n);
}

function currentSlide(n) {
    showSlidesPost(slideIndexPost = n);
}

function showSlidesPost(n) {
    var j;
    var slidesPost = document.querySelectorAll('.js-mySlidesPost');
    if (slidesPost.length == 0) {
        return;
    }
    if (n > slidesPost.length) {slideIndexPost = 1}    
    if (n < 1) {slideIndexPost = slidesPost.length}
    for (j = 0; j < slidesPost.length; j++) {
        slidesPost[j].style.display = "none";  
    }
    slidesPost[slideIndexPost-1].style.display = "block";
}
// login / register
const loginRegister = document.querySelector('#login-register')
const login = document.querySelector('#login');
const register = document.querySelector('#register');
function login_open () {
    if (loginRegister.style.display == "flex") {
        loginRegister.style.display = "none";
        login.style.display = "flex";
        register.style.display = "none";
        document.querySelector('.regex-username-login').innerHTML = '';
        document.querySelector('.regex-password-login').innerHTML = '';
        document.querySelector('.regex-username-register').innerHTML = '';
        document.querySelector('.regex-password-register').innerHTML = '';
        document.querySelector('.regex-password-again').innerHTML = '';
    }
    else {
        loginRegister.style.display = "flex";
        login.style.display = "flex";
        register.style.display = "none";
    }
    login.addEventListener('click', function (event) {
        event.stopPropagation();
    })
    register.addEventListener('click', function (event) {
        event.stopPropagation();
    })
}
function register_open () {
    if (register.style.display == "none") {
        login.style.display = "none";
        register.style.display = "flex";
        document.querySelector('.regex-username-login').innerHTML = '';
        document.querySelector('.regex-password-login').innerHTML = '';
    }
    else {
        login.style.display = "flex";
        register.style.display = "none";
        document.querySelector('.regex-username-register').innerHTML = '';
        document.querySelector('.regex-password-register').innerHTML = '';
        document.querySelector('.regex-password-again').innerHTML = '';
    }
}
function check_regex() {
    let regex_check = true;
    let regex;
    let username = document.querySelector('.username-login').value;
    regex = /^(?=.*[a-zA-Z])[\w._]{8,20}$/;
    if(!regex.test(username)) {
        document.querySelector('.regex-username-login').innerHTML = "Username không hợp lệ! (dài từ 8-20 ký tự, chứa các kí tự a-z,A-Z,0-9,dấu .,dấu _ )";
        regex_check = false;
    }
    else {
        document.querySelector('.regex-username-login').innerHTML = '';
    }
    let password = document.querySelector('.password-login').value;
    regex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{8,}$/;
    if(!regex.test(password)) {
        document.querySelector('.regex-password-login').innerHTML = "Mật khẩu không hợp lệ! (mật khẩu phải chứa ít nhất 8 ký tự, ít nhất 1 chữ cái thường, 1 chữ cái in hoa và 1 số)";
        regex_check = false;
    }
    else {
        document.querySelector('.regex-password-login').innerHTML = '';
    }
    if(regex_check) {
        alert('Đăng nhập thành công');
        login_open();
    }
}
function check_regex_submit() {
	let regex_check = true;
	let regex;
	let username = document.querySelector('.username-register').value;
	regex = /^(?=.*[a-zA-Z])[\w._]{8,20}$/;
	if(!regex.test(username)) {
		document.querySelector('.regex-username-register').innerHTML = "Username không hợp lệ! (dài từ 8-20 ký tự, chứa các kí tự a-z,A-Z,0-9,dấu .,dấu _ )";
		regex_check = false;
	}
	else {  
		document.querySelector('.regex-username-register').innerHTML = '';
	}
    let password = document.querySelector('.password-register').value;
	regex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{8,}$/;
	if(!regex.test(password)) {
		document.querySelector('.regex-password-register').innerHTML = "Mật khẩu không hợp lệ! (mật khẩu phải chứa ít nhất 8 ký tự, ít nhất 1 chữ cái thường, 1 chữ cái in hoa và 1 số)";
		regex_check = false;
	}
	else {
	    document.querySelector('.regex-password-register').innerHTML = '';
    }
    let password_again = document.querySelector('.password-again').value;
	if(password_again != password) {
		document.querySelector('.regex-password-again').innerHTML = "Nhập lại mật khẩu";
		regex_check = false;
	}
	else {
		document.querySelector('.regex-password-again').innerHTML = '';
	}
	if(regex_check) {
		alert('Đăng ký thành công');
        login_open();
    }
}
