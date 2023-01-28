class sceneManager {
    constructor(game) {
        this.game = game;

        // gameEngine.addEntity(new Mario(gameEngine, 300, 400));
        // gameEngine.addEntity(new Enemies(gameEngine, 300, 200));
        // gameEngine.addEntity(new Ground(gameEngine, 0, 0, 16, 16));

        this.loadLevel(levelOne);
    };

    loadLevel(level) {
        this.level = level;

        for (let x = 0; x < level.data.length; x++) {
            for (let y = 0; y < 25; y++) {
                    if (level.data[x] = 3) {
                        gameEngine.addEntity(new Ground(this.game, x, y, 16, 16));
                    }
                    if (level.data[x] = 4) {
                        gameEngine.addEntity(new Enemies(this.game, x, y));
                    }
                    if (level.data[x] = 5) {
                        gameEngine.addEntity(new Mario(this.game, x, y));
                    }
            }
        }
    }
}