var cardcol2=document.getElementById("cardcol2");

let obj=[
	{
		id:1,
		restaurantname:"Annapoorna Garden",
		rating:4.1,
		price:250,
		time:25,
		type:"veg",
		dish:"South Indian,Chinese..",
		place:"Tirunelveli",
		offer:"RS.125 Offer Above...",
		image:"images/img-1.webp"
	},
	{
		id:2,
		restaurantname:"Hotel Ananthabhavan",
		rating:3.9,
		price:250,
		time:23,
		type:"veg",
		dish:"North Indian,Chinese..",
		place:"Tirunelveli",
		offer:"RS.125 Offer Above Rs.199",
		image:"images/img-2.webp"
	},
	{
		id:3,
		restaurantname:"Nellai Saravanabhavan",
		rating:4.3,
		price:200,
		time:22,
		type:"veg",
		dish:"South Indian,Dessert..",
		place:"Tirunelveli",
		offer:"40% Offer upto Rs.80",
		image:"images/img-3.webp"
	},
	{
		id:4,
		restaurantname:"Sri vishaha Bhavan",
		rating:4.1,
		price:250,
		time:26,
		type:"veg",
		dish:"North Indian,Chinese..",
		place:"Tirunelveli",
		offer:"RS.125 Offer Above...",
		image:"images/img-4.webp"
	},
	{
		id:5,
		restaurantname:"Zam Zam Biriyani",
		rating:4.1,
		price:450,
		time:25,
		type:"Nonveg",
		dish:"Biriyani,Chinese..",
		place:"Tirunelveli",
		offer:"20% offer upto Rs.50",
		image:"images/img-5.webp"
	},
	{
		id:6,
		restaurantname:"Dindugul Thalappakatti",
		rating:4.0,
		price:600,
		time:28,
		type:"Nonveg",
		dish:"Biriyani,Chinese..",
		place:"Tirunelveli",
		offer:"40% offer upto Rs.80",
		image:"images/img-6.webp"
	},
	{
		id:7,
		restaurantname:"The Chocolate Room",
		rating:4.6,
		price:250,
		time:27,
		type:"sweet",
		dish:"Pastas,Chinese..",
		place:"Tirunelveli",
		offer:"Free Item",
		image:"images/img-7.webp"
	},
	{
		id:8,
		restaurantname:"Shravan Specials",
		rating:4.8,
		price:200,
		time:30,
		type:"Nonveg",
		dish:"Biriyani,North Indian..",
		place:"Tirunelveli",
		offer:"40% offer upto Rs.80",
		image:"images/img-8.webp"
	},
	{
		id:9,
		restaurantname:"The Biriyani Life",
		rating:4.0,
		price:250,
		time:32,
		type:"Nonveg",
		dish:"Biriyani,Lucknowi..",
		place:"Tirunelveli",
		offer:"RS.125 offer Above",
		image:"images/img-9.webp"
	},
	{
		id:10,
		restaurantname:"Faasos Signature wraps",
		rating:4.0,
		price:350,
		time:40,
		type:"sweet",
		dish:"Fast Food,North Indian..",
		place:"Tirunelveli",
		offer:"Rs.100 offer above Rs.299",
		image:"images/img-10.webp"
	},
	{
		id:11,
		restaurantname:"KFC",
		rating:4.1,
		price:400,
		time:24,
		type:"Fast Food",
		dish:"Burger,Biriyani..",
		place:"Tirunelveli",
		offer:"40% offer upto Rs.80",
		image:"images/img-11.webp"
	},
	{
		id:12,
		restaurantname:"Lunch Box",
		rating:4.0,
		price:200,
		time:29,
		type:"Non veg",
		dish:"Burger,Sounth Indian",
		place:"Tirunelveli",
		offer:"50% offer upto Rs.100",
		image:"images/img-12.webp"
	},
	{
		id:13,
		restaurantname:"Faasos-Wraps & Rolls",
		rating:4.1,
		price:200,
		time:29,
		type:"Fast Food",
		dish:"Kebabs,Fast Food",
		place:"Tirunelveli",
		offer:"50% offer upto Rs.100",
		image:"images/img-13.webp"
	},
	{
		id:14,
		restaurantname:"Firangi Bake",
		rating:4.0,
		price:400,
		time:32,
		type:"Fast Food",
		dish:"Pizzas,Pastas..",
		place:"Tirunelveli",
		offer:"Rs.125 offer above..",
		image:"images/img-14.webp"
	},
	{
		id:15,
		restaurantname:"Dindigul Thalappakatti",
		rating:4.1,
		price:350,
		time:29,
		type:"Non veg",
		dish:"Biriyani,Barbecue",
		place:"Tirunelveli",
		offer:"40% offer upto Rs.80",
		image:"images/img-15.webp"
	},
	{
		id:16,
		restaurantname:"Baskin Robbins-Ice ",
		rating:4.1,
		price:250,
		time:20,
		type:"Fast Food",
		dish:"Dessert,Ice cream",
		place:"Tirunelveli",
		offer:"10% offer above..",
		image:"images/img-16.webp"
	},
	{
		id:17,
		restaurantname:"The good bowl ",
		rating:4.1,
		price:400,
		time:30,
		type:"Non veg",
		dish:"Biriyani,North Indian",
		place:"Tirunelveli",
		offer:"50% offer upto Rs.100",
		image:"images/img-17.webp"
	},
	{
		id:18,
		restaurantname:"Sweet Trust ",
		rating:4.2,
		price:250,
		time:12,
		type:"Fast Food",
		dish:"Snacks,Bakery",
		place:"Tirunelveli",
		offer:"Rs.125 offer above..",
		image:"images/img-18.webp"
	},
	{
		id:19,
		restaurantname:"Behrouz Biriyani ",
		rating:3.9,
		price:500,
		time:29,
		type:"Non veg",
		dish:"Biriyani,North Indian",
		place:"Tirunelveli",
		offer:"50% offer upto Rs.100",
		image:"images/img-19.webp"
	},
	{
		id:20,
		restaurantname:"Dominos Pizza",
		rating:4.2,
		price:400,
		time:25,
		type:"Fast Food",
		dish:"Pizzas, Italian,..",
		place:"Tirunelveli",
		offer:"Rs.100 offer above..",
		image:"images/img-20.webp"
	},
	{
		id:21,
		restaurantname:"Meat and Eat ",
		rating:3.9,
		price:300,
		time:23,
		type:"Fast Food",
		dish:"Cinese,Burgers,.",
		place:"Tirunelveli",
		offer:"40% offer upto Rs.80",
		image:"images/img-21.webp"
	},
	{
		id:22,
		restaurantname:"Oven story Pizza ",
		rating:4.0,
		price:400,
		time:32,
		type:"Fast food",
		dish:"Pizzas,Pasta,Italian",
		place:"Tirunelveli",
		offer:"Rs.125 offer above..",
		image:"images/img-22.webp"
	},
	{
		id:23,
		restaurantname:"Hotel Banu Birunthuvan..",
		rating:4.2,
		price:300,
		time:17,
		type:"veg",
		dish:"Chinese,North Indian",
		place:"Tirunelveli",
		offer:"Rs.125 offer above",
		image:"images/img-23.webp"
	},
	{
		id:24,
		restaurantname:"Sri Janakirams.. ",
		rating:4.3,
		price:200,  
		time:17,
		type:"veg",
		dish:"Dessert,chinese,North Indian",
		place:"Tirunelveli",
		offer:"50% offer upto Rs.100",
		image:"images/img-24.webp"
	},
]

item(obj);

function item(food){
	food.forEach(function(e){


		var cardcard=document.createElement("div");
		cardcard.classList.add("card-card");
		cardcol2.append(cardcard)


		var cardimage=document.createElement("div");
		cardimage.classList.add("card-image");
		cardcard.append(cardimage);


		var image=document.createElement("div");
		image.classList.add("image");
		cardimage.append(image);


		var innerimage=document.createElement("img");
		innerimage.setAttribute("src",e.image);
		image.append(innerimage);


		var offer=document.createElement("p");
		offer.classList.add("card-offer");
		offer.innerHTML=e.offer;
		cardimage.append(offer);


		var heading=document.createElement("h4");
		heading.innerHTML=e.restaurantname;
		cardcard.append(heading);

		var ratingdiv=document.createElement("div");
		ratingdiv.classList.add("card-rating");
		cardcard.append(ratingdiv);


		var ratingicon=document.createElement("i");
		ratingicon.classList.add("fa","fa-star");
		ratingicon.setAttribute("aria-hidden","true");
		ratingdiv.append(ratingicon);


		var ratingpara=document.createElement("p");
		ratingpara.innerHTML=e.rating;
		ratingdiv.append(ratingpara);

		var price=document.createElement("P");
		price.innerHTML="Rs."+e.price;
		price.classList.add("card-price");
		cardcard.append(price)

		var dish=document.createElement("p");
		dish.innerHTML=e.dish;
		dish.classList.add("card-dish");
		cardcard.append(dish);


		var place=document.createElement("p");
		place.classList.add("card-place");
		place.innerHTML=e.place;
		cardcard.append(place);


		rating();

	function rating(){
		if(e.rating>=4.0){
			ratingicon.style.color="white";
			ratingicon.style.backgroundColor="green";
		}
		else if(e.rating>=2.5 && e.rating<=3.9){
			ratingicon.style.color="white";
			ratingicon.style.backgroundColor="orange";
		}
		else if( e.rating<=2.4){
			ratingicon.style.color="white";
			ratingicon.style.backgroundColor="red";
		}
	}
	})
		
}

function relevance(){
	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})
	// item(obj);
	item(obj);
}

function sortRatingHightoLow(){
	let sortRatingHightoLowObj=obj.slice().sort(function(a,b){
		return b.rating - a.rating;
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(sortRatingHightoLowObj);
	// console.log(1);
}





function ratingGreaterThan4(){
	let ratingGreaterThan4obj=obj.filter(function(a){
		return a.rating>=4.0;
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(ratingGreaterThan4obj);
// 	console.log(ratingGreaterThan4obj);
}


function vegetarian(){
	let vegobj=obj.filter(function(a){
		return a.type=="veg";
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(vegobj);
}


function lessThan300(){
	let lessThan300obj=obj.filter(function(a){
		return a.price<=300;
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(lessThan300obj);
}


function greaterThan300(){
	let greaterThan300obj=obj.filter(function(a){
		return a.price>300;
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(greaterThan300obj);
}


function priceHightoLow(){
	let priceHightoLowobj=obj.slice().sort(function(a,b){
		return b.price - a.price;
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(priceHightoLowobj);
}



function priceLowtoHigh(){
	let priceLowtoHighobj=obj.slice().sort(function(a,b){
		return a.price - b.price;
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(priceLowtoHighobj);
}


function fastDelivery(){
	let fastDeliveryobj=obj.filter(function(a){
		return a.time<30;
	})

	let colremove=document.querySelectorAll(".card-card");
	colremove.forEach(function(e){
		e.remove();
	})

	item(fastDeliveryobj);
}