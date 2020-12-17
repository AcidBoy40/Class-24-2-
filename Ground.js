class Ground
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }

        this.x = x,
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(this.x, this.y, this.height, this.width, options);
        World.add(world, this.body);
    }

    display()
    {
        var groundpos = this.body.position;

        push();
        rectMode(CENTER);
        fill("white");
        rect(this.x,this.y,this.width, this.height);
        pop();

    }
}