class Animal{
  constructor(type, name){
    this._type = type;
    this._name = name;
  }
  getValue(){
    return `it is a ${this._type}, its name is ${this._name}`;
  }
}

let tmp = new Animal("a","b");
console.log(tmp.getValue());

