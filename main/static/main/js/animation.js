function lineAnim() {
    const first =  document.querySelectorAll('.rightLine div')[0],
          third =  document.querySelectorAll('.rightLine div')[2];

    let start = Date.now();
    let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          if (timePassed >= 2000) {
            clearInterval(timer);
            return;
          }
          draw1(timePassed);
          draw3(timePassed);
    }, 20);

    function draw1(timePassed) {
        first.style.cssText = `float: right;
                               border-top: ${280-timePassed*0.1030}vh solid #8b8b8b;
                               border-left: ${280-timePassed*0.126}vw solid transparent;`;
    }
    function draw3(timePassed) {
        if(timePassed <= 1400){
            third.style.cssText = `float: right;
                                    position: absolute;
                                    margin-left: ${-120+timePassed*0.091}vw;
                                    border-top: ${280-timePassed*0.159}vh solid #3a3a3a;
                                    border-left: ${280-timePassed*0.185}vw solid transparent;`
        }
    }
    first.style.cssText = 'border-top: 75vh solid #8b8b8b;'+
                          'border-left: 30vw solid transparent;'
    third.style.cssText = 'float: right;'+
                           'position: absolute;'+
                           'margin-left: 6.5vw;'+
                           'border-top: 60vh solid #3a3a3a;'+
                           'border-left: 23.5vw solid transparent;'
}

function lvlAnim() {
    function startElEvent(item){
        let timer = setInterval(function() {
            item.classList.remove('lvlAnim');
            item.classList.add('lvlAnim2');
            let timerL = setTimeout(function () {
                item.classList.remove('lvlAnim2');
                item.classList.add('lvlAnim');
            }, 2000);
        }, 3000);
    }

    function StartGroupEvent(group){
        for (let i=0; i < group.length; i++) {
            let item = group[i];
            setTimeout(() => {startElEvent(item)}, i*500);
        }
    }

    const all_skills = document.querySelectorAll('.skillLvl');
    for (let parent=0; parent<all_skills.length; parent++){
        let group_active = all_skills[parent].querySelectorAll('.activeLvl');
        StartGroupEvent(group_active);
    }
}
lvlAnim();

