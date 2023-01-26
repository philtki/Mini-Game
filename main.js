const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./mario.png");
ASSET_MANAGER.queueDownload("./enemies.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Mario(gameEngine, 300, 400 , ASSET_MANAGER.getAsset("./mario.png")));
	gameEngine.addEntity(new Enemies(gameEngine, 700, 400 , ASSET_MANAGER.getAsset("./enemies.png")));

	gameEngine.init(ctx);

	gameEngine.start();
});
