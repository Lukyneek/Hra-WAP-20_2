 class Player {

    constructor(x, y, w, h, c, v) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.v = v;
        this.bV = v;
        this.maxV = v*2;
    }
    draw(ctx){
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    
    update(keys){
        if (keys["w"]) this.y -= this.v;
        if (keys["s"]) this.y += this.v;
        if (keys["a"]) this.x -= this.v;
        if (keys["d"]) this.x += this.v;
        if (keys[" "]) {
            this.v = this.maxV;
        } else {
            this.v = this.bV;
        }
        if (keys["q"]) {
            this.w -= 1;
            this.h -= 1;
        }
        if (keys["e"]) {
            this.w += 1;
            this.h += 1;
        }
    }
}
const myPlayer = new Player(10, 10, 50, 50, "lime", 5);


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let keys = {};

window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    myPlayer.update(keys);

    myPlayer.draw(ctx);

    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);