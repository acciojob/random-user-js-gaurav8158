//your code here
let userData;
fetch("https://randomuser.me/api/").then((res)=>res.json()).then((val)=>
	{
	userData= val.data.results.gender;
	console.log(val.data);
	document.getElementByClass(".userDetails").innerHTML= userData;	
	}																
);
