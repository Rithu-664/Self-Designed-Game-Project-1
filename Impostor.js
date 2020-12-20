class Impostor{
  constructor(x,y,w,h){
    var prop={
      isStatic: true
    }

    this.body = Bodies.rectangle(x,y,w,h,prop);
    this.w=w;
    this.h=h;
    this.image=loadImage("Yellow Among Us.png")
    World.add(auWorld,this.body);
  }
  display(){
    var pos = this.body.position;
    image(this.image,pos.x,pos.y,80,100);

  }
}
