const mailBtn = document.querySelectorAll('.contact_div div div')[3],
      scrollBtn = document.querySelector('.scrollBtn'),
      aboutBtn = document.getElementById('about'),
      skillBtn = document.getElementById('skills'),
      educationBtn = document.getElementById('education'),
      projectsBtn = document.getElementById('projects'),
      indevBtn = document.getElementById('indev');

let mailClicked = false,
    scrollBtnShow = false;

function mailLink(){
    if(!mailClicked) {
        mailClicked = true;
        const parent = document.querySelectorAll('.contact_fone')[3];
        parent.insertAdjacentHTML('beforeend', '<div class="alert alert-success messageBox" role="alert">gladchuck.sah@gmail.com <div class="copyBtn"><i class="fas fa-copy"></i></div> <div class="closeBtn"><i class="fas fa-times"></i></div> </div>');
        const message = document.querySelector('.messageBox');
        const copyBtn = document.querySelector('.copyBtn');
        const closeBtn = document.querySelector('.closeBtn');
        let hovered = false;
        timer();

        message.addEventListener('mouseenter', hover);
        message.addEventListener('mouseleave', leave);
        copyBtn.addEventListener('click', copy);
        closeBtn.addEventListener('click', close);

        function hover() {
            message.style.opacity = 1;
            hovered = true;
        }
        function leave() {
            let start = Date.now();
            let leaveRepeat = setInterval(() => {
                hovered = false
                let timePassed = Date.now() - start;
                if (timePassed >= 40){ clearInterval(leaveRepeat)}
            }, 20)
            timer();
        }
        function timer() {
            let start = Date.now();
            let timer = setInterval(function () {
                if (hovered) {
                    clearInterval(timer)
                    return;
                }
                let timePassed = Date.now() - start;
                if (timePassed >= 10000 || !mailClicked) {
                    clearInterval(timer);
                    message.style.opacity = 0;
                    message.remove();
                    mailClicked = false;
                    return;
                }
                if (!hovered) {
                    draw(timePassed);
                }
            }, 20);
        }
        function draw(timePassed) {
            message.style.opacity = 1 - timePassed * 0.0001;
        }
        function copy() {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(message);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
        }
        function close(){
            message.remove();
            mailClicked = false;
        }
    }
}
function checkScroll(){
    const clientScroll = document.documentElement.scrollTop;
    if (clientScroll >= 300){
        scrollBtn.classList.remove('hide');
        scrollBtn.classList.toggle('hideFade', false);
        scrollBtn.classList.add('show');
        scrollBtnShow = true;
    } else if (scrollBtnShow) {
        scrollBtn.classList.remove('show');
        scrollBtn.classList.add('hide');
        scrollBtn.classList.add('hideFade');
        scrollBtnShow = false;
    } else {
        scrollBtn.classList.remove('show');
        scrollBtn.classList.add('hide');
        scrollBtnShow = false;
    }
}
function scrollUp(){
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
}
function scrollToSec(elem){
    let DocumentTop = document.querySelector(".firstSec"),
        ElTop = parseInt(elem.getBoundingClientRect().top) - parseInt(DocumentTop.getBoundingClientRect().top);
    window.scrollTo({
    top: ElTop,
    behavior: "smooth"
    });
}

checkScroll();
mailBtn.addEventListener('click', mailLink);
document.addEventListener('scroll', checkScroll);
scrollBtn.addEventListener('click', scrollUp);
aboutBtn.addEventListener('click', () => scrollToSec(aboutBtn));
skillBtn.addEventListener('click', () => scrollToSec(document.querySelector(".thridSec")));
educationBtn.addEventListener('click', () => scrollToSec(document.querySelector(".fourthSec")));
projectsBtn.addEventListener('click', () => scrollToSec(document.querySelector(".fifthSec")));


