const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./mario.png");
ASSET_MANAGER.queueDownload("./enemies.png");
ASSET_MANAGER.queueDownload("./bricks.png");

ASSET_MANAGER.downloadAll(() => {

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	const BLOCKWIDTH = 16 * 3;
	const WIDTH = canvas.clientWidth;
	const HEIGHT = canvas.clientHeight;

	new sceneManager(gameEngine);

	gameEngine.init(ctx);
	gameEngine.start();
});
