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
			"welcomeMsg": "blabla"
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
		"name" : '<div class="col-md-12 " id="name"><h1 class="header">%data%</h1></div>',
		"role" : '<div class="col-md-12 role ">&nbsp %data%</div><hr>',
		}
	],
	"message":[
		{
			"welcomeMsg" : '<span class="welcome-message">%data%</span>',
		}
	],
	"skills":[
		{
			"skillsTitle" :'<div class="skills row text-uppercase text-center lead bg-primary">%data%</div>',
			"skills" : '<div class="flex-grow  skills ">%data%</div>'
		}
	],
	"contacts" : [
		{
		"contactGeneric" : '<ul id="contacts" class="lead text-center text-uppercase bg-primary">Contact me</ul>',
		"mobile" : '<a href="tel:555-555-5555"><li class="flex-item fa fa-phone-square fa-2x">&nbsp %data%</li></a>',
 		"email" : '<a href="mailto:vanearochi@gmail.com" class=""><li class="flex-item fa fa-envelope fa-2x">&nbsp %data%</li></a>',
		"github" : '<a href="https://github.com/vanearochi""><li class="flex-item fa fa-github-square fa-2x">&nbsp %data%</li></a>',
 		"twitter" : '<a href="http://twitter.com/VaneArochi"><li class="flex-item fa fa-twitter-square fa-2x">&nbsp %data%</li></a>',
		"location" : '<a href=""><li class="flex-item fa fa-map-marker fa-2x">&nbsp %data%</li></a>'

 //HTMLblog = '<li class="flex-item"><span class="">blog</span><span class="">%data%</span></li>';
 		}
	]
}

 var education = {
	"schools" : [
		{
			"name": "Instituto Tecnologico de Morelia",
			"degree": "Bioquemical Engineenering",
			"dates": 2001,
			"city": "Morelia, Mexico",
			"major": "BA"

		},
		{
			"name": "itm",
			"degree": "Bioquemical Engineenering",
			"dates": 2001,
			"city": "Morelia, Mexico",
			"major": "BA"
		}
	],
	"onlineCourses": [

	{
		"h3":"",
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
	}

	]

}

var educationHTMLStrings = {
	"schools":[
		{
   			 "name" : '<a href="#">%data%',
   			 "degree" : ' -- %data%</a>',
    		"dates" : '<div class="date-text">%data%</div>',
			"city" : '<div class="location-text">%data%</div>',
			"major" : '<em><br>Major: %data%</em>'
		}
	],
	"onlineCourses": [
		{
			"h3" :'<h3>Online Classes</h3>',
			"title":'<a href="#">%data%',
			"school": ' - %data%</a>',
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
			"location": "sf",
			"dates": "1900",
			"description": "alksdkldhja laksjdadsjl "
		},
		{
			"employer": "Bimbo",
			"title": "Sales Application Specialist",
			"location":"sf",
			"dates": "1825",
			"description": "jkhkhkh"
		},
		{
			"employer": "Merck Group",
			"title": "Sales Application Specialist",
			"location":"sf",
			"dates": "5413",
			"description": "oihlhlkjhl"
		},
		{
			"employer": "Merck Group",
			"title": "Sales Application Specialist",
			"location":"sf",
			"dates": "5452",
			"description": "jhkhjkhkh"
		},

	]
}

var workHTMLStrings = {
	"job": [
	{
		"employer" : '<a href="#">%data%',
	"title" : ' - %data%</a>',
 	"dates" : '<div class="date-text">%data%</div>',
	"location" : '<div class="location-text">%data%</div>',
	"description" : '<p><br>%data%</p>'
	}
	]
}

var project = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2016",
			"description": "lakjsd",
			"images": [
				"images/vaneUdacity.jpg",
				""
			]
		},
		{
			"title": "Sample Project 1",
			"dates": "2016",
			"description": "dasd",
			"images": [
				"",
				""
			]
		},
		{
			"title": "Sample Project 1",
			"dates": "2016",
			"description": "asdsad",
			"images": [
				"",
				""
			]
		}
	]
}

var projectsHTMLStrings = {
	"projects": [
		{
			"title" : '<a href="#">%data%</a>',
 			"dates" : '<div class="date-text">%data%</div>',
			"description" : '<p><br>%data%</p>',
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














function substituteAndInsert(HTMLstring, info, classOrID, instruction){
	console.log(HTMLstring);
	console.log(info);

	var changeData= HTMLstring.replace("%data%", info);
	var appendData= $(classOrID).append(changeData);

}

function createNewStart (sectionName ){
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
							substituteAndInsert(HTMLstr, infoStr[info], className, "append");
						}
					}
					else{
					//console.log(infoStr);
							//console.log(HTMLstr + infoStr + className + "append")
						substituteAndInsert(HTMLstr, infoStr, className, "append");
						}
				}
			}
			}


}

var mq = window.matchMedia("(max-width: 750px)");
if(mq.matches){
	console.log("ja")
	$("li").removeClass("fa-2x")
}
