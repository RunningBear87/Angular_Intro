// part one
var app = angular.module('example', []);
// our application name is example
// we include an empty array for dependencies. Bootstrap could be included here for example


var products = [{name: "First Look", id: "filo", show: true},
				{name: "252 Basics", id: "252B", show: true},
				{name: "Married People", id:"MP", show: false},
				{name: "XP3 Students", id:"xp3s", show: true}
				];
				
var premiumEnhancements = [{name:"Amber Sky Records Premium", description: "With the Amber Sky Music Package you can now receive worship music every month to be conveniently downloaded right with your curriculum. These items are hand-selected by our team to go along with the theme and life app each month. The songs selected will be rotated in the worship scripts you already receive with your curriculum."},
							{name:"Get Reel 2.0", description: "Want a way to enhance your live presentation and emphasize faith skillsGet Reel 2.0 helps you enhance your environment with graphics, videos and more while inspiring key faith skills in kids. Get Reel 2.0 is a companion resource for your live teaching in the 252 Groups curriculum. It can also be used in your FX or as a promotional piece to show in your adult services."},
							{name:"Feature Presentation", description: "Need a video solution for Large Group to replace a live skit and storyteller Feature Presentation is a creative presentation of the 252 Basics weekly Bible story both through a professional storyteller and a dynamic dramatization. Because the most important thing you do in your environment is tell the Bible story, we include two video options for each weekly Bible story. "},
							{name:"Wonder", description: "The Wonder! Look at Godâs Story resource introduces preschoolers to Godâs story and helps them build a spiritual foundation on His truth. Each week, you will find an engaging, interactive and relevant telling of one of the stories found in the Bible as well as introductory and wrap up sketches connecting that story to a preschoolerâs world."}];				

// part two
app.controller('exampleController', function(){
	this.products = products;
});

// part three
app.controller('exampleControllerTwo', function(){
	var tab = 1;	
	this.premiumEnhancements = premiumEnhancements;
	this.description = ""; 

	this.selectTab = function(setTab)
	{
		this.tab = setTab;
		this.description = premiumEnhancements[this.tab].description;	
	}
});

// part four
app.controller('exampleControllerThree', function(){
	this.pe = premiumEnhancements;
	
	this.addPremiumEnhancement = function(premiumEnhancement){
		this.pe.push(this.review);
	}
	
	this.update = function(thisObject)
	{
		this.pe.push(thisObject);
	}
});

// part five
app.controller('exampleControllerFour', ['$http', function($http){
	var thisObject = this;
	var data = [];
	$http.get('').success(function(data){
		thisObject.data = data;
	});
} ]);

