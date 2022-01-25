///Hard//
////this did not work///
/*let person = (function () {
  let pil = {
    name: "Carolina",
    ssn: "680-90-8908",
  };
  return {
    getName: function () {
      console.log(pill.name);
    },
  };
})();

person.getName();
*/
/*class me {
  #name;
  ssn;
  constructor(name, ssn) {
    this.#name = Ashley;
    this.#ssn = 685 - 099 - 02;
  }

  get name() {
    return this.#name;
  }
}
let person1 = new Person("Jamie", 453 - 000 - 99);
console.log(person1.ssn);
console.log(person1.name);
*/
let PII = (privateNumber) => {
  let name = "Ashley Lorenzo";
  let ssn = privateNumber;

  return {
    getName: function () {
      return name;
    },
  };
};

let account = PII("685-345-89");
console.log(account.getName());
console.log(account.SNN);
