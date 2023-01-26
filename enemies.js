class Enemies {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, {game, x, y, spritesheet});
        this.speed = 10;

        this.koopa = new Animator(this.spritesheet, 89, 1, 20, 24,
            2, .25, 10, false, true);
    };

    update() {
        
    };
    draw(ctx) {
        this.koopa.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2.5);
    };
}
