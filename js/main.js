
var canMagicDust,dustCtx,windowX,windowY;
var dusts = new Array();

/* Dom Ready ?*/
document.addEventListener('DOMContentLoaded',function(event){
    // get window size
    windowX = window.innerWidth;
    windowY = window.innerHeight;


    // parallax layers
    function doParallax(cursorX,cursorY){
        var pointX = (windowX/2) - cursorX;
        var pointY = (windowY/2) - cursorY;

        document.getElementById('layer-1').style.transform = 'translate3d('+(pointX/40)+'px, '+(pointY/40)+'px, 0px)';
        document.getElementById('layer-2').style.transform = 'translate3d('+(pointX/20)+'px, '+(pointY/30)+'px, 0px)';
    }

    // trigger magic dust
    canMagicDust = document.getElementById('magic-dust');
    canMagicDust.height = windowY;
    canMagicDust.width = windowX;
    if (canMagicDust.getContext('2d')) {
        dustCtx = canMagicDust.getContext('2d');
        for (var i = 0; i < 20; i++) {
            dusts[i] = new MagicDust();    
            setInterval(dusts[i].draw(), 1000 / 60);;    
        };
        // var b = new MagicDust();
        // b.draw();
        // b.move();

        dustCtx.beginPath();
        dustCtx.arc(100, 100, 50, 0, Math.PI*2, true);
        dustCtx.closePath();
        gradient = dustCtx.createRadialGradient(100, 100, 0, 100, 100, 10);
        gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
        gradient.addColorStop(0.5, 'rgba(77,101,181,0.2');
        gradient.addColorStop(1, 'rgba(77,101,181,0)');
        dustCtx.fillStyle = gradient;
        dustCtx.fill();

    }else{
        alert('your browser does not support HTML5 canvas');
    }

    // do parallax on mouse move
    window.addEventListener('mousemove',function(move){
        doParallax(move.pageX,move.pageY);

    });
});



/*Magic Dust*/
var MagicDust = function(){
    this.pos = {
        'x': Math.floor(Math.random() * windowX) + 1 ,
        'y': Math.floor(Math.random() * windowY) + 1
    };
    this.r = Math.floor(Math.random() * 10) + 1
    this.glow = Math.floor(Math.random() * 5) + 1

    this.animate = function(){
        return null;
    }

    this.draw = function(x = this.pos.x , y = this.pos.y){
        if (dustCtx) {
            dustCtx.beginPath();
            dustCtx.arc(x, y, this.r, 0, Math.PI*2, true);
            dustCtx.closePath();
            gradient = dustCtx.createRadialGradient(x, y, 0, x, y, 10);
            gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
            gradient.addColorStop(0.5, 'rgba(77,101,181,0.2');
            gradient.addColorStop(1, 'rgba(77,101,181,0)');
            dustCtx.fillStyle = gradient;
            dustCtx.fill();
            // this.move();
        }
    }


    this.move = function(){
   
    }
}

