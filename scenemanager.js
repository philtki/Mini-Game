class sceneManager {
    constructor(game) {
        this.game = game;

        this.loadLevel(levelOne);
    };

    loadLevel(level) {
        this.level = level;
        let temp = -1;
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 20; x++) {
                temp++;
                if (level.data[temp] == 5) {
                    gameEngine.addEntity(new Mario(this.game, x * 46.9, y * 38.2));
                }
                if (level.data[temp] == 4) {
                    gameEngine.addEntity(new Enemies(this.game, x * 46.9, y * 38));
                }
                if (level.data[temp] == 3) {
                    //console.log("x:" + x + " y:" + y);
                    gameEngine.addEntity(new Ground(this.game, x * 51, y * 40.5, 51, 51));
                }
            }
        }
    }
}