class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
    display(){
       
        if(this.body.speed>5){
            World.remove(world, this.body);
        } 
       
        else{
            var pencil = this.body.position;
            fill("white");
            rectMode(CENTER)
        rect(pencil.x,pencil.y,this.width,this.height);

        }
        
        

             
           
          
    }
}