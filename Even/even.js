function EvenNumbers(props)
{
  const numbers =props.numbers;
  let even = [];
  for (let i = 0; i < numbers.length; i++) 
  {
    if (numbers[i] % 2 === 0)
    {
      even.push(numbers[i]);
    } 
  }
  return(
  <ul>
      Even numbers in the array:[1,2,3,4,5,6,7,8,9] are {even.toString() }</ul>
  );
}
const numbers= [1,2,3,4,5,6,7,8,9];
ReactDOM.render(
  <EvenNumbers numbers={numbers}/>,
  document.getElementById('root')
);
