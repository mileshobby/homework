function titleize(names, callback){
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

// titleize(["Miles", "Richard", "Andrew"],
//           (names) => {
//             names.forEach(name => console.log(name));
//           });
//

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

  Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes "PFTTT"`);
  };

  Elephant.prototype.grow = function () {
    this.height += 18;
  };

  Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
  };

  Elephant.prototype.play = function () {
    console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`);
  };

  Elephant.parade = function (herd) {
    herd.forEach( elephant => {console.log(`${elephant.name} is trotting by.`);}
    );
  };

  let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
  let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
  let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
  let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

  let herd = [ellie, charlie, kate, micah];

  Elephant.parade(herd);

  ellie.trumpet();
  console.log(ellie.height);
  ellie.grow();
  console.log(ellie.height);
  console.log(ellie.tricks);
  ellie.play();
