var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var playerW = 100;
var playerH = 100;
var x = canvas.width / 2 - (playerW / 2);
var y = canvas.height - playerH;
var speed = 10;
var btn_start = document.querySelector(".btn_start");




document.addEventListener('keydown', function(event){
    if(event.keyCode == 68){
        if(x + playerW < canvas.width){
            x += speed;
        }
    }else if(event.keyCode == 83){
        if(y + playerH < canvas.height){
            y += speed;
        }
    }else if(event.keyCode == 65){
        if(x - speed >= 0){
            x -= speed;
        }
    }else if(event.keyCode == 87){
        if(y - speed >= 0){
            y -= speed;
        }
    }
});

function bgSound(){
    var bgSound = new Audio('sound.mp3');//путь к файлу фоновой музыки
    bgSound.play();//запуск фоновой музыки
    
}


function drawPlayer(){//рисует размер грока и координаты
    ctx.beginPath();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = '#00000001';
    ctx.fillRect(x, y, playerW, playerH);

    //img_player
    var img_player = new Image();
    img_player.src = "img_player.png";
    ctx.drawImage(img_player, x, y);
    
    
}

function startGame(){
    btn_start.style.display = 'none';//исчезает кнопка старт
    let step = setInterval(drawPlayer,1000/30);//отрисовка игрока по кадрам
    bgSound();//фоновая музыка
}
