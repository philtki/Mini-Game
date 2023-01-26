class Mario {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, {game, x, y, spritesheet});
        this.speed = 10;
        this.velocity = 0;


        this.koopa = new Animator()
        this.mario = new Animator(this.spritesheet, 463, 62, 24, 28,
                            3, .3, 9, false, true);
    };

    update() {
        //hits roof or floor
        if (this.y < 5) {
            this.y = 12;
        }
        if (this.y > 733) {
            this.y = 733;
        }

        if (this.game.keys[" "]) {
            this.velocity += this.speed * 5;
            this.y -= this.speed - this.velocity;
        }
        this.y = (this.y - this.velocity) + 2.5;
        this.velocity = 0;
    };
    draw(ctx) {
        this.mario.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2.5);
    };
}
