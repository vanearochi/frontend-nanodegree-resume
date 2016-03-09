/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
 	"header":[
	{
		"bioPic" : "https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/vaneUdacityp2.jpg",
		"name" : "Vanessa Arochi",
		"role" : "Web Developer",

	}
	],
	"message":[
		{
			"welcomeMsg": "Hello my name is Vanessa Arochi"
		}
	],
	"skills":[
		{
		"skillsTitle": "Skills",
		"skills" : [
		 "Project Developing", "Programming", "Sales", "blabla"
		 ]
		}
	],
	"contacts" : [
	{
		"contactGeneric": '',
		"mobile": "(650) 452 57 67",
		"email" : "vanearochi@gmail.com",
		"github": "vanearochi",
		"twitter": "vanearochi",
		"location": "San Francisco",
	}
	]
}

var bioHTMLStrings = {
	"personal": [
		{
		"bioPic" : '<div class="col-md-12 "><img src="%data%" class="biopic img-responsive img-circle"></div>',
		"name" : '<div class="col-md-12 text-uppercase text-center" id="name"><h1 class="header">%data%</h1></div>',
		"role" : '<div class="col-md-12 text-center role">&nbsp %data%</div><hr>',
		}
	],
	"message":[
		{
			"welcomeMsg" : '<span class="welcome-message">%data%</span>',
		}
	],
	"skills":[
		{
			"skillsTitle" :'<div class="skills  text-uppercase text-center bg-primary">%data%</div>',
			"skills" : '<div class="flex-grow  skills textSkills ">%data%</div>'
		}
	],
	"contacts" : [
		{
		"contactGeneric" : '<div id="contacts" class=" text-center text-uppercase bg-primary">Contact me</div> <ul>',
		"mobile" : '<a href="tel:555-555-5555"><li class="flex-item fa fa-phone-square">&nbsp <span class= "textContact">%data%</span></li></a>',
 		"email" : '<a href="mailto:vanearochi@gmail.com" ><li class="flex-item fa fa-envelope">&nbsp <span class="textContact">%data%</span></li></a>',
		"github" : '<a href="https://github.com/vanearochi"><li class="flex-item fa fa-github-square">&nbsp <span class="textContact">%data%</span></li></a>',
 		"twitter" : '<a href="http://twitter.com/VaneArochi" ><li class="flex-item fa fa-twitter-square">&nbsp <span class="textContact">%data%</span></li></a>',
		"location" : '<a href=""><li class="flex-item fa fa-map-marker">&nbsp <span class="textContact"> %data%</span></li></a></ul>'

 //HTMLblog = '<li class="flex-item"><span class="">blog</span><span class="">%data%</span></li>';
 		}
	]
}

 var education = {
	"schools" : [
		{
			"name": "Instituto Tecnologico de Morelia",
			"degree": "Bioquemical Engineenering",
			"dates": "2001-2006",
			"city": "Morelia, Mexico",
			"major": "BA"

		}
	],
	"onlineCourses": [

	{
		"h3":"Online Classes",
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/ud304"
	},
	{
		"h3":"",
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/ud804"
	},
	{
		"h3":"",
		"title": "Object-Oriented Javascript",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/ud015"
	},
	{
		"h3":"",
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/ud882"
	},
	{
		"h3":"",
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/ud893"
	}

	]

}

var educationHTMLStrings = {
	"schools":[
		{
   			"name" : '<a href="#" class="subtitle">%data%</a>',
   			"degree" : '<div class=subtitle1>%data%</div>',
    		"dates" : '<div class="date-text">%data%</div>',
			"city" : '<div class="location-text">%data%</div>',
			"major" : '<em><br>Major: %data%</em>'
		}
	],
	"onlineCourses": [
		{
			"h3" :'<h3 class="onlineClasses">%data%</h3>',
			"title":'<a href="#" class="subtitle">%data%</a>',
			"school": '<div class="subtitle1">%data%</div>',
			"dates" : '<div class="date-text">%data%</div>',
			"url" : '<br><a href="#">%data%</a>'
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Merck Group",
			"title": "Sales Application Specialist",
			"location": "Mexico City",
			"dates": "August 2013-October 2014",
			"description": "<b>-M</b>aintain and increase market share at all assigned area, by building strong customer relationship and understanding the customer's needs and requirement.<br>"+
			"<b>-R</b>esponsible for fulfilling and forecasting market need accurately, and meeting assigned sales quota <br>"+
			"<b>-R</b>esponsible for new accounts development <br>"+
			"<b>-D</b>evelopment of clients such as: Colgate, Coca Cola, Beiersdorf AG, BASF, Henkel and Unilever"
		},
		{
			"employer": "Indumex",
			"title": "Technical Sales Executive",
			"location":"Mexico City",
			"dates": "January 2013-August 2013",
			"description": "<b>-M</b>aintain and increase market share in all Mexico <br>"+
			"<b>-R</b>esponsible for new accounts development <br>"+
			"<b>-T</b>echnical support and participation in customer product development for  subtitution of an existing ingredient or include tour ingredient in a new project, Participating in trials and testing"
		},
		{
			"employer": "Puratos",
			"title": "RD Manager",
			"location":"Mexico City",
			"dates": "January 2011-January 2012",
			"description": "<b>-R</b>esponsible for technical projects from experimental design to completion. Including testing, documentation and analytical procedures. <br>"+
			"<b>-D</b>irected activities for development of concepts for future needs of the market <br>"+
			"<b>-P</b>rovided technical services to customers, sales, marketing and divisions to ensure alignment with the business strategy<br>"+
			"<b>-P</b>articipated in cross regional innovation projects"
		},
		{
			"employer": "Bimbo Bakery Group",
			"title": "R&D Supervisor",
			"location":"Mexico City",
			"dates": "January 2008-May 2010",
			"description": "<b>-R</b>esearch, formulation and development of new products within time, cost and processing requirements<br>" +
"<b>-R</b>eformulated existing products <br>"+
"<b>-C</b>onducted and leaded physicochemical, sensorial and microbiological analyses of prototypes developed, as well as pilot and industrial test <br>"+
 "<b>-I</b>dentified and  implemented cost-saving solutions for the company<br>"+
 "<b>-P</b>rovided technical assistance to operation in both cost improvement projects and routine troubleshooting<br>"
		},

	]
}

var workHTMLStrings = {
	"job": [
	{
		"employer" : '<a href="#" class="subtitle">%data%</a>',
		"title" : ' <div class="subtitle1">%data%</div>',
 		"dates" : '<div class="date-text">%data%</div>',
		"location" : '<div class="location-text">%data%</div>',
		"description" : '<p class="text-justify"><br>%data%</p>'
	}
	]
}

var project = {
	"projects": [
		{
			"title": "About me",
			"dates": "2016",
			"description": "Project 0 for Udacity Nanodegree. Website in which I worked with basic structure of HTML and CSS",
			"images": [
				"",
				""
			]
		},
		{
			"title": "Portfolio Site",
			"dates": "2016",
			"description": "Project 1 for Udacity Nanodegree. Portfolio site in which I replicated the design given in HTML, CSS and bootstrap.<br>"+
			"This website is responsible, display images, descriptions and links to each of my portfolio projects and has some interactivity given by Javascript and Jquery.",
			"images": [
				"",
				""
			]
		},
		{
			"title": "Online Resume",
			"dates": "2016",
			"description": "Project 2 for Udacity Nanodegree. ",
			"images": [
				"images/vaneUdacity.jpg",
				""
			]
		}
	]
}

var projectsHTMLStrings = {
	"projects": [
		{
			"title" : '<a href="#" class="subtitle">%data%</a>',
 			"dates" : '<div class="date-text">%data%</div>',
			"description" : '<p class="text-justify"><br>%data%</p>',
			"images" : '<img src="%data%">'
		}
	]
}


var arrayObjectsInfo = [bio, education, work, project];
//console.log(arrayObjectsInfo)
var arrayObjectsStr = ["header", "education", "work", "project"];
 casa = arrayObjectsInfo[0].constructor.name;
//console.log(arrayObjectsInfo[0]);
var arrayObjectsHTML = [bioHTMLStrings, educationHTMLStrings, workHTMLStrings, projectsHTMLStrings]

function iterateArrays(arrInfo, arrHTML, arrStr){
	var howManyObjects = arrInfo.length;
	console.log(howManyObjects);
	for(var i = 0; i<howManyObjects; i++){
		//console.log("n")
		//console.log(arrayObjectsInfo[i] + arrayObjectsHTML[i] + arrStr[i])
		takeTheSubtituteInfo(arrayObjectsInfo[i], arrayObjectsHTML[i], arrStr[i]);
	}

}
iterateArrays(arrayObjectsInfo, arrayObjectsHTML, arrayObjectsStr);

var data = "%data%"
console.log("Hello Vane")














function substituteAndInsert(HTMLstring, info, classOrID){
	//console.log(HTMLstring);
	//console.log(info);

	var changeData= HTMLstring.replace("%data%", info);
	var appendData= $(classOrID).append(changeData);

}

function createNewStart (sectionName){
		var startHTML = "<div class='"+sectionName+"-entry'></div>"
		//console.log(startHTML);
		$("#"+sectionName).append(startHTML);

	}


function givemeTheKeys (object){
	//console.log(object);
	var keys = Object.keys(object);
	return keys;
}



function givemeTheNumberOfKeys (object){
	var objectKeys = Object.keys(object);
	return objectKeys.length;
}




function takeTheSubtituteInfo (objectInfo, objectHTML, objectName){
			console.log("si");
			console.log(objectInfo);
		var firstKeyObjectInfo = givemeTheKeys(objectInfo);
			//console.log(firstKeyObjectInfo);
			//var arrayObjectInfoKeys= givemeTheKeys(objectInfo[firstKeyObjectInfo[0]]);

			//console.log(arrayObjectInfoKeys);
		var n = "";
		//var secondKeyObjectInfo = givemeTheKeys(objectInfo[firstKeyObjectInfo[0]][0]);
			//console.log(secondKeyObjectInfo);
		var firstKeyObjectHTML = givemeTheKeys(objectHTML);
		//console.log(firstKeyObjectHTML);
		var className = "."+objectName+"-entry:last";
		//console.log(firstKeyObjectHTML[0].length);
		//console.log(firstKeyObjectHTML)
		//for (var h = 0; h<firstKeyObjectHTML.length; h++){

		//if(firstKeyObjectInfo.length>1){
			for(var h=0; h<firstKeyObjectInfo.length; h++){
			var arrayObjectInfoKeys=givemeTheKeys(objectInfo[firstKeyObjectInfo[h]])
			var secondKeyObjectInfo=givemeTheKeys(objectInfo[firstKeyObjectInfo[h]][0])
			for (var i = 0; i<arrayObjectInfoKeys.length; i++){
					//console.log(objectName)
				createNewStart(objectName);
				for(var j = 0; j<secondKeyObjectInfo.length; j++){
					var infoStr = objectInfo[firstKeyObjectInfo[h]][i][secondKeyObjectInfo[j]]
					var HTMLstr = objectHTML[firstKeyObjectHTML[h]][0][secondKeyObjectInfo[j]];
					if(Array.isArray(infoStr)){
						for(info in infoStr){
							console.log(infoStr[info]);
							substituteAndInsert(HTMLstr, infoStr[info], className);
						}
					}
					else{
					//console.log(infoStr);
							//console.log(HTMLstr + infoStr + className + "append")
						substituteAndInsert(HTMLstr, infoStr, className);
						}
				}
			}
			}


}

var arrayFooter = [bioHTMLStrings.contacts[0].email, bioHTMLStrings.contacts[0].twitter, bioHTMLStrings.contacts[0].github]
for(index in arrayFooter){
	console.log(bioHTMLStrings.contacts[0].email);
	substituteAndInsert(arrayFooter[index], "", footerContacts)
}

// I create this function for eliminate the h3 tags that are empty which basicaly are all the
var onlineClassesObject = $(".onlineClasses h3:first");
console.log(onlineClassesObject);

$(".onlineClasses").hide();
$(".onlineClasses:first").show();


var mq = window.matchMedia("(min-width: 750px)");
if(mq.matches){
	console.log("ja")
	//$("div").addClass("mediaQ")

}

