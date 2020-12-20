class Crewmate{
    constructor(x,y,w,h){
        var prop={
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,w,h,prop);
        this.w=w;
        this.h=h;
        this.image = loadImage("Pink Among Us.png");
        World.add(auWorld,this.body);
    }

    display(){
        var pos=this.body.position;
        //rectMode(CENTER)
        //rect(pos.x,pos.y,this.w,this.h);

        image(this.image,pos.x,pos.y,100,100);
    }
}
