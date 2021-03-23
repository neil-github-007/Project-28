class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body) {
        this.launcher.bodyA = body;
    }

    fly() {
        this.launcher.bodyA = null;
    }

}