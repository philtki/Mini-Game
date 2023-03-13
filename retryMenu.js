class retryMenu {
    constructor(game, gems) {
        Object.assign(this, { game, gems});
    };

    update() {
        this.game.clockTick = false;
        if (this.game.keys["r"]) {
            location.reload();
        }
    };

    draw(ctx) {
        ctx.font = '70px "Trajan-Pro-Regular"';
        ctx.fillStyle = "rgb(241, 211, 41)";
        ctx.fillText("GAME OVER", 330, 400);
        ctx.font = '50px "Trajan-Pro-Regular"';
        ctx.fillText("Gems Collected: " + this.gems, 360, 520);
        ctx.fillText("Press R to Retry", 380, 650);
    };
}