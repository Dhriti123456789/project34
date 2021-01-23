class hero{
    constructor(x,y){
        var options = {
            'density': 1,
            'frictionAir':1
        };
        
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(x,y,20,options);
        this.r = 20;
        this.x = x;
        this.y = y;
        

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,200);
    }
}