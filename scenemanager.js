class sceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.title = true;
        this.points = 0;
        this.spawnPoint = [10, 80, 150, 220, 290, 360, 430, 500, 570, 640, 710, 780];
        //this.loadLevel();
    };

    update() {
        if (this.game.keys["q"] === true) {
            this.title = false;
            this.loadLevel();
        }
    }

    loadLevel() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
        gameEngine.addEntity(new Mario(this.game, 10, 10));
        for (let i = 0; i < 5; i++) {
            this.makeRandom();
        }
    }

    makeRandom() {
        this.randomSpawnPoint = this.spawnPoint[Math.floor(Math.random() * this.spawnPoint.length)];
        this.randomSpeed = Math.floor(Math.random() * 600) + 50;
        this.randomDirection = Math.random() < 0.2; //20% of being vertical koopa
        this.randomSize = Math.floor(Math.random() * 6) + 2;
        // console.log(this.randomSpawnPoint);
        // console.log(this.randomSpeed);
        // console.log(this.randomDirection)
        // console.log(this.randomSize);
        gameEngine.addEntity(new Enemies(this.game, 1050, this.randomSpawnPoint, this.randomSpeed,
                                                            this.randomDirection, this.randomSize));
    }

    draw(ctx) {
        if (this.title) {
            ctx.font = '100px "monospace"';
            ctx.fillStyle = "rgb(255,0,0)";
            ctx.fillText("Mario Mini Game", 130, 300);
            ctx.font = '70px "monospace"';
            ctx.fillStyle = "rgb(39,72,213)";
            ctx.fillText("Press Q to start", 230, 500);

            ctx.font = '50px "monospace"';
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillText("Controls:", 820, 700);
            ctx.font = '30px "monospace"';
            ctx.fillStyle = "rgb(255,167,0)";
            ctx.fillText("W - Up/Jump", 820, 740);
            ctx.fillText("A - Left", 820, 770);
            ctx.fillText("D - Right", 820, 800);
        }
    }
}