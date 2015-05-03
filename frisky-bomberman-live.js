(function(){
  'option explicit';

/***
 *     ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄  ▄         ▄      
 *    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌▐░▌       ▐░▌     
 *    ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌ ▐░▌       ▐░▌     
 *    ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌▐░▌  ▐░▌       ▐░▌     
 *    ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌░▌   ▐░█▄▄▄▄▄▄▄█░▌     
 *    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░▌    ▐░░░░░░░░░░░▌     
 *    ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀      ▐░▌      ▀▀▀▀▀▀▀▀▀█░▌▐░▌░▌    ▀▀▀▀█░█▀▀▀▀      
 *    ▐░▌          ▐░▌     ▐░▌       ▐░▌               ▐░▌▐░▌▐░▌       ▐░▌          
 *    ▐░▌          ▐░▌      ▐░▌  ▄▄▄▄█░█▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌      ▐░▌          
 *    ▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌     ▐░▌          
 *     ▀            ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀       ▀           
 *                                                                                  
 *     ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
 *    ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 *    ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
 *    ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌
 *    ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
 *    ▐░░░░░░░░░░▌ ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 *    ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ 
 *    ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌     ▐░▌  
 *    ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ 
 *    ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌       ▐░▌
 *     ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ 
 *                                                                                  
 *     ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄                                        
 *    ▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌                                       
 *    ▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌                                       
 *    ▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌                                       
 *    ▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌                                       
 *    ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌                                       
 *    ▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌                                       
 *    ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌    ▐░▌▐░▌                                       
 *    ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌     ▐░▐░▌                                       
 *    ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌      ▐░░▌                                       
 *     ▀         ▀  ▀         ▀  ▀        ▀▀                                        
 *                                                                                  
 *     ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄                     
 *    ▐░▌          ▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌                    
 *    ▐░▌           ▀▀▀▀█░█▀▀▀▀  ▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀                     
 *    ▐░▌               ▐░▌       ▐░▌         ▐░▌  ▐░▌                              
 *    ▐░▌               ▐░▌        ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄                     
 *    ▐░▌               ▐░▌         ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌                    
 *    ▐░▌               ▐░▌          ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀                     
 *    ▐░▌               ▐░▌           ▐░▌ ▐░▌      ▐░▌                              
 *    ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄█░█▄▄▄▄        ▐░▐░▌       ▐░█▄▄▄▄▄▄▄▄▄                     
 *    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌        ▐░▌        ▐░░░░░░░░░░░▌                    
 *     ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀          ▀          ▀▀▀▀▀▀▀▀▀▀▀                     
 *                                                                                  
 */

 /*

  A frisky bomber is trying to plant a bomb on you. Escape the angry
  person or your car may blow up!

  Created by Lewis Edward Moten III on the weekend of May 2, 2015.

  Game comcept created by the Video Game Name Generator.
    http://videogamena.me/

  ASCII Fonts in comments:
    Font Author: Derek Lemay <THe PHaRCYDe>
    More Info:
    https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp
    FIGFont created with: http://patorjk.com/figfont-editor

  Thanks to Matt for a well explained concept of building a game with canvas.
    Lost Decade Games 
    How to make a simple HTML5 Canvas game
    by Matt Hackett, 2011 Aug 29
    http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

 */
  var canvas;
  var context;

  var game = {};

  var chipset;
  var movers;
  var challenger;
  var keysDown;

  var init = function() {

    game.state = 'splash';

    canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 400;
    document.body.appendChild(canvas);

    context = canvas.getContext("2d");
    context.imageSmoothingEnabled = false;

    chipset = new Image();
    chipset.ready = false;
    chipset.onload = function() {
      chipset.ready = true;
    };    
    chipset.src = 'images.png';

    chipset.enemy = new Rectangle(point(0,  0), size(32, 32));
    chipset.hero = new Rectangle(point(0,  48), size(32, 16));
    chipset.bomb = new Rectangle(point(32,  0), size(32, 32));
    chipset.fire = new Rectangle(point(32, 32), size(32, 32));
    chipset.heart = new Rectangle(point(16, 32), size(16, 16));
    chipset.hurt = new Rectangle(point(0,  32), size(16, 16));

    movers = {};
    movers.hero = new Mover(point(0, 0), size(64, 32), 250, point(0, 0), false);
    movers.hero.y = canvas.height - (movers.hero.height * 1.25);

    movers.enemy = new Mover(point(0, 0), size(64, 64), 270, point(0, 0), false);
    movers.enemy.y = movers.enemy.height * 0.25;
    movers.enemy.destination.y = movers.enemy.y;

    movers.fires = [];
    movers.bombs = [];

    movers.baseFire = size(128, 128);
    movers.baseBomb = size(32, 32);

    game.score = 0;
    game.highScore = 0;
    game.health = 5;
    game.maxHealth = 5;

    challenger = new Difficulty(1);
    keysDown = {};

    addEventListener("keydown", function (e) {
      keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
      delete keysDown[e.keyCode];
    }, false);
  };

  var reset = function () {
    challenger.level = 1;

    movers.hero.x = canvas.width / 2;
    movers.hero.speed = challenger.heroSpeed();
    movers.hero.mirror = false;
    game.maxHealth = 5;
    game.health = 5;
    movers.enemy.x = 0;
    movers.bombs = [];
    movers.fires = [];
    game.score = 0;
    addScore(0);
  };

/***
 *     ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
 *    ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 *    ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
 *    ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          
 *    ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ 
 *    ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌
 *    ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ 
 *    ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          
 *    ▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ 
 *    ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░▌ ▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌
 *     ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀   ▀         ▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀ 
 *                                                                                  
 */

  var update = function (modifier) {

    updateHero(modifier);
    updateFires(modifier);

    switch(game.state) {
      case 'dead':
      case 'splash':
        if(32 in keysDown) {
          game.state = 'playing';
          reset();
        }
        return;
      default:
        break;
    }


    if(movers.enemy.destination.x < movers.enemy.x) {
      movers.enemy.x -= movers.enemy.speed * modifier;
    } else if(movers.enemy.destination.x > movers.enemy.x) {
      movers.enemy.x += movers.enemy.speed * modifier;
    }

    if(movers.enemy.x < 0) {
      movers.enemy.x = 0;
      movers.enemy.destination.x = movers.enemy.x;
    } else if(movers.enemy.x > canvas.width - movers.enemy.width) {
      movers.enemy.x = canvas.width - movers.enemy.width;
      movers.enemy.destination.x = movers.enemy.x;
    }

    if(movers.enemy.destinationDistance() < movers.enemy.width * 0.25) {

      var moveRight = false;
      switch(pickBetween(0, challenger.level + 2)) {
        case 0:
          movers.enemy.destination.x = pickBetween(0, movers.enemy.x - movers.enemy.width);
          break;
        case 1:
          movers.enemy.destination.x = pickBetween(movers.enemy.right(), canvas.width - movers.enemy.width);
          break;
        default:
          moveRight = movers.hero.x > movers.enemy.x;
          movers.enemy.destination.x = movers.hero.x;
          break;
      }

      movers.enemy.speed = challenger.enemySpeed();
      movers.enemy.mirror = moveRight;

      if(moveRight) {
        movers.enemy.destination.x = pickBetween(movers.enemy.right(), canvas.width - movers.enemy.width);
      } else {
        movers.enemy.destination.x = pickBetween(0, movers.enemy.x - movers.enemy.width);
      } 
    }

    updateBombs(modifier);

    addBomb();

    if(game.health <= 0) {
      game.state = 'dead';
    }

  };

  var updateHero = function(modifier) {
    if (37 in keysDown) {
      movers.hero.x -= movers.hero.speed * modifier;
      movers.hero.mirror = false;
      if(movers.hero.x < 0) {
        movers.hero.x = 0;
      }
    }
    if (39 in keysDown) {
      movers.hero.x += movers.hero.speed * modifier;
      movers.hero.mirror = true;
      if(movers.hero.right() > canvas.width) {
        movers.hero.x = canvas.width - movers.hero.width;
      }
    }    
  };

  var updateFires = function(modifier) {
    for(var i = 0; i < movers.fires.length; i++) {
      var fire = movers.fires[i];
      var delta = fire.speed * modifier;
      fire.x += delta / 2;
      fire.width -= delta;
      fire.y += delta;
      fire.height -= delta;
      if(fire.width <= 0 || fire.height <= 0) {
        movers.fires.splice(i--, 1);
      }
    }    
  };

  var updateBombs = function(modifier) {
    for(var i = 0; i < movers.bombs.length; i++) {
      var bomb = movers.bombs[i];
      bomb.y += bomb.speed * modifier;

      if(movers.hero.intersects(bomb)) {
        movers.bombs.splice(i--, 1);

        var fire = new Rectangle(point(0, 0), movers.baseFire);
        fire.x = bomb.center() - (fire.width / 2);
        fire.y = movers.hero.bottom() - fire.height;
        fire.mirror = pickBetween(0, 1) === 0;
        fire.speed = fire.height * 1.5;
        movers.fires.push(fire);

        game.health -= 1;
        continue;
      }

      if(bomb.y > canvas.height) {
        movers.bombs.splice(i--, 1);
        addScore(10);
        continue;
      }
    }
  };

  var addScore = function(delta) {

    if(game.state === 'dead') {

      return;

    }

    game.score += delta;

    if(game.score > game.highScore) {
      game.highScore = game.score;
    }

    while(game.score >= challenger.nextLevel()) {
      challenger.level++;
      
      if(game.health < game.maxHealth) {
        game.health++;
      } else if(game.maxHealth < 10) {
        game.maxHealth++;
        game.health = game.maxHealth;
      }
    }

  };

  var addBomb = function() {

    if(movers.bombs.length >= challenger.maxBombs()) {
      return;
    }

    var threshold = canvas.height / challenger.maxBombs();
    var closeBombs = movers.bombs.filter(function(item, key) {

        return item.y < threshold;

    });

    if(closeBombs.length !== 0) {
      return;
    }

    var bomb = new Rectangle(point(0, 0), movers.baseBomb);
    bomb.y = movers.enemy.height / 2;
    bomb.x = (movers.enemy.x + (movers.enemy.width / 2)) - (bomb.width / 2);
    bomb.mirror = pickBetween(0, 1) === 0;
    bomb.speed = challenger.bombSpeed();
    movers.bombs.push(bomb);
  };

/***
 *     ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
 *    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 *    ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
 *    ▐░▌       ▐░▌▐░▌          ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌
 *    ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
 *    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 *    ▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ 
 *    ▐░▌     ▐░▌  ▐░▌          ▐░▌    ▐░▌▐░▌▐░▌       ▐░▌▐░▌          ▐░▌     ▐░▌  
 *    ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ 
 *    ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌       ▐░▌
 *     ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ 
 *                                                                                  
 */

  var render = function () {

    if (!chipset.ready) {
      return;
    }

    renderBackground();
    renderHero();

    switch(game.state) {
      case 'dead':
        renderFires();
        renderDeath();
        break;
      case 'splash':
        renderSplash();
        break;
      default:
        renderFires();
        renderBombs();
        renderEnemy();
        break;
    }

    renderHealth();
    renderScore();
  };

  var renderBackground = function() {

    var color;

    switch(game.state) {
      case 'dead':
        color = '#333333';
        break;
      case 'splash':
        color = '#663366';
        break;
      default:
        color = '#336666';
        break;
    }

    context.fillStyle = color;
    context.fillRect(0,0,canvas.width,canvas.height);
  };

  var renderScore = function() {

    context.fillStyle = "rgb(128, 255, 255)";
    context.font = "12px Helvetica";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("High Score: " + game.highScore, 64, 16);
    context.fillText("Score: " + game.score, 64, 32);

  };

  var renderHealth = function() {

    if (!chipset.ready) {
      return;
    }

    for(var i = 0; i < game.maxHealth; i++) {
      var chip = game.health > i ? chipset.heart : chipset.hurt;

      var xy = point(8 + (i * 24), canvas.height - 32);

      var area = new Rectangle(xy, size(16, 16));
      area.mirror = false;

      drawChip(chipset, chip, area);

    }
  };

  var renderDeath = function() {

    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "150px Helvetica";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("DEAD", (canvas.width / 2), (canvas.height / 2));

    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "14px Helvetica";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("to be continued...", 
      (canvas.width / 2), (canvas.height / 1.5));
    context.fillText("Press [space] to play again", 
      (canvas.width / 2), (canvas.height / 1.5) + 16);

  };

  var renderSplash = function() {

    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "40px Helvetica";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Frisky Bomberman Live", (canvas.width / 2), (canvas.height / 5));

    context.fillStyle = "rgb(0, 0, 0)";
    context.font = "14px Helvetica";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Press [left]/[right] arrow keys to move.", 
      (canvas.width / 2), (canvas.height / 2));
    context.fillText("Press [space] to begin.", 
      (canvas.width / 2), (canvas.height / 2) + 16);

  };

  var renderBombs = function() {
    for(var i = 0; i < movers.bombs.length; i++) {
      drawChip(chipset, chipset.bomb, movers.bombs[i]);
    }
  };

  var renderFires = function() {
    for(var i = 0; i < movers.fires.length; i++) {
      drawChip(chipset, chipset.fire, movers.fires[0]);
    }
  };

  var renderHero = function() {
    drawChip(chipset, chipset.hero, movers.hero);
  };

  var renderEnemy = function() {
    drawChip(chipset, chipset.enemy, movers.enemy);
  };

  var drawChip = function(chipsetet, chip, area) {

    if(area.mirror === false) {
      context.drawImage(chipsetet, 
        chip.x, chip.y, chip.width, chip.height, 
        area.x, area.y, area.width, area.height);
      return;
    }

    context.save();
    context.scale(-1, 1);
    context.drawImage(chipsetet, 
      chip.x, chip.y, chip.width, chip.height, 
      area.x * -1, area.y, area.width * -1, area.height);
    context.restore();

  };


/***
 *     ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
 *    ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 *    ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀█░█▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
 *    ▐░▌       ▐░▌▐░▌       ▐░▌      ▐░▌    ▐░▌          ▐░▌               ▐░▌     ▐░▌          
 *    ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌      ▐░▌    ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌               ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ 
 *    ▐░▌       ▐░▌▐░░░░░░░░░░▌       ▐░▌    ▐░░░░░░░░░░░▌▐░▌               ▐░▌     ▐░░░░░░░░░░░▌
 *    ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌      ▐░▌    ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌               ▐░▌      ▀▀▀▀▀▀▀▀▀█░▌
 *    ▐░▌       ▐░▌▐░▌       ▐░▌      ▐░▌    ▐░▌          ▐░▌               ▐░▌               ▐░▌
 *    ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄█░▌    ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌      ▄▄▄▄▄▄▄▄▄█░▌
 *    ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌
 *     ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀      ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀ 
 *                                                                                               
 */

  function Difficulty(level) {
    this.level = level;
    this.enemySpeed = function() {
      return pickBetween(100, 150) * this.level * 1.04;
    };
    this.heroSpeed = function() {
      return 250 * this.level * 1.04;
    };
    this.bombSpeed = function() {
      return pickBetween(100, 150) * this.level * 1.03;
    };
    this.maxBombs = function() {
      var max = Math.floor(this.level / 2) + 1;
      return max > 10 ? 10 : max;
    };
    this.nextLevel = function() {
      return 25 * Math.pow(2, this.level);
    };
  }

  function Rectangle(point, size) {
    this.x = point.x;
    this.y = point.y;
    this.width = size.width;
    this.height = size.height;

    this.right = function() {
      return this.x + this.width;
    };

    this.bottom = function() {
      return this.y + this.height;
    };

    this.top = function() {
      return this.y;
    };

    this.left = function() {
      return this.x;
    };

    this.center = function() {
      return this.x + (this.width / 2);
    };

    this.middle = function() {
      return this.y + (this.height / 2);
    };

    this.intersects = function(rectangle) {

      return !(rectangle.left() > this.right() || 
           rectangle.right() < this.left() || 
           rectangle.top() > this.bottom() ||
           rectangle.bottom() < this.top());
    };

  }

  function Mover(point, size, speed, destination, mirror) {
    Rectangle.apply(this, arguments);
    this.speed = speed;
    this.destination = destination;
    this.mirror = mirror;

    this.destinationDistance = function() {
      return distance(this, this.destination);
    };
  }

  Mover.prototype = Rectangle.prototype;
  Mover.prototype.constructor = Mover;

/***
 *     ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄ 
 *    ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌
 *    ▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ 
 *    ▐░▌       ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░▌          
 *    ▐░▌       ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ 
 *    ▐░▌       ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░░░░░░░░░░░▌
 *    ▐░▌       ▐░▌     ▐░▌          ▐░▌     ▐░▌           ▀▀▀▀▀▀▀▀▀█░▌
 *    ▐░▌       ▐░▌     ▐░▌          ▐░▌     ▐░▌                    ▐░▌
 *    ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌      ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌
 *    ▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 *     ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
 *                                                                     
 */

  var distance = function(pointA, pointB) {
    var x = (pointA.x - pointB.x) ^ 2;
    var y = (pointA.y - pointB.y) ^ 2;
    return Math.sqrt(x + y);
  };

  var pickBetween = function(min, max) {
    if(typeof min === 'undefined') { throw 'min undefined!';}
    if(typeof max === 'undefined') { throw 'max undefined!';}
    var value = Math.floor(Math.random() * 0xFFFFFFFF);
    return (value % (1 + max - min)) + min;
  };

  var point = function(x, y) {
    return {
      x: x,
      y: y
    };
  };

  var size = function(width, height) {
    return {
      width: width,
      height: height
    };
  };

/***
 *     ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄ 
 *    ▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌
 *    ▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌
 *    ▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌▐░▌    ▐░▌
 *    ▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌ ▐░▌   ▐░▌
 *    ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░▌  ▐░▌  ▐░▌
 *    ▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░▌   ▐░▌ ▐░▌
 *    ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌    ▐░▌▐░▌
 *    ▐░▌       ▐░▌▐░▌       ▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌
 *    ▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌
 *     ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀ 
 *                                                        
 */
 
  var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    requestAnimationFrame(main);
  };

  var then = Date.now();
  init();
  reset();
  main();

})();