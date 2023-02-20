class Mario {

    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./mario.png");
        this.speed = 8;
        this.moveSpeed = 200;
        this.velocity = 0;

        this.mario = new Animator(this.spritesheet, 463, 62, 24, 28,
                            3, .3, 9, false, true);
        this.updateBB();

    };

    update() {
        //hits roof or floor
        if (this.y < 10) {
            this.y = 10;
        }
        if (this.y > 845) {
            //this.y = 745;
            this.die();
        }
        //hits side walls
        if (this.x < 10) {
            this.x = 10;
        }
        if (this.x > 950) {
            this.x = 950;
        }

        if (this.game.keys["w"]) {
            this.velocity += this.speed * 5;
            this.y -= this.speed - this.velocity;
        }
        if (this.game.keys["d"]) {
            this.x += this.moveSpeed * this.game.clockTick;
        }
        if (this.game.keys["a"]) {
            this.x -= this.moveSpeed * this.game.clockTick;
        }
        this.y = (this.y - this.velocity) + 2.5;
        this.velocity = 0;
        this.updateBB();
        this.collisionCheck();
    };

    updateBB() {
        this.bb = new BoundingBox(this.x, this.y, 60, 72);
    }

    draw(ctx) {
        this.mario.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2.5);
        //this.bb.draw(ctx);
    };

    collisionCheck() {
        this.game.entities.forEach(entity => {
            if (this.bb.collide(entity.bb)) {
                if (entity instanceof Enemies) {
                    this.die();
                }
                if (entity instanceof Ground) {
                    this.y = entity.bb.top - 72;
                }
            }
        });
    }

    die() {
        location.reload();
    }
}
