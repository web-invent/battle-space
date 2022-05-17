let block = document.querySelector('#block');//управляемый блок
let move_left = 100;//положение блока от левого края
let move_top = 100;//положение блока от верхнего края
let speed = 50;


var y = 0;
requestAnimationFrame(move);
 
function move() {
  y++;
  document.querySelector('#bg_cosmos').style.backgroundPosition = "0px " + y + "px";
  requestAnimationFrame(move);
}


function play_game() {//действия при запуске игры
    var audio = new Audio('sound.mp3');//путь к файлу фоновой музыки
    audio.play();//запуск фоновой музыки

    document.querySelector('#block').style.display = 'block';//показать блок игрока
    document.querySelector('.btn_start').style.display = 'none';//спрятать блок кнопки старт
  }


document.onkeydown = function (event){

    if(event.code == 'KeyD'){//движение блока вправо
        move_left += speed;
        document.querySelector('#block').style.left = move_left + 'px';//управляемый блок
    }else if(event.code == 'KeyA'){//движение блока влево
        move_left -= speed;
        document.querySelector('#block').style.left = move_left + 'px';//управляемый блок
    }else if(event.code == 'KeyS'){//движение блока вниз
        move_top += speed;
        document.querySelector('#block').style.top = move_top + 'px';//управляемый блок
    }else if(event.code == 'KeyW'){//движение блока вверх
        move_top -= speed;
        document.querySelector('#block').style.top = move_top + 'px';//управляемый блок
    }
    
      
}
