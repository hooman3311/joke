class Form
{
    constructor()
    {
        this.title=createElement("h1")
        this.input=createInput("")
        this.button=createButton("play")
        this.greeting=createElement("h2")
    }
    display()
    {
        this.title.position(650,20)
        this.title.html("joke")
        this.input.position(600,250)
        this.button.position(650,350)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.greeting.position(600,250)
            this.greeting.html("hello "+this.input.value()+" i am dad")
        })
    }
}
