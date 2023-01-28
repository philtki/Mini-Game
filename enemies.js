class Enemies {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./enemies.png");
        this.speed = 10;

        this.koopa = new Animator(this.spritesheet, 89, 1, 20, 24,
            2, .25, 10, false, true);
        this.updateBB();
    };

    update() {
        this.updateBB();
    };

    updateBB() {
        this.bb = new BoundingBox(this.x, this.y, 45, 55);
    }

    draw(ctx) {
        this.koopa.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2.5);
        //this.bb.draw(ctx);
    };
}
