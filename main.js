const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./mario.png");
ASSET_MANAGER.queueDownload("./enemies.png");
ASSET_MANAGER.queueDownload("./bricks.png");

ASSET_MANAGER.downloadAll(() => {

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);
	//gameEngine.addEntity(new sceneManager(gameEngine));
	new sceneManager(gameEngine);
	gameEngine.start();
});
