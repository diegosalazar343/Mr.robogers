//Business Logic
function numbers(user){
  let newArray = [];
  for(let i=0; i<= user; i++) {
    newArray.push(i.toString());
  }

  let input=0;
  newArray.forEach(function(number)) {
    if(number.indexOf('1')) {
      newArray[input] = "Beep!";
    }
  }

  const arrayResult = newArray.join(" , ");
  return arrayResult;
  console.log(arrayResult);
};

//User Logic
