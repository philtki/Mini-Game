const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./mario.png");
ASSET_MANAGER.queueDownload("./enemies.png");
ASSET_MANAGER.queueDownload("./bricks.png");

ASSET_MANAGER.downloadAll(() => {

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	// PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	// PARAMS.CANVAS_WIDTH = canvas.width;
	// PARAMS.CANVAS_HEIGHT = canvas.height;

	new sceneManager(gameEngine);

	gameEngine.init(ctx);
	gameEngine.start();
});
