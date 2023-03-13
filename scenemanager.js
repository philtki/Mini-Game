class sceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        //this.title = true;
        this.points = 0;
        this.spawnPoint = [10, 80, 150, 220, 290, 360, 430, 500, 570, 640, 710, 780];
        this.loadLevel();
    };

    update() {
        if (this.game.keys["Q"] === true) {
            this.title = false;
            console.log("hi");
        }
    }

    loadLevel() {
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
            //gradient testing
            //lavaboy & icegirl text
            ctx.font = '170px "Thayer-Street-NDP-Regular"';
            //ctx.fillStyle = "rgb(255, 0, 0)";
            ctx.fillText("lavaboy", 130, 290);
            ctx.font = '90px "Trajan-Pro-Regular"';
            ctx.fillStyle = "rgb(237, 161, 14)";
            ctx.fillText("&", 525, 290);
            ctx.font = '150px "Thayer-Street-NDP-Regular"';
            ctx.fillStyle = "rgb(102, 204, 255)";
            ctx.fillText("icegirl", 600, 290);

            //press q to play
            ctx.font = '90px "Trajan-Pro-Regular"';
            ctx.fillStyle = "rgb(237, 161, 14)";
            ctx.fillText("Press Q to Play", 275, 650);
        }
    }
}