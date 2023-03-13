class retryMenu {
    constructor(game) {
        Object.assign(this, { game});
    };

    update() {
        this.game.clockTick = false;
        if (this.game.keys["r"]) {
            this.game.camera.loadLevel();
        }
    };

    draw(ctx) {
        ctx.font = '90px "Trajan-Pro-Regular"';
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.fillText("GAME OVER", 250, 200);
        ctx.font = '50px "Trajan-Pro-Regular"';
        ctx.font = '70px "Trajan-Pro-Regular"';
        ctx.fillStyle = "rgb(255,167,0)";
        ctx.fillText("Total Score: " + this.game.camera.points, 300, 420);
        ctx.fillText("Press R to Retry", 300, 550);
    };
}