class Enemies {
    constructor(game, x, y, speed, direction, scale) {
        Object.assign(this, {game, x, y, speed, direction, scale});
        this.spritesheet = ASSET_MANAGER.getAsset("./enemies.png");
        this.koopa = new Animator(this.spritesheet, 89, 1, 20, 24,
            2, .25, 10, false, true);
        this.updateBB();
    };

    update() {
        this.updateBB();
        if (this.y < 10) {
            this.y = 10;
        }
        if (this.y > 745) {
            this.y = 745;
            this.speed = -this.speed;
        }

        if (this.direction) {
            this.y -= this.speed * this.game.clockTick;
            this.x -= this.speed * this.game.clockTick;
        } else {
            this.x -= this.speed * this.game.clockTick;
        }
        if (this.x <= -100) {
            //this.removeFromWorld = true;
            this.x = 900;
        }
    };

    updateBB() {
        this.bb = new BoundingBox(this.x, this.y, 45, 55);
    }

    draw(ctx) {
        this.koopa.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
        this.bb.draw(ctx);
    };

    col(remove) {
        this.game.removeFromWorld = true;
    }
}
