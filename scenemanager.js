class sceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.second = 0;
        this.min = 0;
        this.spawnPoint = [10, 80, 150, 220, 290, 360, 430, 500, 570, 640, 710, 780];
        this.loadLevel();
    };

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

    }
}