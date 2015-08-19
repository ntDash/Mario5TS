class RightPipe extends Ground {
	constructor(x: number, y: number, level: Level) {
		var blocking = GroundBlocking.right + GroundBlocking.bottom;
		super(x, y, blocking, level);
		this.setImage(images.objects, 36, 390);
	}
};