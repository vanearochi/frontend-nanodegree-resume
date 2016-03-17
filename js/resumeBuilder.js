/**
This is empty on purpose! Your code to build the resume will go here.
 */

$(document).ready(function() {
/**  information and the HTML strings to be appended to each big section so can apply functions and don't repeat the code for the resume creation*/

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
			"city": "Morelia",
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
			"major" : '<em>Major: %data%</em>'
		}
	],
	"onlineCourses": [
		{
			"h3" :'<h3 class="onlineClasses">%data%</h3>',
			"title":'<a href="#" class="subtitle">%data%</a>',
			"school": '<div class="subtitle1">%data%</div>',
			"dates" : '<div class="date-text">%data%</div>',
			"url" : '<a href="#" class="schoolLink">%data%</a>'
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
			"location":"Hidalgo",
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
			"description": "<b>-P</b>roject 0 for Udacity Nanodegree.<br>"+
			"<b>-W</b>ebsite in which I worked with basic structure of HTML and CSS",
			"imageContainer":"",
			"images": [
				"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Screen+Shot+2016-01-15+at+3.png",
				"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Screen+Shot+2016-01-15+at+3.png",
				"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Screen+Shot+2016-01-15+at+3.png"
			]
		},
		{
			"title": "Portfolio Site",
			"dates": "2016",
			"description": "<b>-P</b>roject 1 for Udacity Nanodegree. Portfolio site in which I replicated the design given in HTML, CSS and bootstrap.<br>"+
			"-<b>T</b>his website is responsible, display images, descriptions and links to each of my portfolio projects and has some interactivity given by Javascript and Jquery.",
			"imageContainer":"",
			"images": [
				"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.32.13+PM.png",
				""
			]
		},
		{
			"title": "Online Resume",
			"dates": "2016",
			"description": "<b>-P</b>roject 2 for Udacity Nanodegree. ",
			"imageContainer":"",
			"images": [
				"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.36.03+PM.png",
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
			"imageContainer": '<div class="row image-container">',
			"images" : '<div class="col-md-4 project-images"><img src="%data%" class="img-responsive"></div></div>'
		}
	]
}

var googleMap = '<div id="map"></div>';

var actualLocation = bio.contacts[0].location;
//takeTheLocationInfo(actualLocation)
console.log(actualLocation)

/**Array with that contains the Objects that contain the data that fills the HTML strings*/
var arrayObjectsInfo = [bio, education, work, project];

//console.log(arrayObjectsInfo)
/**Array that contain the name of the id in which the HTMLstrings will be appended*/
var arrayObjectsStr = ["header", "education", "work", "project"];
 casa = arrayObjectsInfo[0].constructor.name;
//console.log(arrayObjectsInfo[0]);
/**Array that contain the Objects that contain the HTML strings that will fill the resume page*/
var arrayObjectsHTML = [bioHTMLStrings, educationHTMLStrings, workHTMLStrings, projectsHTMLStrings]


/**
 * Function that iterates over arrays and calls getTheInfoForTheSection function

 * @param {array} arrInfo - Array that contains the Object that have the info to fill the page
 							(arrayObjectsInfo)
 * @param {array} arrHTML -	Array that contains the Object that have the HTML strings that will give
 							the HTML structure of the page(arrayObjectsHTML)
 * @param {array} arrStr  - Array that contains the string id of each big sections
 */
function iterateArrays(arrInfo, arrHTML, arrStr){
	var howManyObjects = arrInfo.length;
	//console.log(howManyObjects);
	for(var i = 0; i<howManyObjects; i++){
		//console.log("n")
		//console.log(arrayObjectsInfo[i] + arrayObjectsHTML[i] + arrStr[i])
		getTheInfoForTheSection(arrayObjectsInfo[i], arrayObjectsHTML[i], arrStr[i]);
	}

}

/** @function getTheInfoForTheSection*/
/**
 * Function that iterate over Objects getting data and HTML strings of them that will be appended to their corresponding big sections.
 * Creates the jQuerySelector variable.
 * Calls to createNewSection & getTheInfoForTheSection
 * @param {object} objectInfo - Object that contains the info that will fill the resume
 							    (bio, education, work or project)
 * @param {object} objectHTML - Object that contains the HTML strings that will give the HTML structure of the resume
                                (bioHTMLStrings, educationHTMLStrings, workHTMLStrings or projectsHTMLStrings)
 * @param {string} idSectionName - id of each big section of the page
 								   (header, work, project or education)
 */
function getTheInfoForTheSection (objectInfo, objectHTML, idSectionName){
		console.log(idSectionName);
		/**
		 * A variable called 'topLevelObjectInfoKeys'
		 * @var {array} topLevelObjectInfoKeys */
		var topLevelObjectInfoKeys = givemeTheKeys(objectInfo);
		console.log(topLevelObjectInfoKeys);
		var topLevelObjectHTMLKeys = givemeTheKeys(objectHTML);
		console.log(topLevelObjectHTMLKeys)
		var jQuerySelector = "."+idSectionName+"-entry:last";

		for(var h=0; h<topLevelObjectInfoKeys.length; h++){
				/**
				 * This array will give us the number of subsections inside each big section
				 * @var {array} indexOfArrOfTopLevelObjInfoKey
				*/
				var indexOfArrOfTopLevelObjInfoKey=givemeTheKeys(objectInfo[topLevelObjectInfoKeys[h]])
					console.log(indexOfArrOfTopLevelObjInfoKey)
				/**
				 * A variable
				 * @var {array} keysOfTheObjInArrOfTopLevelKey
				 *
				*/
				var keysOfTheObjInArrOfTopLevelKey=givemeTheKeys(objectInfo[topLevelObjectInfoKeys[h]][0])
					console.log(keysOfTheObjInArrOfTopLevelKey)
				/**
				 *This loop will create a new subsection on the corresponding big section depending on the number of indexes on the indexOfArrOfTopLevelObjInfoKey
				*/
				for (var i = 0; i<indexOfArrOfTopLevelObjInfoKey.length; i++){
						createNewSection(idSectionName);
				/**In this loop we will get the HTML string and the data that corresponds to it*/
						for(var j = 0; j<keysOfTheObjInArrOfTopLevelKey.length; j++){
								var infoStr = objectInfo[topLevelObjectInfoKeys[h]][i][keysOfTheObjInArrOfTopLevelKey[j]]
								var HTMLstr = objectHTML[topLevelObjectHTMLKeys[h]][0][keysOfTheObjInArrOfTopLevelKey[j]];
								/**
								 * If infoStr is an Array Then we iterate over it and get each element on it and place it in its corrssponding
								   HTML string(HTMLstr)
								*/
								if(Array.isArray(infoStr)){
										for(info in infoStr){
												substituteAndInsert(HTMLstr, infoStr[info], jQuerySelector);
										}
								}
								else{
										substituteAndInsert(HTMLstr, infoStr, jQuerySelector);
								}
						}
				}
		}


}

/** @function substituteAndInsert
 * Function that will replace a piece of the HTML string with a new string passed as an argument and will append it to his corresponding  big section
 * @param {string} HTMLstring HTML string that will be appended to a big section
 * @param {string} info       String with the information that will be inserted on the HTMLstring
 * @param {string} classOrID  String with the class or id name that will be used as a jQuery selector to appen the HTMLstring
*/
function substituteAndInsert(HTMLstring, info, classOrID){
		var regexImg = /project-images/;
		var regexLoc = /location-text/;
		var changeData;
		var appendData;

		/**As each image have the same name we will need to specify to append it to the last one.*/
		if(HTMLstring.match(regexImg)){
				changeData= HTMLstring.replace("%data%", info);
				appendData= $(".image-container:last").append(changeData);
		}
		/** This condition checks if the HTMLstring has location-text on it, if it does it will pass the info to takeLocationInfo for the markers map */
		else if(HTMLstring.match(regexLoc)){
				takeTheLocationInfo(info);
				changeData= HTMLstring.replace("%data%", info);
				appendData= $(classOrID).append(changeData);
		}
		else{
				changeData= HTMLstring.replace("%data%", info);
				appendData= $(classOrID).append(changeData);
		}



}

/** @function createNewSection
 * Function that creates a new entry for a big section (header, work, project or education)
 * @param {string} sectionName the name of the big section in which the new entry is going to be appended
                               this name is used to create the new entry's class name
*/
function createNewSection (sectionName){
		var startHTML = "<div class='"+sectionName+"-entry'></div>";
		$("#"+sectionName).append(startHTML);

	}

/** @function givemeTheKeys
 * Function that gives the keys of an Object
 * @param {object} object Object of which we would like to obtain the keys of
*/
function givemeTheKeys (object){
	//console.log(object);
	var keys = Object.keys(object);
	return keys;
}


/**Function that gives the number of keys of a particular Object*/
function givemeTheNumberOfKeys (object){
		var objectKeys = Object.keys(object);
		return objectKeys.length;
}


/**Array that contain the value of media contact of the Object bio*/
var arrayFooter = [bioHTMLStrings.contacts[0].email, bioHTMLStrings.contacts[0].twitter, bioHTMLStrings.contacts[0].github]

/**Loop that iterate over the arrayFooter and calls substituteAndInsert function for each value*/
for(index in arrayFooter){
		substituteAndInsert(arrayFooter[index], "", footerContacts)
}

/**As the values that contain arrayFooter are the same used for the contact subsection we need to add a class for the elements
in the footer section to diferenciate them and target them for style*/
var footerElement =$("#footerContacts li.fa");
footerElement.addClass("footerIcons");

// The code below hide the h3 tags that are empty on the education subsection:OnlineClasses*/
$(".onlineClasses").hide();
$(".onlineClasses:first").show();


var mq = window.matchMedia("(min-width: 750px)");
if(mq.matches){

}

/**Map section*/
var map;

/** @function createNewMap
 * Function that creates a new google map
 * @param {object} json Object with the information of a certain location
 */
var createNewMap = function(json){
		var location=json.results[0].geometry.location;
	 	map = new google.maps.Map(mapDiv, {
      			center: location,
      			zoom: 3
    	});

		addMarker(location, map);
}

/** @function addMArker
 * @param {object} location object that contains the latitude and longitude of a certain location
 * @param {object} map      object that contains the information of a google map
Function that creates the Marker for the map with the locations available in the resume*/
function addMarker(location, map) {
  		var marker = new google.maps.Marker({
    			position: location,
    			map: map
  		});
}

$.ajax({
 		url: "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area:SanFrancisco&key=AIzaSyDTeOjNaYrSL42NWlEtjY7UsKnf-bazI8Y",
 		success: createNewMap
 })

/** @function takeTheLocationInfo
  * Function that request an ajax to get a json with the information of a location given as a parameter
  * @param {string} location String
*/
function takeTheLocationInfo(location){
		$.ajax({
				url: "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area:"+location+"&key=AIzaSyDTeOjNaYrSL42NWlEtjY7UsKnf-bazI8Y",
				success: parseMarker
		})
}

/** @function parseMarker
 * Function that get the coordinates of the location from the json passed as argument
 * @param {object} json object with the information of a certain location
*/
function parseMarker(json){
		var locationCord=json.results[0].geometry.location;
		addMarker(locationCord, map);

}


iterateArrays(arrayObjectsInfo, arrayObjectsHTML, arrayObjectsStr);

});
