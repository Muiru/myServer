var fortunesCookies = [
	"Conquer your fears or they will conquer you",
	"Rivers need springs",
	"Do not fear when you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple",
	];

	exports.getFortune = ()=>{
		var idx = Math.floor(Math.random() * fortuneCookies.length);
		return fortuneCookies[idx];
	};

