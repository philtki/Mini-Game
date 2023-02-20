class sceneManager {
    constructor(game) {
        this.game = game;
        this.loadLevel(levelOne);
    };

    loadLevel(level) {
        gameEngine.addEntity(new Mario(this.game, 350, 550));
        gameEngine.addEntity(new Enemies(this.game, 950, 350, 250, false, 2.5));
        gameEngine.addEntity(new Enemies(this.game, 950, 350, 50, false, 2.5));
        gameEngine.addEntity(new Enemies(this.game, 950, 350, 750, true, 2.5));
    }
}