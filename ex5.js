const userObject = {
  name: 'Johnny',
  age: 18,
  class: 'FE',
  status: 'single'
}

var keys = (dic)=> Object.keys(dic);

console.log(keys(userObject));