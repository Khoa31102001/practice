const arr = [];
for(let i =0; i<10;i++){
  arr.push(Math.floor(Math.random() * 100));
}

const input = prompt("Please enter a number");
try{
  const number = +input;
  if(!arr.includes(number)){
    alert("Available numbers");
  }else{
    alert("Unavailable numbers");
  }
}catch(err){
  alert("Please number supid man");
}
