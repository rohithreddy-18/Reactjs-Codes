function Max1s(props)
{
  const numbers=props.numbers;
  let max=0,count=0,k;
  for(let i=0;i<numbers.length;i++)
    {
      if(numbers[i]==1)
        {
          k=1;
          max=k;
          break;
        }
    }
  for(i=0;i<numbers.length;i++)
    {
      if(numbers[i]==0)
      {
    	  count=0;
      }
      else
      {
    	  count++;
        if(max<count)
        {
        	max=count;
        }
      }
    }
  return(
  <ul>The maximum consecutive 1's in the array:[0,0,1,1,0,0,0,1,0,1,1,1,0] are  {max}</ul>
  );
}
  const numbers=[0,0,1,1,0,0,0,1,0,1,1,1,0];
  ReactDOM.render(
  <Max1s numbers={numbers}/>,
  document.getElementById('root')
);
