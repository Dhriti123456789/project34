class monster {
    constructor(x,y){
        var options = {
            'restitution': 1.0,
            'friction': 0.8,
            'density':0.7

        };
        this.image = loadImage("Monster-02.png");
        this.body = Bodies.circle(x,y,100,options);
        this.radius = 100;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,200,200);
        pop();


    }
}