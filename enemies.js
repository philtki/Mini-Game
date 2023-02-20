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
        if (this.x <= -100) {
            this.die();
        }
        if (this.direction) {
            if (this.y < 10) {
                this.speed = -this.speed;
            }
            if (this.y >= 780) {
                this.speed = -this.speed;
            }
            this.y += this.speed * this.game.clockTick;
            this.x -= 1;
        } else {
            this.x -= this.speed * this.game.clockTick;
        }

    };

    updateBB() {
        this.bb = new BoundingBox(this.x + 5, this.y, 15 * this.scale, 22 * this.scale);
    }

    draw(ctx) {
        this.koopa.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
        //this.bb.draw(ctx);
    };

    die() {
        this.removeFromWorld = true;
        this.game.camera.makeRandom();
    }
}
