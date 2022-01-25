function people(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
}

people.prototype.exercise = () =>
  console.log("swimming is fun! - Let explore under the sea");

people.prototype.fetchJob = function () {
  console.log(`${this.name} is a ${this.job}`);
};

function engineer(name, job, age, languages) {
  people.call(this, name, job, age);
  this.languages = languages;
  this.busy = true;
}

engineer.prototype = { ...people.prototype };
engineer.prototype.completeTask = function () {
  this.busy = false;
};
engineer.prototype.acceptNewTask = function () {
  this.busy = true;
};

engineer.prototype.offerNewTask = function () {
  console.log(
    this.busy
      ? `${this.name}  say he can not  accept any new tasks right now.`
      : `${this.name}  says he would love to take on a new responsibility.`
  );
};

engineer.prototype.learnLanguage = function (language) {
  this.languages.push(language);
};
engineer.prototype.listLanguages = function () {
  console.log(this.languages);
};

let p1 = new people("Brad Pitt", "back-end developer", 58);
p1.exercise();
p1.fetchJob();

let p2 = new engineer("Daniel larusso", "Junior Developer", 22, [
  "Javascript",
  "Python",
  "css+",
]);
p2.fetchJob();
p2.acceptNewTask();
p2.offerNewTask();
p2.completeTask();
p2.offerNewTask();
p2.listLanguages();
p2.learnLanguage("Java");
p2.listLanguages();
///quite hard and confused and got helped///