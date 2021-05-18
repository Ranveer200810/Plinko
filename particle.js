class Particle {

    constructor(x,y,r) {

        var opt = {

            restitution: 0.8,
            friction: 0.3

        }

        this.body = Bodies.circle(x, y, r, opt);
        this.r = r;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);

        pop();

    }

}