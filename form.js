class Form{
    constructor(){
      this.input = createInput("name");
      this.button = createButton("play");
      this.greetings = createElement('h3');
    }
    display(){
        var title = createElement('h2');
        title.html("carRacingGame");
        title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount += 1;
          player.update();
          player.updateCount(playerCount);
          this.greetings.html("hello" + player.name);
          this.greetings.position(130,160);
        })
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.greetings.hide();
    }
}