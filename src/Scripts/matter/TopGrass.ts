class TopGrass extends Ground {
	constructor(x: number, y: number, level: Level) {
		var blocking = GroundBlocking.top;
		super(x, y, blocking, level);
		this.setImage(images.objects, 888, 404);
	}
};