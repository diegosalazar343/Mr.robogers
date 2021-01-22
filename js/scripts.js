function numbers(user){
  let newArray = [];
  for(let i=0; i<= user; i++) {
    newArray.push(i.toString());
  };
  const arrayResult = newArray.join(" , ");
  return arrayResult;
  console.log(arrayResult);
};
