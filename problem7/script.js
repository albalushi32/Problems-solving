function x(ar)
{
let leader = ar[ar.length -1]
let leaders=[leader]
for(let i=ar.length-2; i>=0; i--)
{
    if(ar[i]>=leader)
      {
	leader=ar[i];
	leaders.push(leader);
	}
}
  return leaders.reverse();
}
const A=[16,17,4,3,5,2];
const leader=x(A);
console.log(leader);	