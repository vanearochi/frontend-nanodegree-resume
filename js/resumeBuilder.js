/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%"
console.log("Hello Vane")
 var bio = {
	"name" : "Vanessa Arochi",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "(650) 452 57 67",
		"email" : "vanearochi@gmail.com",
		"github": "vanearochi",
		"twitter": "vanearochi",
		"location": "San Francisco",
	},
	"welcomeMessage" : "bla bla",
	"skills" : [
		"project developing", "programming", "sales"
	],
	"bioPic" : "images/vaneUdacity.jpg"
}

	//$("#header").append(HTMLheaderName);
//Perhaps a function to create variables? how do I access to the Object property?
// for (info in bio){
// 	var keyNames = Object.keys(bio);
// 	console.log(keyNames);
// 	var (formatted+(keyNames[info])) = (HTML + keyNames[info]).replace(data, bio.keyNames[info]);
// 	console.log(formatted+keyNames[info]);
// }
console.log(bio.length);
console.log(bio.name.length);

var formattedName = HTMLheaderName.replace(data, bio.name);
var formattedRole = HTMLheaderRole.replace(data, bio.role);
var formattedPic = HTMLbioPic.replace(data,bio.bioPic);
	//console.log(formattedName);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


console.log();
var formattedMobile= HTMLmobile.replace(data, bio.contacts.mobile);
var formattedMail= HTMLemail.replace(data, bio.contacts.email);
var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
$("#topContacts").append(HTMLcontactGeneric);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedMail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(HTMLblog);
$("#topContacts").append(formattedLocation);

$("#header").append(HTMLwelcomeMsg);

// HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
//  HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
//  HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
//  HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
//  HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
//  HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
//  HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
// var HTMLbioPic = '<img src="%data%" class="biopic">';
// var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

// var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
// var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

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

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	console.log(bio.skills[0])
	for(skill in bio.skills){
	var formattedSkill= HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);

	}
}




var education = {
	"schools" : [
		{
			"name": "Instituto Tecnologico de Morelia",
			"city": "Morelia, Mexico",
			"degree": "BA",
			"majors": ["Bioquemical Engineenering"],
			"dates": 2001,
		}
	],
	"onlineCourses": [

	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/ud304"
	},
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/ud804"
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

for (job in work.jobs){
	var keysInJobs = Object.keys(work.jobs[job]);

		$("#workExperience").append(HTMLworkStart);

	console.log(work.jobs[job]);
	var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	console.log(formattedEmployer)
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	console.log(formattedTitle)
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	console.log(formattedEmployerTitle)
	var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
	var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[job].dates);
	var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkDescription);
}



var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2016",
			"description": "lakjsd",
			"images": [
				"",
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

$("#main").append(internationalizeButton);

var inName= function(name){
	console.log(name);
	var nameArray= name.split(" ");
	console.log(nameArray);
	var secondName = nameArray[1].toUpperCase();
	console.log(secondName);
	var nameInt= nameArray[0] + " " + secondName;
	console.log(nameInt);
	return nameInt;
}
inName("vane arochi")

projects.display = function(){
	for(index in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[index].titles);
		var formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[index].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[index].description);

		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);

		// if(projects.projects[index].images.length > 0){
		// 	for (image in projects.projects[index].images){
		// 		var formattedprojectImage =HTMLprojectImage.replace(data, projects[projects].images[image]);
		// 		$(".project-entry:last").append(formattedprojectImage)
		// 	}
		// }
		console.log(projects.projects[index]);
	}
	//$("#projects").append(projects)
}

projects.display();


//document.getElementById("education").style.backgroundColor = "black";
//  var name = "Vanessa Arochi"
//  var role = "Web Developer"

//  var formattedName = HTMLheaderName.replace("%data%", name);
// console.log(formattedName)
// $("#header").prepend(formattedName);

// var formattedRole= HTMLheaderRole.replace("%data%", role)
// $("#header").append(formattedRole);


// var skills = ["project developing", "programming", "sales"];

// var bio ={
// 	"name" : "Vanessa Arochi",
// 	"role" : "Web Developer",
// 	"contact info" : {
// 		"mobile": "6504525767",
// 		"email" : "vanearochi@gmail.com",
// 		"github": "vanearochi",
// 		"location": "San Francisco"
// 	},
// 	//"picture" : url("https://s3-us-west-2.amazonaws.com/vaneprojects/images/10401871_10152765869117308_3122385973265696941_n.jpg"),
// 	"skills" : [
// 		"project developing, programming, sales"
// 	],
// 	"bioPic": "images/fry.jpg"
// }

// $("#main").append(bio.name);

// var e


    // Don't delete this line!

document.getElementById("main").style.backgroundColor = "black";

education.display = function(){
	$("#education").append(HTMLschoolStart);

	var a = Object.keys(education);
	console.log(a[0])
	var	a[0]="bla";

	for(school in education.schools){

		// console.log(education.schools[school]);
		// var formatattededucation+
	}

	for(array in education){
		var objectsInArray = education[array].length;
		console.log(i);

		for(var i=0; i<=objectsInArray; i++){

		}

	}


}
education.display();