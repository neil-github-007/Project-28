class Stone{
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.8
        }

        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x, this.y, 16, options);
        this.image = loadImage("stone.png");

        World.add(world, this.body);
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}