// ipoort Testimonials imgs
import TestimonialsImg1 from "../assets/images/testi-1.webp"
import TestimonialsImg2 from "../assets/images/testi-2.webp"
// import img headset
import headsetLeftImg from "../assets/images/double-bluthoth.webp"
import headsetRightImg from "../assets/images/full-width-bluthhoth.webp"
// import best pro game img
import bestProLeftImg from "../assets/images/best1.webp"
import bestProRighttImg from "../assets/images/best2.webp"
//   best pro blog imgs import
import b1 from "../assets/images/b1.webp"
import b2 from "../assets/images/b2.webp"
import b3 from "../assets/images/b3.webp"
import b4 from "../assets/images/b4.webp"
import b5 from "../assets/images/b5.webp"
import b6 from "../assets/images/b6.webp"
import b7 from "../assets/images/b7.webp"
import b8 from "../assets/images/b8.webp"
import b9 from "../assets/images/b9.webp"
import b10 from "../assets/images/b10.webp"
import b11 from "../assets/images/b11.webp"
import b12 from "../assets/images/b12.webp"
import b13 from "../assets/images/b13.webp"
import b14 from "../assets/images/b14.webp"
import b15 from "../assets/images/b15.webp"
import b16 from "../assets/images/b16.webp"
// proaducts api images import
import pr1 from "../assets/images/pr1.avif"
import pr2 from "../assets/images/pr1green.avif"
import pr3 from "../assets/images/pr2(1).avif"
import pr4 from "../assets/images/pr2-2.avif"
import pr5 from "../assets/images/pr31.avif"
import pr6 from "../assets/images/pr32.avif"
import pr7 from "../assets/images/41.avif"
import pr8 from "../assets/images/42.avif"
import pr9 from "../assets/images/51.avif"
import pr10 from "../assets/images/52.avif"
import pr11 from "../assets/images/g1.webp"
import pr12 from "../assets/images/g11.webp"
import pr13 from "../assets/images/g12.webp"
import pr14 from "../assets/images/g13.webp"
import pr15 from "../assets/images/b1.webp"
import pr16 from "../assets/images/b10.webp"
import pr17 from "../assets/images/b11.webp"
import pr18 from "../assets/images/b13.webp"
import pr19 from "../assets/images/b14.webp"
import pr20 from "../assets/images/b15.webp"
import pr21 from "../assets/images/b3.webp"
import pr22 from "../assets/images/b7.webp"
// ----------------------  import color images ---------
import blue1 from "../assets/images/blue1.avif"
import blue2 from "../assets/images/blue2.avif"
import black1 from "../assets/images/black1.avif"
import black2 from "../assets/images/black2.avif"
import black3 from "../assets/images/black3.avif"
import red1 from "../assets/images/red1.webp"
import red2 from "../assets/images/red2.avif"
import white1 from "../assets/images/white1.avif"
import white2 from "../assets/images/white2.avif"
import white3 from "../assets/images/white3.avif"
import white4 from "../assets/images/white4.avif"
import white5 from "../assets/images/white5.avif"



export const FilterAllDatas=[
	{
		"id": 1,
		"title": "Alien ware Monitor T46",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"Samsung",
		"new":"new",
		"category": "PHONE",
		optionsTitle: "Size",
	    optionsType: "sizes",
		price: 100,
		sale:150,
		coverImg: blue1,
		color:"blue",  
		options: {
			sizes: {
				"128GB": {
					price: 1000,
					sale:1500,
					coverImg: blue1,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"256GB": {
					price: 2000,
					sale:2500,
					coverImg: pr10,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	},
    {
		"id": 2,
		"title": "Nintendo Switch Lite turqouse",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"XFX",
		"new":"new",
		"category": "PHONE",
	    "prType":"color",
		optionsTitle: "color",
	    optionsType: "color",  
		price: 700,
		sale: 900,
		coverImg: blue2,
		color:"blue",
		options: {
			color: {
				"Blue": {
					price: 700,
					sale: 900,
					coverImg: blue2,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"white": {
					price: 250,
					sale:350,
					coverImg: pr9,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	
	},
	{
		"id": 3,
		"title": "Colossus Ergonomik Office Chair",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"Kepler Brooks",
		"new":null,
		"category": "Chair",
		optionsTitle: "color",
	    optionsType: "color", 
		price: 356,
		sale: 400,
		coverImg: black1,
		color:"black",
		options: {
			color: {
				"white": {
					price: 356,
					sale: 400,
					coverImg: black1,
					imgs:[pr2, pr3, pr4, pr5]
				},
				"green": {
					price: 210,
					sale:290,
					coverImg: pr8,
					imgs:[pr2, pr3, pr4, pr5]
				},
			}
		},
	},
	{
	"id": 4,
	"title": "Cloud Alpha Gaming Headset",
	"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
	"rating": 4.69,
	"brand": "Chair",
	"type":"HyperX",
	"new":null,
	"category": "PHONE",
	optionsTitle: "color",
	optionsType: "color", 
	price: 1056,
	sale: 1141,
	coverImg: black2,
	color:"black",
	options: {
		color: {
			"black": {
				price: 1056,
				sale: 1141,
				coverImg: black2,
				imgs:[pr12, pr13, pr8, pr17]
			},
			"red": {
				price: 1110,
				sale:1190,
				coverImg: pr7,
				imgs:[pr21, pr16, pr4, pr2]
			},
		}
	},
	},
	{
		"id": 5,
		"title": "Electrobot Xtreme Gaming series Pc",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69, 
		"brand": "computer",
		"type":"Electrobot",
		"new":null,
		"category": "computer",
		optionsTitle: "Sizes",    
		optionsType:"sizes",
		 price: 1056,
		 sale: 1141,
		coverImg: black3,
		color:"black",
		options: {
			sizes: {
				"128GB": {
					price: 1056,
					sale: 1141,
					coverImg: black3,
					imgs:[pr22, pr17, pr18, pr20]
				},
				"512GB": {
					price: 1110,
					sale:1190,
					coverImg: pr6,
					imgs:[pr21, pr16, pr4, pr2]
				},
			}
		},
	},
	{
		"id": 6,
		"title": "Nintendo Switch Lite turqouse",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"XFX",
		"new":"new",
		"category": "PHONE",
	    "prType":"color",
		optionsTitle: "color",
	    optionsType: "color",  
		price: 700,
		sale: 400,
		coverImg: red1,
		color:"red",
		options: {
			color: {
				"Blue": {
					price: 700,
					sale: 900,
					coverImg: red1,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"white": {
					price: 250,
					sale:350,
					coverImg: pr9,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	
	},
	{
		"id": 7,
		"title": "Colossus Ergonomik Office Chair",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"Kepler Brooks",
		"new":null,
		"category": "Chair",
		optionsTitle: "color",
	    optionsType: "color", 
		price: 356,
		sale: 400,
		coverImg: red2,
		color:"red",
		options: {
			color: {
				"white": {
					price: 356,
					sale: 400,
					coverImg: red2,
					imgs:[pr2, pr3, pr4, pr5]
				},
				"green": {
					price: 210,
					sale:290,
					coverImg: pr8,
					imgs:[pr2, pr3, pr4, pr5]
				},
			}
		},
	},
	{
	"id": 8,
	"title": "Cloud Alpha Gaming Headset",
	"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
	"rating": 4.69,
	"brand": "Chair",
	"type":"HyperX",
	"new":null,
	"category": "PHONE",
	optionsTitle: "color",
	optionsType: "color", 
	price: 1056,
	sale: 1141,
	coverImg: white1,
	color:"white",
	options: {
		color: {
			"black": {
				price: 1056,
				sale: 1141,
				coverImg: white1,
				imgs:[pr12, pr13, pr8, pr17]
			},
			"red": {
				price: 1110,
				sale:1190,
				coverImg: pr7,
				imgs:[pr21, pr16, pr4, pr2]
			},
		}
	},
	},
	{
		"id": 9,
		"title": "Alien ware Monitor T46",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"Samsung",
		"new":"new",
		"category": "PHONE",
		optionsTitle: "Size",
	    optionsType: "sizes",
		price: 100,
		sale:150,
		coverImg: white2,
	    color:"white",
		options: {
			sizes: {
				"128GB": {
					price: 1000,
					sale:1500,
					coverImg: white2,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"256GB": {
					price: 2000,
					sale:2500,
					coverImg: pr10,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	},
	{
		"id": 10,
		"title": "Cloud Alpha Gaming Headset",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"HyperX",
		"new":null,
		"category": "PHONE",
		optionsTitle: "color",
		optionsType: "color", 
		price: 1056,
		sale: 1141,
		coverImg: white3,
		color:"white",
		options: {
			color: {
				"black": {
					price: 1056,
					sale: 1141,
					coverImg: white3,
					imgs:[pr12, pr13, pr8, pr17]
				},
				"red": {
					price: 1110,
					sale:1190,
					coverImg: pr7,
					imgs:[pr21, pr16, pr4, pr2]
				},
			}
		},
		},
		{
			"id": 11,
			"title": "Colossus Ergonomik Office Chair",
			"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			"rating": 4.69,
			"brand": "Chair",
			"type":"Kepler Brooks",
			"new":null,
			"category": "Chair",
			optionsTitle: "color",
			optionsType: "color", 
			price: 356,
			sale: 400,
			coverImg: white4,
			color:"white",
			options: {
				color: {
					"white": {
						price: 356,
						sale: 400,
						coverImg: white4,
						imgs:[pr2, pr3, pr4, pr5]
					},
					"green": {
						price: 210,
						sale:290,
						coverImg: pr8,
						imgs:[pr2, pr3, pr4, pr5]
					},
				}
			},
		},
		{
			"id": 11,
			"title": "Colossus Ergonomik Office Chair",
			"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			"rating": 4.69,
			"brand": "Chair",
			"type":"Kepler Brooks",
			"new":null,
			"category": "Chair",
			optionsTitle: "color",
			optionsType: "color", 
			price: 356,
			sale: 400,
			coverImg: white5,
			color:"white",
			options: {
				color: {
					"white": {
						price: 356,
						sale: 400,
						coverImg: white5,
						imgs:[pr2, pr3, pr4, pr5]
					},
					"green": {
						price: 210,
						sale:290,
						coverImg: pr8,
						imgs:[pr2, pr3, pr4, pr5]
					},
				}
			},
		},
]

export const OurShopApi=[
	{
		id:1,
		num:"01",
		header:"Gift Boxes",
		description:"Finished products products and gift wrapping",
	},
	{
		id:2,
		num:"02",
		header:"Promotions",
		description:"Large promotions with numerous discounts"
	},
	{
		id:3,
		num:"03",
		header:"Shipping",
		description:"Free shipping on any order from $ 150"
	},
	{
		id:4,
		num:"04",
		header:"Quality",
		description:"All products are made by engineers from India"
	}
]

export const TestimonialsApi=[
	{
		id:1,
		img: TestimonialsImg1,
		title:"Escaping Reality!",
	    clientName:"David Rodriguez",
		description:"I have been gaming for as long as I can remember, and I have always loved the sense of escape and adventure that it provides."
	},
	{
		id:2,
		img: TestimonialsImg2,
		title:"One Level Time!",
        clientName:"Sarah Johnson",
		description:"I also love the challenge of trying to beat a difficult game or master a new skill. Gaming has taught me a lot about perseverance and determination, and it's helped me to develop my problem-solving skills."
	},
	{
		id:3,
		img: TestimonialsImg1,
		title:"Gamer's Journey!",
		clientName:"Alex Thompson",
		description:"Gaming has had a positive impact on my life in so many ways, and I'm so glad that I'm able to share my love of gaming with others."
	},
	{
		id:4,
		img: TestimonialsImg2,
		title:"One Level!",
        clientName:"Sarah Johnson david",
		description:"I also love the challenge of trying to beat a difficult game or master a new skill. Gaming has taught me a lot about perseverance and determination, and it's helped me to develop my problem-solving skills."
	},
	{
		id:5,
		img: TestimonialsImg1,
		title:"Gamer's Journey play!",
		clientName:"Alex Thompson Calvin",
		description:"Gaming has had a positive impact on my life in so many ways, and I'm so glad that I'm able to share my love of gaming with others."
	}
]

export const HeadsetApi=[
	{
		id:1,
		imgLeft:headsetLeftImg,
		imgRight:headsetRightImg,
		cartCompData:{
			 id:1,
			 title:"Cloud Alpha Gaming Headset",
			 description:"HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded headband. Detachable braided cable with convenient in-line audio control. Detachable noise cancellation microphone.",
			ipnSelectorType:"Color",
		    selectorValue:["Black","Red"],
		    regularPrice:530.00,
		    salePrice:600.00
		}
	}
]

export const BestProGameApi=[
	{
		id:1,
		imgLeft:bestProLeftImg,
		imgRight:bestProRighttImg,
		cartCompData:{
			 id:1,
			 title:"KD DMTR Gaming Desktop PC",
			 description:"Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease.Preloaded with Windows 10 64-bit OS for enhanced productivity and multitaskin",
			ipnSelectorType:"Size",
		    selectorValue:["256 GB","364 GB"],
		    regularPrice:865.00,
		    salePrice:""
		}
	}
]


export const BestProBlogApi=[
	{
		id:1,
		img:b1,
		date:"December 13,2022",
		title:"My Game Riwiev",
		author:"WORKDO"
	},
	{
		id:2,
		img:b2,
		date:"December 13,2022",
		title:"The Loud Riwev",
		author:"WORKDO"
	},
	{
		id:3,
		img:b3,
		date:"December 13,2022",
		title:"The Derty Video",
		author:"WORKDO"
	},
	{
		id:4,
		img:b4,
		date:"December 13,2022",
		title:"Last Living Man",
		author:"WORKDO"
	},
	{
		id:5,
		img:b5,
		date:"December 13,2022",
		title:"Phandasy Start",
		author:"WORKDO"
	},
	{
		id:6,
		img:b6,
		date:"December 13,2022",
		title:"Gaming Magnitude",
		author:"WORKDO"
	},
	{
		id:7,
		img:b7,
		date:"December 13,2022",
		title:"Playfull Writing",
		author:"WORKDO"
	},
	{
		id:8,
		img:b8,
		date:"December 13,2022",
		title:"Game Smart Lunar",
		author:"WORKDO"
	},
	{
		id:9,
		img:b9,
		date:"December 13,2022",
		title:"The Dev Diary",
		author:"WORKDO"
	},
	{
		id:10,
		img:b10,
		date:"December 13,2022",
		title:"My Game Riwiev",
		author:"WORKDO"
	},
	{
		id:11,
		img:b11,
		date:"December 13,2022",
		title:"Game Play Riwiev",
		author:"WORKDO"
	},
	{
		id:12,
		img:b12,
		date:"December 13,2022",
		title:"The Loud Riwev",
		author:"WORKDO"
	},
	{
		id:13,
		img:b13,
		date:"December 13,2022",
		title:"The Derty Video",
		author:"WORKDO"
	},
	{
		id:14,
		img:b14,
		date:"December 13,2022",
		title:"Last Living Man",
		author:"WORKDO"
	},
	{
		id:15,
		img:b15,
		date:"December 13,2022",
		title:"Phandasy Start",
		author:"WORKDO"
	},
	{
		id:16,
		img:b16,
		date:"December 13,2022",
		title:"Gaming Magnitude",
		author:"WORKDO"
	},

]

export const GamingProductsApi=[
	{
		"id": 1,
		"title": "Alien ware Monitor T46",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"Samsung",
		"new":"new",
		"category": "PHONE",
		optionsTitle: "Size",
	    optionsType: "sizes",
		price: 1000,
		sale:1500,
		coverImg: pr1,
		options: {
			sizes: {
				"128GB": {
					price: 1000,
					sale:1500,
					coverImg: pr1,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"256GB": {
					price: 2000,
					sale:2500,
					coverImg: pr10,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	},
	{
		"id": 2,
		"title": "Nintendo Switch Lite turqouse",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"XFX",
		"new":"new",
		"category": "PHONE",
	    "prType":"color",
		optionsTitle: "color",
	    optionsType: "color",  
		price: 700,
		sale: 900,
		coverImg: pr15,
		options: {
			color: {
				"Blue": {
					price: 700,
					sale: 900,
					coverImg: pr15,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"white": {
					price: 250,
					sale:350,
					coverImg: pr9,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	
	},
	{
		"id": 3,
		"title": "Colossus Ergonomik Office Chair",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"Kepler Brooks",
		"new":null,
		"category": "Chair",
		optionsTitle: "color",
	    optionsType: "color", 
		price: 356,
		sale: 400,
		coverImg: pr4,
		options: {
			color: {
				"white": {
					price: 356,
					sale: 400,
					coverImg: pr4,
					imgs:[pr2, pr3, pr4, pr5]
				},
				"green": {
					price: 210,
					sale:290,
					coverImg: pr8,
					imgs:[pr2, pr3, pr4, pr5]
				},
			}
		},
	},
	{
	"id": 4,
	"title": "Cloud Alpha Gaming Headset",
	"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
	"rating": 4.69,
	"brand": "Chair",
	"type":"HyperX",
	"new":null,
	"category": "PHONE",
	optionsTitle: "color",
	optionsType: "color", 
	price: 1056,
	sale: 1141,
	coverImg: pr5,
	options: {
		color: {
			"black": {
				price: 1056,
				sale: 1141,
				coverImg: pr5,
				imgs:[pr12, pr13, pr8, pr17]
			},
			"red": {
				price: 1110,
				sale:1190,
				coverImg: pr7,
				imgs:[pr21, pr16, pr4, pr2]
			},
		}
	},
	},
	{
		"id": 5,
		"title": "Electrobot Xtreme Gaming series Pc",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69, 
		"brand": "computer",
		"type":"Electrobot",
		"new":null,
		"category": "computer",
		optionsTitle: "Sizes",    
		optionsType:"sizes",
		 price: 1056,
		 sale: 1141,
		coverImg: pr10,
		options: {
			sizes: {
				"128GB": {
					price: 1056,
					sale: 1141,
					coverImg: pr10,
					imgs:[pr22, pr17, pr18, pr20]
				},
				"512GB": {
					price: 1110,
					sale:1190,
					coverImg: pr6,
					imgs:[pr21, pr16, pr4, pr2]
				},
			}
		},
	},
	{
		"id": 6,
		"title": "Alien ware Monitor T46",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"Samsung",
		"new":"new",
		"category": "PHONE",
		optionsTitle: "Size",
	    optionsType: "sizes",
		price: 1000,
		sale:1500,
		coverImg: pr1,
		options: {
			sizes: {
				"128GB": {
					price: 1000,
					sale:1500,
					coverImg: pr1,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"256GB": {
					price: 2000,
					sale:2500,
					coverImg: pr10,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	},
	{
		"id": 7,
		"title": "Nintendo Switch Lite turqouse",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
		"rating": 4.69,
		"brand": "Chair",
		"type":"XFX",
		"new":"new",
		"category": "PHONE",
	    "prType":"color",
		optionsTitle: "color",
	    optionsType: "color",  
		price: 700,
		sale: 900,
		coverImg: pr15,
		options: {
			color: {
				"Blue": {
					price: 700,
					sale: 900,
					coverImg: pr15,
					imgs:[pr12, pr9, pr14, pr15]
				},
				"white": {
					price: 250,
					sale:350,
					coverImg: pr9,
					imgs:[pr8, pr9, pr20, pr21]
				},
			}
		},
	
	},
	// {
	// 	"id": 8,
	// 	"title": "Colossus Ergonomik Office Chair",
	// 	"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
	// 	"rating": 4.69,
	// 	"brand": "Chair",
	// 	"type":"Kepler Brooks",
	// 	"new":null,
	// 	"category": "Chair",
	// 	optionsTitle: "color",
	//     optionsType: "color", 
	// 	price: 356,
	// 	sale: 400,
	// 	coverImg: pr4,
	// 	options: {
	// 		color: {
	// 			"white": {
	// 				price: 356,
	// 				sale: 400,
	// 				coverImg: pr4,
	// 				imgs:[pr2, pr3, pr4, pr5]
	// 			},
	// 			"green": {
	// 				price: 210,
	// 				sale:290,
	// 				coverImg: pr8,
	// 				imgs:[pr2, pr3, pr4, pr5]
	// 			},
	// 		}
	// 	},
	// },
	// {
	// "id": 9,
	// "title": "Cloud Alpha Gaming Headset",
	// "description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
	// "rating": 4.69,
	// "brand": "Chair",
	// "type":"HyperX",
	// "new":null,
	// "category": "PHONE",
	// optionsTitle: "color",
	// optionsType: "color", 
	// price: 1056,
	// sale: 1141,
	// coverImg: pr5,
	// options: {
	// 	color: {
	// 		"black": {
	// 			price: 1056,
	// 			sale: 1141,
	// 			coverImg: pr5,
	// 			imgs:[pr12, pr13, pr8, pr17]
	// 		},
	// 		"red": {
	// 			price: 1110,
	// 			sale:1190,
	// 			coverImg: pr7,
	// 			imgs:[pr21, pr16, pr4, pr2]
	// 		},
	// 	}
	// },
	// },
	// {
	// 	"id": 10,
	// 	"title": "Electrobot Xtreme Gaming series Pc",
	// 	"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
	// 	"rating": 4.69, 
	// 	"brand": "computer",
	// 	"type":"Electrobot",
	// 	"new":null,
	// 	"category": "computer",
	// 	optionsTitle: "Sizes",    
	// 	optionsType:"sizes",
	// 	 price: 1056,
	// 	 sale: 1141,
	// 	coverImg: pr10,
	// 	options: {
	// 		sizes: {
	// 			"128GB": {
	// 				price: 1056,
	// 				sale: 1141,
	// 				coverImg: pr10,
	// 				imgs:[pr22, pr17, pr18, pr20]
	// 			},
	// 			"512GB": {
	// 				price: 1110,
	// 				sale:1190,
	// 				coverImg: pr6,
	// 				imgs:[pr21, pr16, pr4, pr2]
	// 			},
	// 		}
	// 	},
	// },
]

export const GamingCategoriesApi=
[
	{
		id:1,
		title:"Gaming peripherals",
		sliderDatas:[
			{
				"id": 1,
				"title": "Alien ware Monitor T46",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"Samsung",
				"new":"new",
				"category": "PHONE",
				optionsTitle: "Size",
				optionsType: "sizes",
				price: 1000,
				sale:1500,
				coverImg: pr1,
				options: {
					sizes: {
						"128GB": {
							price: 1000,
							sale:1500,
							coverImg: pr1,
							imgs:[pr12, pr9, pr14, pr15]
						},
						"256GB": {
							price: 2000,
							sale:2500,
							coverImg: pr10,
							imgs:[pr8, pr9, pr20, pr21]
						},
					}
				},
			},
			{
				"id": 2,
				"title": "Nintendo Switch Lite turqouse",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"XFX",
				"new":"new",
				"category": "PHONE",
				"prType":"color",
				optionsTitle: "color",
				optionsType: "color",  
				price: 700,
				sale: 900,
				coverImg: pr15,
				options: {
					color: {
						"Blue": {
							price: 700,
							sale: 900,
							coverImg: pr15,
							imgs:[pr12, pr9, pr14, pr15]
						},
						"white": {
							price: 250,
							sale:350,
							coverImg: pr9,
							imgs:[pr8, pr9, pr20, pr21]
						},
					}
				},
			
			},
			{
				"id": 3,
				"title": "Colossus Ergonomik Office Chair",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"Kepler Brooks",
				"new":null,
				"category": "Chair",
				optionsTitle: "color",
				optionsType: "color", 
				price: 356,
				sale: 400,
				coverImg: pr4,
				options: {
					color: {
						"white": {
							price: 356,
							sale: 400,
							coverImg: pr4,
							imgs:[pr2, pr3, pr4, pr5]
						},
						"green": {
							price: 210,
							sale:290,
							coverImg: pr8,
							imgs:[pr2, pr3, pr4, pr5]
						},
					}
				},
			},
			{
			"id": 4,
			"title": "Cloud Alpha Gaming Headset",
			"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			"rating": 4.69,
			"brand": "Chair",
			"type":"HyperX",
			"new":null,
			"category": "PHONE",
			optionsTitle: "color",
			optionsType: "color", 
			price: 1056,
			sale: 1141,
			coverImg: pr5,
			options: {
				color: {
					"black": {
						price: 1056,
						sale: 1141,
						coverImg: pr5,
						imgs:[pr12, pr13, pr8, pr17]
					},
					"red": {
						price: 1110,
						sale:1190,
						coverImg: pr7,
						imgs:[pr21, pr16, pr4, pr2]
					},
				}
			},
			},
		]
	},
	{
		id:2,
		title:"Speakers & Headphones",
		sliderDatas:[
			{
				"id": 2,
				"title": "Nintendo Switch Lite turqouse",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"XFX",
				"new":"new",
				"category": "PHONE",
				"prType":"color",
				optionsTitle: "color",
				optionsType: "color",  
				price: 700,
				sale: 900,
				coverImg: pr15,
				options: {
					color: {
						"Blue": {
							price: 700,
							sale: 900,
							coverImg: pr15,
							imgs:[pr12, pr9, pr14, pr15]
						},
						"white": {
							price: 250,
							sale:350,
							coverImg: pr9,
							imgs:[pr8, pr9, pr20, pr21]
						},
					}
				},
			
			},
			{
				"id": 3,
				"title": "Colossus Ergonomik Office Chair",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"Kepler Brooks",
				"new":null,
				"category": "Chair",
				optionsTitle: "color",
				optionsType: "color", 
				price: 356,
				sale: 400,
				coverImg: pr4,
				options: {
					color: {
						"white": {
							price: 356,
							sale: 400,
							coverImg: pr4,
							imgs:[pr2, pr3, pr4, pr5]
						},
						"green": {
							price: 210,
							sale:290,
							coverImg: pr8,
							imgs:[pr2, pr3, pr4, pr5]
						},
					}
				},
			},
			{
			"id": 4,
			"title": "Cloud Alpha Gaming Headset",
			"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			"rating": 4.69,
			"brand": "Chair",
			"type":"HyperX",
			"new":null,
			"category": "PHONE",
			optionsTitle: "color",
			optionsType: "color", 
			price: 1056,
			sale: 1141,
			coverImg: pr5,
			options: {
				color: {
					"black": {
						price: 1056,
						sale: 1141,
						coverImg: pr5,
						imgs:[pr12, pr13, pr8, pr17]
					},
					"red": {
						price: 1110,
						sale:1190,
						coverImg: pr7,
						imgs:[pr21, pr16, pr4, pr2]
					},
				}
			},
			},
			{
				"id": 5,
				"title": "Electrobot Xtreme Gaming series Pc",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69, 
				"brand": "computer",
				"type":"Electrobot",
				"new":null,
				"category": "computer",
				optionsTitle: "Sizes",    
				optionsType:"sizes",
				 price: 1056,
				 sale: 1141,
				coverImg: pr10,
				options: {
					sizes: {
						"128GB": {
							price: 1056,
							sale: 1141,
							coverImg: pr10,
							imgs:[pr22, pr17, pr18, pr20]
						},
						"512GB": {
							price: 1110,
							sale:1190,
							coverImg: pr6,
							imgs:[pr21, pr16, pr4, pr2]
						},
					}
				},
			}
		]
	},
	{
		id:3,
		title:"Power Suppliens",
		sliderDatas:[
			{
				"id": 10,
				"title": "Colossus Ergonomik Office Chair",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"Kepler Brooks",
				"new":null,
				"category": "Chair",
				optionsTitle: "color",
				optionsType: "color", 
				price: 356,
				sale: 400,
				coverImg: pr4,
				options: {
					color: {
						"white": {
							price: 356,
							sale: 400,
							coverImg: pr4,
							imgs:[pr2, pr3, pr4, pr5]
						},
						"green": {
							price: 210,
							sale:290,
							coverImg: pr8,
							imgs:[pr2, pr3, pr4, pr5]
						},
					}
				},
			},
			{
				"id": 11,
				"title": "Alien ware Monitor T46",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"Samsung",
				"new":"new",
				"category": "PHONE",
				optionsTitle: "Size",
				optionsType: "sizes",
				price: 1000,
				sale:1500,
				coverImg: pr1,
				options: {
					sizes: {
						"128GB": {
							price: 1000,
							sale:1500,
							coverImg: pr1,
							imgs:[pr12, pr9, pr14, pr15]
						},
						"256GB": {
							price: 2000,
							sale:2500,
							coverImg: pr10,
							imgs:[pr8, pr9, pr20, pr21]
						},
					}
				},
			},
			{
				"id": 12,
				"title": "Electrobot Xtreme Gaming series Pc",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69, 
				"brand": "computer",
				"type":"Electrobot",
				"new":null,
				"category": "computer",
				optionsTitle: "Sizes",    
				optionsType:"sizes",
				 price: 1056,
				 sale: 1141,
				coverImg: pr10,
				options: {
					sizes: {
						"128GB": {
							price: 1056,
							sale: 1141,
							coverImg: pr7,
							imgs:[pr22, pr17, pr18, pr20]
						},
						"512GB": {
							price: 1110,
							sale:1190,
							coverImg: pr5,
							imgs:[pr21, pr16, pr4, pr2]
						},
					}
				},
			},
			{
				"id": 13,
				"title": "Cloud Alpha Gaming Headset",
				"description": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
				"rating": 4.69,
				"brand": "Chair",
				"type":"HyperX",
				"new":null,
				"category": "PHONE",
				optionsTitle: "color",
				optionsType: "color", 
				price: 1056,
				sale: 1141,
				coverImg: pr5,
				options: {
					color: {
						"black": {
							price: 1056,
							sale: 1141,
							coverImg: pr5,
							imgs:[pr12, pr13, pr8, pr17]
						},
						"red": {
							price: 1110,
							sale:1190,
							coverImg: pr7,
							imgs:[pr21, pr16, pr4, pr2]
						},
					}
				},
			}
		]
	},
]









































// ==============================================
// export const SliderProducts = [
// 	{
// 		id: 1,
// 		title: "Computer",
// 		options: {
// 			"sizes": {
// 				"128GB": {
// 					img: 'img.png',
// 					price: 1000,
// 				},
// 				"256GB": {
// 					img: 'img.png',
// 					price: 2000
// 				},
// 			}
// 		}
// 	}
// ]
    
// Object.keys(SliderProduct[0].options)[0] // sizes
// Object.keys(SliderProduct[0].options[0]) // [128GB, 256GB]

// Object.keys(SliderProduct[0].options[0])[1].price // 2000

// SliderProduct[0].options[0].map((option, index) => {
// 	// img, price
// })

// [
// 	{
// 	  "id": 44216381473089,
// 	  "title": "32 Inches",
// 	  "option1": "32 Inches",
// 	  "option2": null,
// 	  "option3": null,
// 	  "sku": "1120550231151",
// 	  "requires_shipping": true,
// 	  "taxable": true,
// 	  "featured_image": {
// 		"id": 40040795603265,
// 		"product_id": 8057166594369,
// 		"position": 1,
// 		"created_at": "2022-12-19T06:58:17-05:00",
// 		"updated_at": "2022-12-19T06:58:20-05:00",
// 		"alt": null,
// 		"width": 500,
// 		"height": 500,
// 		"src": "//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100",
// 		"variant_ids": [
// 		  44216381473089
// 		]
// 	  },
// 	  "available": true,
// 	  "name": "Alien ware Monitor T 46 - 32 Inches",
// 	  "public_title": "32 Inches",
// 	  "options": [
// 		"32 Inches"
// 	  ],
// 	  "price": 85000,
// 	  "weight": 0,
// 	  "compare_at_price": null,
// 	  "inventory_management": "shopify",
// 	  "barcode": "",
// 	  "featured_media": {
// 		"alt": null,
// 		"id": 32388944757057,
// 		"position": 1,
// 		"preview_image": {
// 		  "aspect_ratio": 1,
// 		  "height": 500,
// 		  "width": 500,
// 		  "src": "//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100"
// 		}
// 	  },
// 	  "quantity_rule": {
// 		"min": 1,
// 		"max": null,
// 		"increment": 1
// 	  }
// 	},
// 	{
// 	  "id": 44216381505857,
// 	  "title": "28 Inches",
// 	  "option1": "28 Inches",
// 	  "option2": null,
// 	  "option3": null,
// 	  "sku": "1120550231152",
// 	  "requires_shipping": true,
// 	  "taxable": true,
// 	  "featured_image": {
// 		"id": 40040795570497,
// 		"product_id": 8057166594369,
// 		"position": 3,
// 		"created_at": "2022-12-19T06:58:17-05:00",
// 		"updated_at": "2022-12-19T06:58:20-05:00",
// 		"alt": null,
// 		"width": 500,
// 		"height": 500,
// 		"src": "//gaming-workdo.myshopify.com/cdn/shop/products/3_5dfac41e-149d-4bbd-8a5d-6ffc16e207d4.png?v=1671451100",
// 		"variant_ids": [
// 		  44216381505857
// 		]
// 	  },
// 	  "available": true,
// 	  "name": "Alien ware Monitor T 46 - 28 Inches",
// 	  "public_title": "28 Inches",
// 	  "options": [
// 		"28 Inches"
// 	  ],
// 	  "price": 80000,
// 	  "weight": 0,
// 	  "compare_at_price": null,
// 	  "inventory_management": "shopify",
// 	  "barcode": "",
// 	  "featured_media": {
// 		"alt": null,
// 		"id": 32388944822593,
// 		"position": 3,
// 		"preview_image": {
// 		  "aspect_ratio": 1,
// 		  "height": 500,
// 		  "width": 500,
// 		  "src": "//gaming-workdo.myshopify.com/cdn/shop/products/3_5dfac41e-149d-4bbd-8a5d-6ffc16e207d4.png?v=1671451100"
// 		}
// 	  },
// 	  "quantity_rule": {
// 		"min": 1,
// 		"max": null,
// 		"increment": 1
// 	  }
// 	}
// ]