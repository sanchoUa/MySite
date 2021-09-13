const circlesAll = {
        gray: [document.querySelectorAll('.circles div')[0], document.querySelectorAll('.circles div')[3]],
        yellow: [document.querySelectorAll('.circles div')[1], document.querySelectorAll('.circles div')[4]],
        blue: [document.querySelectorAll('.circles div')[2], document.querySelectorAll('.circles div')[5]],
    },

    pageElements = [document.querySelector('.rightLine .one'),
                    document.querySelector('.rightLine .three'),
                    document.querySelectorAll('.contact_fone div')[0],
                    document.querySelectorAll('.contact_fone div')[1],
                    document.querySelectorAll('.contact_fone div')[2],
                    document.querySelectorAll('.contact_fone div')[3],
                    document.querySelector('.skills_f'),
                    document.querySelector('.education_f'),
                    document.querySelector('.projects_f'),
                    document.querySelector('.indev_f'),
    ],

    changeTheme = (event) => {
        if (event.target.classList.toString() != 'one_active'
            && event.target.classList.toString() != 'two_active'
            && event.target.classList.toString() != 'three_active')
        {
            circlesAll.gray[0].classList.toggle('one_active', false);
            circlesAll.gray[0].classList.toggle('one', true);
            circlesAll.yellow[0].classList.toggle('two_active', false);
            circlesAll.yellow[0].classList.toggle('two', true);
            circlesAll.blue[0].classList.toggle('three_active', false);
            circlesAll.blue[0].classList.toggle('three', true);
            circlesAll.gray[1].classList.toggle('one_active', false);
            circlesAll.gray[1].classList.toggle('one', true);
            circlesAll.yellow[1].classList.toggle('two_active', false);
            circlesAll.yellow[1].classList.toggle('two', true);
            circlesAll.blue[1].classList.toggle('three_active', false);
            circlesAll.blue[1].classList.toggle('three', true);

            document.querySelector('.man2fone').remove();
            const secondSec = document.querySelector('.secondSec');
            let childImg = document.createElement('img');
            childImg.classList.add('man2fone');

            let newTheme;
            if (event.target.classList.toString() == 'one'){
                newTheme = '_f';
                childImg.src = "/static/main/img/Triangle.png";
                secondSec.appendChild(childImg);
            } else if (event.target.classList.toString() == 'two') {
                newTheme = '_s';
                childImg.src = "/static/main/img/Triangle2.png";
                secondSec.appendChild(childImg);
            } else if (event.target.classList.toString() == 'three') {
                newTheme = '_t';
                childImg.src = "/static/main/img/Triangle3.png";
                secondSec.appendChild(childImg);
            }

            pageElements.forEach(element => {
                elementMainClass = element.classList.toString().split('_')[0];
                element.classList.toggle(`${elementMainClass+'_f'}`, false);
                element.classList.toggle(`${elementMainClass+'_s'}`, false);
                element.classList.toggle(`${elementMainClass+'_t'}`, false);
                element.classList.toggle(`${elementMainClass}`, false);
                element.classList.add(elementMainClass+newTheme);
            });

            const target = event.target.classList.toString();
            let activeCircles = document.querySelectorAll(`.circles .${target}`);
            console.log(activeCircles);
            console.log(target);
            activeCircles.forEach(element => {
                element.classList.add(target + '_active');
            });
            console.log(activeCircles);
            console.log(event.target.classList.toString());
        }
    };

circlesAll.gray[0].addEventListener('click', changeTheme);
circlesAll.yellow[0].addEventListener('click', changeTheme);
circlesAll.blue[0].addEventListener('click', changeTheme);
circlesAll.gray[1].addEventListener('click', changeTheme);
circlesAll.yellow[1].addEventListener('click', changeTheme);
circlesAll.blue[1].addEventListener('click', changeTheme);
