//Business Logic
function numbers(user){
  let newArray = [];
  for(let i=0; i<= user; i++) {
    newArray.push(i.toString());
  }

  let input=0;
  newArray.forEach(function(number) {
    if(number.indexOf('1')!= -1) {
      newArray[input] = "Beep!";
    } else if (number.indexOf('2')!= -1) {
      newArray[input] = "Boop!";
    } else if (number.indexOf('3')!= -1) {
      newArray[input] = "Won't you be my neighbor?";
    }
    input ++
  })

  const arrayResult = newArray.join(" , ");
  return arrayResult;
  console.log(arrayResult);
};

//User Logic
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    const number = parseInt($("input#number").val());
    $("userOutput").show();
    $("#result").text(numbers(number));
  });
});
