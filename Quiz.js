class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    Contestant.getPlayerInfo();
    if(allContestant !== undefined){
      debugger;
      var display_Answer  = 230;
      for(var plr in allContestant){
        debugger;
        var correctAns = "2";
        if(correctAns === allContestant[plr].answer){
          fill("green")
        }
        else{
          fill("red");
        }
        display_Answer+=30;
        textSize(30);
        text(allContestant[plr].name + ":" + allContestant[plr].answer,250,display_Answer)
      }
    }
  }

}
