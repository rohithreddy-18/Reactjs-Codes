function RepeatedNum(props)
{
  const numbers=props.numbers;
  let num;
  for(let i=0;i<numbers.length;i++)
    {
      if(numbers[i]==numbers[i+1])
        {
          num=numbers[i];
          break;
        }
    }
  return(
  <ul>The Repeated number in the array:[1,2,3,4,5,6,7,7,8,9,10] is  {num}</ul>
  );
}
  const numbers=[1,2,3,4,5,6,7,7,8,9,10];
  ReactDOM.render(
  <RepeatedNum numbers={numbers}/>,
  document.getElementById('root')
);
