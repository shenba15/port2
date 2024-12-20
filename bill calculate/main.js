
var but=document.getElementById("but");
console.log(but);

but.addEventListener("click",function(e){
	e.preventDefault();
	let amount=document.getElementById("amount").value;
	console.log(amount);
	let tipper=document.getElementById("tipper").value;
	console.log(tipper);
	let tiprub=document.getElementById("tiprub");
	console.log(tiprub);
	let tot=document.getElementById("tot");
	console.log(tot);

	let percentage=Number(amount)*Number(tipper)/100;
	tiprub.value=percentage;

	let total=Number(amount)+percentage;
	tot.value=total;
})
