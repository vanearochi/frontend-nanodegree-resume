/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
 	"header":[
	{
		"name" : "Vanessa Arochi",
		"role" : "Web Developer",
		"bioPic" : "images/vaneUdacity.jpg",
		"welcomeMsg" : "bla bla",
		"skills" : [
		"project developing", "programming", "sales"
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
		"name" : '<div class="col-md-12 id="name"><h1>%data%</h1></div>',
		"role" : '<div class="col-md-12">%data%</div><hr>',
		"bioPic" : '<div class="col-md-12"><img src="%data%" class="biopic img-responsive"></div>',
		"welcomeMsg" : '<span class="welcome-message">%data%</span>',
		"skills" : '<li class="flex-item"><span class="">%data%</span></li>'
		}
	],

	"contacts" : [
		{
		"contactGeneric" : '<li class="flex-item"><span class="">%contact%</span><span class="">%data%</span></li>',
		"mobile" : '<li class="flex-item"><span class="fa fa-phone-square fa-2x"></span><span class="">%data%</span></li>',
 		"email" : '<li class="flex-item"><span class="fa fa-envelope fa-2x"></span><span class="">%data%</span></li>',
		"github" : '<li class="flex-item"><span class="fa fa-github-square fa-2x"></span><span class="">%data%</span></li>',
 		"twitter" : '<li class="flex-item"><span class="fa fa-twitter-square fa-2x"></span><span class="">%data%</span></li>',
		"location" : '<li class="flex-item"><span class="fa fa-map-marker fa-2x"></span><span class="">%data%</span></li>'

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

// "welcomeMessage" : "bla bla",
// 	"skills" : [
// 		"project developing", "programming", "sales"
// 	],
// 	]
	//$("#header").append(HTMLheaderName);
//Perhaps a function to create variables? how do I access to the Object property?
// for (info in bio){
// 	var keyNames = Object.keys(bio);
// 	console.log(keyNames);
// 	var (formatted+(keyNames[info])) = (HTML + keyNames[info]).replace(data, bio.keyNames[info]);
// 	console.log(formatted+keyNames[info]);
// }
//console.log(bio.length);
//console.log(bio.name.length);

// var formattedName = HTMLheaderName.replace(data, bio.name);
// var formattedRole = HTMLheaderRole.replace(data, bio.role);
// var formattedPic = HTMLbioPic.replace(data,bio.bioPic);
// 	//console.log(formattedName);
// $("#header").prepend(formattedPic);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// $("#topContacts").append(HTMLcontactGeneric);
// for(contact in bio.contacts){
// 	substituteAndInsert();
// }
// console.log();
// var formattedMobile= HTMLmobile.replace(data, bio.contacts.mobile);
// var formattedMail= HTMLemail.replace(data, bio.contacts.email);
// var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
// var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
// var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
// $("#topContacts").append(HTMLcontactGeneric);
// $("#topContacts").append(formattedMobile);
// $("#topContacts").append(formattedMail);
// $("#topContacts").append(formattedTwitter);
// $("#topContacts").append(formattedGithub);
// $("#topContacts").append(HTMLblog);
// $("#topContacts").append(formattedLocation);
//substituteAndInsert(HTMLstring, info, classOrID, instruction)
// $("#header").append(HTMLwelcomeMsg);

// HTMLcontactGeneric = '<li class="flex-item"><span class="">%contact%</span><span class="">%data%</span></li>';
//  HTMLmobile = '<li class="flex-item"><span class="">mobile</span><span class="">%data%</span></li>';
//  HTMLemail = '<li class="flex-item"><span class="">email</span><span class="">%data%</span></li>';
//  HTMLtwitter = '<li class="flex-item"><span class="">twitter</span><span class="">%data%</span></li>';
//  HTMLgithub = '<li class="flex-item"><span class="">github</span><span class="">%data%</span></li>';
//  HTMLblog = '<li class="flex-item"><span class="">blog</span><span class="">%data%</span></li>';
//  HTMLlocation = '<li class="flex-item"><span class="">location</span><span class="">%data%</span></li>';
// var HTMLbioPic = '<img src="%data%" class="biopic">';
// var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

// var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
// var HTMLskills = '<li class="flex-item"><span class="">%data%</span></li>';

// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';
// var HTMLworkDates = '<div class="date-text">%data%</div>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
// var HTMLworkDescription = '<p><br>%data%</p>';

// var HTMLprojectStart = '<div class="project-entry"></div>';
// var HTMLprojectTitle = '<a href="#">%data%</a>';
// var HTMLprojectDates = '<div class="date-text">%data%</div>';
// var HTMLprojectDescription = '<p><br>%data%</p>';
// var HTMLprojectImage = '<img src="%data%">';

// var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';

// var internationalizeButton = '<button>Internationalize</button>';
// var googleMap = '<div id="map"></div>';

// if(bio.skills.length>0){
// 	$("#header").append(HTMLskillsStart);
// 	console.log(bio.skills[0])
// 	for(skill in bio.skills){
// 	var formattedSkill= HTMLskills.replace("%data%", bio.skills[skill]);
// 	$("#skills").append(formattedSkill);

// 	}
// }








 var cla =[education];
 //console.log(cla[0])


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
// var schoolsHTMLArray= Object.keys(educationHTMLStrings.schools[0]);

// 	var schoolsArray= Object.keys(education.schools[0]);


// for(schoolInfo in education.schools){
// 	//console.log(education.schools[schoolInfo]);

// 	for(var i = 0; i<schoolsArray.length; i++){
// 		var HTMLstr = educationHTMLStrings.schools[0][schoolsHTMLArray[i]];
// 			console.log(HTMLstr);
// 		var infoStr = education.schools[schoolInfo][schoolsArray[i]];
// 			console.log(infoStr);

// 		substituteAndInsert(HTMLstr, infoStr, ".education-entry:last", "append")
// 	}


// 	//console.log(education.schools[schoolInfo]);
// 	//substituteAndInsert(educationHTMLStrings.schools[schoolInfo], education.schools[schoolInfo]  )
// }


// }

function givemeTheKeys (object){
	//console.log(object);
	var keys = Object.keys(object);
	return keys;
}

//givemeTheKeys(education);

function givemeTheNumberOfKeys (object){
	var objectKeys = Object.keys(object);
	return objectKeys.length;
}


/*if(givemeTheNumberOfKeys(objeto)>1){
	var arrKeys= givemeTheKeys(objeto);
	for(var j = 0; j<arrKeys.length; j++){
		takeTheSubtituteInfo(objeto, arrKeys[j]);
	}
}
else{
	takeTheSubtituteInfo()
}*/
//createNewStart("education");



//createNewStart("projects");

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
		//}
		// 	//else{
		// 		for (var i = 0; i<arrayObjectInfoKeys.length; i++){
		// 			//console.log(objectName)
		// 		createNewStart(objectName);
		// 		for(var j = 0; j<secondKeyObjectInfo.length; j++){
		// 			var infoStr = objectInfo[firstKeyObjectInfo[0]][i][secondKeyObjectInfo[j]]
		// 			//console.log(infoStr);
		// 			var HTMLstr = objectHTML[firstKeyObjectHTML[0]][0][secondKeyObjectInfo[j]];

		// 			//console.log(HTMLstr + infoStr + className + "append")
		// 			substituteAndInsert(HTMLstr, infoStr, className, "append");
		// 		}
		// 	}
		// }

}

var mq = window.matchMedia("(min-width: 750px)");
if(mq.matches){
	$
}
//q("education", educationHTMLStrings);
//givemeTheKeys("work");

//takeTheSubtituteInfo("work", workHTMLStrings);




// for (job in work.jobs){
// 	var keysInJobs = Object.keys(work.jobs[job]);

// 		$("#workExperience").append(HTMLworkStart);

// 	console.log(work.jobs[job]);
// 	var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// 	console.log(formattedEmployer)
// 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
// 	console.log(formattedTitle)
// 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
// 	console.log(formattedEmployerTitle)
// 	var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
// 	var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[job].dates);
// 	var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
// 	$(".work-entry:last").append(formattedEmployerTitle);
// 	$(".work-entry:last").append(formattedWorkLocation);
// 	$(".work-entry:last").append(formattedWorkDates);
// 	$(".work-entry:last").append(formattedWorkDescription);
// }



//

// $("#main").append(internationalizeButton);

// var inName= function(name){
// 	console.log(name);
// 	var nameArray= name.split(" ");
// 	console.log(nameArray);
// 	var secondName = nameArray[1].toUpperCase();
// 	console.log(secondName);
// 	var nameInt= nameArray[0] + " " + secondName;
// 	console.log(nameInt);
// 	return nameInt;
// }
// inName("vane arochi")

// projects.display = function(){
// 	for(index in projects.projects){
// 		$("#projects").append(HTMLprojectStart);
// 		var formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[index].titles);
// 		var formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[index].dates);
// 		var formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[index].description);

// 		$(".project-entry:last").append(formattedprojectTitle);
// 		$(".project-entry:last").append(formattedprojectDates);
// 		$(".project-entry:last").append(formattedprojectDescription);

// 		// if(projects.projects[index].images.length > 0){
// 		// 	for (image in projects.projects[index].images){
// 		// 		var formattedprojectImage =HTMLprojectImage.replace(data, projects[projects].images[image]);
// 		// 		$(".project-entry:last").append(formattedprojectImage)
// 		// 	}
// 		// }
// 		console.log(projects.projects[index]);
// 	}
// 	//$("#projects").append(projects)
// }

// projects.display();




// //document.getElementById("education").style.backgroundColor = "black";
// //  var name = "Vanessa Arochi"
// //  var role = "Web Developer"

// //  var formattedName = HTMLheaderName.replace("%data%", name);
// // console.log(formattedName)
// // $("#header").prepend(formattedName);

// // var formattedRole= HTMLheaderRole.replace("%data%", role)
// // $("#header").append(formattedRole);


// // var skills = ["project developing", "programming", "sales"];

// // var bio ={
// // 	"name" : "Vanessa Arochi",
// // 	"role" : "Web Developer",
// // 	"contact info" : {
// // 		"mobile": "6504525767",
// // 		"email" : "vanearochi@gmail.com",
// // 		"github": "vanearochi",
// // 		"location": "San Francisco"
// // 	},
// // 	//"picture" : url("https://s3-us-west-2.amazonaws.com/vaneprojects/images/10401871_10152765869117308_3122385973265696941_n.jpg"),
// // 	"skills" : [
// // 		"project developing, programming, sales"
// // 	],
// // 	"bioPic": "images/fry.jpg"
// // }

// // $("#main").append(bio.name);

// // var e


//     // Don't delete this line!

// document.getElementById("main").style.backgroundColor = "black";

// education.display = function(){
// 	$("#education").append(HTMLschoolStart);

// 	var a = Object.keys(education);
// 	console.log(a[0])
// 	var	a[0]="bla";

// 	for(school in education.schools){

// 		// console.log(education.schools[school]);
// 		// var formatattededucation+
// 	}

// 	for(array in education){
// 		var objectsInArray = education[array].length;
// 		console.log(i);

// 		for(var i=0; i<=objectsInArray; i++){

// 		}

// 	}


// }
// education.display();