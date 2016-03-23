"use strict"
/**

 */

$(document).ready(function() {
/** All data and HTML strings are inside objects so I could use functions and don't repeat the code thinking on what I learned on the javascript basic course: don't repeat yourself*/
		var bioHTMLStrings = {



							"name": '<div class="col-md-12 text-uppercase text-center" id="name"><h1 class="header">%data%</h1></div>',
							"role": '<div class="col-md-12 text-center role">&nbsp %data%</div><hr>',
							"contacts":{
									"mobile": '<ul><a href="tel:555-555-5555"><li class="flex-item fa fa-phone-square">&nbsp <span class= "textContact">%data%</span></li></a>',
							 		"email": '<a href="mailto:vanearochi@gmail.com" ><li class="flex-item fa fa-envelope">&nbsp <span class="textContact">%data%</span></li></a>',
									"github": '<a href="https://github.com/vanearochi"><li class="flex-item fa fa-github-square">&nbsp <span class="textContact">%data%</span></li></a>',
							 		"twitter": '<a href="http://twitter.com/VaneArochi" ><li class="flex-item fa fa-twitter-square">&nbsp <span class="textContact">%data%</span></li></a>',
									"location": '<a href=""><li class="flex-item fa fa-map-marker">&nbsp <span class="textContact"> %data%</span></li></a></ul>',
							},
							"welcomeMessage": '<span class="welcome-message">%data%</span>',
							"skills": '<div class="flex-grow  skills textSkills ">%data%</div>',
							"biopic": '<div class="col-md-12 "><img src="%data%" class="biopic img-responsive img-circle"></div>'

						};


 		var bio = {

		 					"name": "Vanessa Arochi",
							"role": "Web Developer",
							"contacts":{
									"mobile": "(650) 452 57 67",
									"email": "vanearochi@gmail.com",
									"github": "vanearochi",
									"twitter": "vanearochi",
									"location": "San Francisco",
							},
							"welcomeMessage": "Hello my name is Vanessa Arochi",
							"skills": [
				 					"Project Managing", "Programming", "Sales", "Product Developing"
				 			],
						    "biopic": "https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/vaneUdacityp2.jpg",
							display: function(){

									var keysInfoBio= givemeTheKeys(bio);
									//console.log(keys);
									var keysHTMLBio = givemeTheKeys(bioHTMLStrings);
									//console.log(keys1);


									keysHTMLBio.forEach(function(val){
										createNewSection("header");
										var HTMLstring = bioHTMLStrings[val];

											//createNewSection("header");
												if(val==="contacts"){
														$.each(bio[val], function(key, value){
															//console.log(key, value);
															var HTMLstringContacts= HTMLstring[key];
															//console.log(HTMLstringContacts)
															substituteAndInsert(HTMLstringContacts, value, ".header-entry:last");
														});
														var contactGeneric= '<div id="contacts" class=" text-center text-uppercase bg-primary">Contact me %data%</div>';
														substituteAndInsert(contactGeneric, " ", ".header-entry:first" )
												}
												else if(val==="skills"){

													bio[val].forEach(function(value){
															substituteAndInsert(HTMLstring, value, ".header-entry:last");
													});
													//console.log(bio[val][0]);

												}
												else if(val==="biopic"){
													//console.log("pic")
													substituteAndInsert(bioHTMLStrings[val], bio[val], "#header");
												}
										else {
											substituteAndInsert(bioHTMLStrings[val], bio[val], ".header-entry:last");
										}



									});
									//substituteAndInsert(bioHTMLStrings[val], bio[val], ".header-entry:last")

									//"contactGeneric": '<div id="contacts" class=" text-center text-uppercase bg-primary">Contact me</div> <ul>',
									//
							}




		};

		bio.display();

		var educationHTMLStrings = {

				"schools":
						{
				   			"name": '<a href="#" class="subtitle">%data%</a>',
				   			"location": '<div class="location-text">%data%</div>',
				   			"degree": '<div class=subtitle1>%data%</div>',
				    		"majors": '<em>Major: %data%</em>',
				    		"dates": '<div class="date-text">%data%</div>',
				    		"url" : '<a href="#" class="schoolLink">%data%</a>'


						}
				,
				"onlineCourses":
						{
							//"h3":'<h3 class="onlineClasses">%data%</h3>',
							"title":'<a href="#" class="subtitle">%data%</a>',
							"school": '<div class="subtitle1">%data%</div>',
							"dates": '<div class="date-text">%data%</div>',
							"url": '<a href="#" class="schoolLink">%data%</a>'
						}

		};

		var education = {

				"schools" : [
						{
							"name": "Instituto Tecnologico de Morelia",
							"location": "Morelia",
							"degree": "Bioquemical Engineenering",
							"majors": "[BA]",
							"dates": "2001-2006",
							"url": ""
						}
				],
				"onlineCourses": [
						{
							"title": "Intro to HTML and CSS",
							"school": "Udacity",
							"date": "2016",
							"url": "https://www.udacity.com/course/ud304"
						},
						{
							"title": "Javascript Basics",
							"school": "Udacity",
							"dates": 2016,
							"url": "https://www.udacity.com/course/ud804"
						},
						{
							"title": "Object-Oriented Javascript",
							"school": "Udacity",
							"dates": 2016,
							"url": "https://www.udacity.com/course/ud015"
						},
						{
							"title": "Responsive Images",
							"school": "Udacity",
							"dates": 2016,
							"url": "https://www.udacity.com/course/ud882"
						},
						{
							"title": "Responsive Web Design Fundamentals",
							"school": "Udacity",
							"dates": 2016,
							"url": "https://www.udacity.com/course/ud893"
						}
				],

				display: function(){

						var subsectionKeys = givemeTheKeys(educationHTMLStrings);
						var keysInSubsectionSchools = givemeTheKeys(educationHTMLStrings[subsectionKeys[0]]);
						var keysInSubsectionOnline =  givemeTheKeys(educationHTMLStrings[subsectionKeys[1]]);

						education.schools.forEach(function(val){
								//console.log(val["name"])
								createNewSection("education");
								keysInSubsectionSchools.forEach(function(value){
									var HTMLEduStr = educationHTMLStrings.schools[value];
									var infoEdu = val[value];
									//console.log(infoEdu);
									substituteAndInsert(HTMLEduStr, infoEdu, ".education-entry:last");
								});
								// var schoolInfo= education.schools[0]
								// console.log(schoolInfo);
								// substituteAndInsert(bioHTMLStrings[val], bio[val], ".header-entry:last")


						});

						createNewSection("education");
						var onlineTitleHTML = '<h3 class="onlineClasses">%data%</h3>';
						substituteAndInsert(onlineTitleHTML, "Online Classes", ".education-entry:last");

								education.onlineCourses.forEach(function(val){
										 	keysInSubsectionOnline.forEach(function(value){
										 		var HTMLOnlineStr= educationHTMLStrings.onlineCourses[value];
										 		//console.log(HTMLOnlineStr)
										 		var infoOnline = val[value];
										 		//console.log(infoOnline)
										 		substituteAndInsert(HTMLOnlineStr, infoOnline, ".education-entry:last");
								 });
						 });
				 }

		}

		//education.display();

		var workHTMLStrings = {


							"employer" : '<a href="#" class="subtitle">%data%</a>',
							"title" : ' <div class="subtitle1">%data%</div>',
					 		"location" : '<div class="location-text">%data%</div>',
					 		"dates" : '<div class="date-text">%data%</div>',
							"description" : '<p class="text-justify"><br>%data%</p>'


		};

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
							"location": "Mexico City",
							"dates": "January 2013-August 2013",
							"description": "<b>-M</b>aintain and increase market share in all Mexico <br>"+
							"<b>-R</b>esponsible for new accounts development <br>"+
							"<b>-T</b>echnical support and participation in customer product development for  subtitution of an existing ingredient or include tour ingredient in a new project, Participating in trials and testing"
						},
						{
							"employer": "Puratos",
							"title": "RD Manager",
							"location": "Hidalgo",
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

					],


					display: function(){

							var keysInSubsectionjobs  = givemeTheKeys(workHTMLStrings);
							//console.log(keysInSubsectionjobs )
							//var keysInSubsectionjobs = givemeTheKeys(educationHTMLStrings[subsectionKeys[0]]);
							//var keysInSubsectionOnline =  givemeTheKeys(educationHTMLStrings[subsectionKeys[1]]);

							work.jobs.forEach(function(val){
							//console.log(val)
									createNewSection("work")
									keysInSubsectionjobs.forEach(function(value){
										//console.log(val[value])
										var HTMLWorkStr = workHTMLStrings[value]
										//console.log(HTMLWorkStr)
										//educationHTMLStrings.schools[value]
										var infoWork = val[value];
										//console.log(infoWork);
										substituteAndInsert(HTMLWorkStr, infoWork, ".work-entry:last")
									 })
									// var schoolInfo= education.schools[0]
									// console.log(schoolInfo);
									// substituteAndInsert(bioHTMLStrings[val], bio[val], ".header-entry:last")


							})

					 }


		};

		work.display();

		var projectsHTMLStrings = {


							"title": '<a href="#" class="subtitle">%data%</a>',
				 			"dates": '<div class="date-text">%data%</div>',
							"description": '<p class="text-justify"><br>%data%</p>',
							//"imageContainer": '',
							"images": '<div class="col-md-4 project-images"><img src="%data%" class="img-responsive"></div>'

		};


		var project = {

					"projects": [
						{
							"title": "About me",
							"dates": "2016",
							"description": "<b>-P</b>roject 0 for Udacity Nanodegree.<br>"+
							"<b>-W</b>ebsite in which I worked with basic structure of HTML and CSS",
							"images": [
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Screen+Shot+2016-01-15+at+3.png"
							]
						},
						{
							"title": "Portfolio Site",
							"dates": "2016",
							"description": "<b>-P</b>roject 1 for Udacity Nanodegree. Portfolio site in which I replicated the design given in HTML, CSS and bootstrap.<br>"+
							"-<b>T</b>his website is responsible, display images, descriptions and links to each of my portfolio projects and has some interactivity given by Javascript and Jquery.",
							"images": [
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.32.13+PM.png",
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.32.13+PM.png"
							]
						},
						{
							"title": "Online Resume",
							"dates": "2016",
							"description": "<b>-P</b>roject 2 for Udacity Nanodegree. ",
							"images": [
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.36.03+PM.png",
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.36.03+PM.png",
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.36.03+PM.png"
							]
						}
					],
					display: function(){

							var keysInSubsectionProjects  = givemeTheKeys(projectsHTMLStrings);
							console.log(keysInSubsectionProjects);
							//var keysInSubsectionjobs = givemeTheKeys(educationHTMLStrings[subsectionKeys[0]]);
							//var keysInSubsectionOnline =  givemeTheKeys(educationHTMLStrings[subsectionKeys[1]]);

							project.projects.forEach(function(val){
									//console.log(val)
							 		createNewSection("project")
							 		keysInSubsectionProjects.forEach(function(value){
							 			var infoProjects= val[value];
							 			//console.log(infoProjects)
							 			var HTMLProjectStr = projectsHTMLStrings[value]
							 				//console.log(HTMLProjectStr)
							 			if(Array.isArray(val[value])){
							 				var imgContainerHTML = '<div class="row image-container">%data%</div>'
							 				substituteAndInsert(imgContainerHTML, " ", ".project-entry:last")
							 					val[value].forEach(function(img){
							 					//console.log(img)
							 							substituteAndInsert(HTMLProjectStr, img, ".image-container:last")
							 					})
							 			}
							 			else{
							 				console.log("bla")
							 				substituteAndInsert(HTMLProjectStr, infoProjects, ".project-entry:last")
							 			}
							 			//console.log(val[value])
							// 			var HTMLWorkStr = workHTMLStrings[value]
							// 			//console.log(HTMLWorkStr)
							// 			//educationHTMLStrings.schools[value]
							// 			var infoWork = val[value];
							// 			console.log(infoWork);
							// 			substituteAndInsert(HTMLWorkStr, infoWork, ".work-entry:last")
							})
							// 		// var schoolInfo= education.schools[0]
							// 		// console.log(schoolInfo);
							// 		// substituteAndInsert(bioHTMLStrings[val], bio[val], ".header-entry:last")


									 })

					 }



		};
project.display();


		var googleMap = '<div id="map"></div>';

		/**Array with Objects that contain the data that fills the HTML strings*/
		var arrayObjectsInfo = [bio, education, work, project];

		/**Array with name of the id in which the HTMLstrings will be appended*/
		var arrayObjectsStr = ["header", "education", "work", "project"];

		/**Array with HTML strings templates that will fill the resume page*/
		var arrayObjectsHTML = [bioHTMLStrings, educationHTMLStrings, workHTMLStrings, projectsHTMLStrings];


		/** @function iterateArrays
		 * Iterates over arrays and calls getTheInfoForTheSection function
		 * @param {array} arrInfo - Array that contains the Object that have the info to fill the page (arrayObjectsInfo)
		 * @param {array} arrHTML -	Array that contains the Object that have the HTML strings templates (arrayObjectsHTML)
		 * @param {array} arrStr  - Array that contains the string id of each parent sections
		 */
		function iterateArrays(arrInfo, arrHTML, arrStr) {

				var howManyObjects = arrInfo.length;

				for (var i = 0; i<howManyObjects; i++) {

						getTheInfoForTheSection(arrayObjectsInfo[i], arrayObjectsHTML[i], arrStr[i]);

				};

		}


		/** @function getTheInfoForTheSection
		 * Iterate over Objects getting data and HTML strings of them that will be appended to their corresponding parent sections.
		 * Creates the selector variable.
		 * Calls to createNewSection & getTheInfoForTheSection
		 * @param {object} objectInfo - Object that contains the info that will fill the resume
		 							    (bio, education, work or project)
		 * @param {object} objectHTML - Object that contains the HTML strings that will give the HTML structure of the resume
		                                (bioHTMLStrings, educationHTMLStrings, workHTMLStrings or projectsHTMLStrings)
		 * @param {string} idSectionName - id of each parent section of the page
		 								   (header, work, project or education)
		 */
		function getTheInfoForTheSection(objectInfo, objectHTML, idSectionName) {

				var subsectionInfoKeys = givemeTheKeys(objectInfo);
				var subsectionHTMLKeys = givemeTheKeys(objectHTML);
				var selector = "." + idSectionName + "-entry:last";

				for (var h=0; h<subsectionInfoKeys.length; h++) {

						/**
						 * This array will give us the number of subsections inside each parent section
						 * @var {array} indexSubsectionArr
						*/
						var indexSubsectionArr = givemeTheKeys(objectInfo[subsectionInfoKeys[h]]);
						var dataInSubsectionInfo = givemeTheKeys(objectInfo[subsectionInfoKeys[h]][0]);
						///console.log()
						/**
						 *This loop will create a new subsection on the corresponding parent section depending on the number of indexes on the indexSubsectionArr
						*/
						for (var i = 0; i<indexSubsectionArr.length; i++) {

								createNewSection(idSectionName);

						/**In this loop we will get the HTML string and the data that corresponds to it*/
								for (var j = 0; j<dataInSubsectionInfo.length; j++) {

										var infoStr = objectInfo[subsectionInfoKeys[h]][i][dataInSubsectionInfo[j]];
										var HTMLstr = objectHTML[subsectionHTMLKeys[h]][0][dataInSubsectionInfo[j]];
											console.log(infoStr)
											console.log(HTMLstr)
											console.log(objectHTML[subsectionHTMLKeys[h]][0])
										/**
										 * If infoStr is an Array Then we iterate over it and get each element on it and place it in its corrssponding
										   HTML string(HTMLstr)
										*/
										if (Array.isArray(infoStr)) {
												for (info in infoStr) {

														substituteAndInsert(HTMLstr, infoStr[info], selector);

												};
										}

										else {

												substituteAndInsert(HTMLstr, infoStr, selector);

										}
								};
						};
				};

		}

		/** @function substituteAndInsert
		 * Replace a piece of the HTML string with a new string passed as an argument and will append it to his corresponding  parent section
		 * @param {string} HTMLstring HTML string that will be appended to a parent section
		 * @param {string} info       String with the information that will be inserted on the HTMLstring
		 * @param {string} classOrID  selector for element where the complete htm will be inse name that will be used as a css selector to appen the HTMLstring
		*/
		function substituteAndInsert(HTMLstring, info, classOrID) {
					//console.log(HTMLstring)
					 //console.log(info)
					 //console.log(classOrID)
				var regexImg = /project-images/;
				var regexLoc = /location-text/;
				var regexbiopic= /biopic/;
				var changeData;
				var appendData;

				/**As each image have the same name we will need an specific selector to append it to the last one.*/
				// if (HTMLstring.match(regexImg)) {

				// 		changeData = HTMLstring.replace("%data%", info);
				// 		appendData = $(".image-container:last").append(changeData);

				// }

				// * This condition checks if the HTMLstring has location-text on it, if it does it will pass the info to takeLocationInfo for the markers map
				// else if (HTMLstring.match(regexLoc)) {

				// 		takeTheLocationInfo(info);
				// 		changeData = HTMLstring.replace("%data%", info);
				// 		appendData = $(classOrID).append(changeData);

				// }
				if(HTMLstring.match(regexbiopic)){
						console.log("2biopic")
						changeData = HTMLstring.replace("%data%", info);
						appendData = $(classOrID).prepend(changeData);
				}
				else {

						changeData = HTMLstring.replace("%data%", info);
						appendData = $(classOrID).append(changeData);

				}



		}

		/** @function createNewSection
		 * Creates a new entry for a parent section (header, work, project or education)
		 * @param {string} sectionName the name of the parent section in which the new entry is going to be appended
		*/
		function createNewSection(sectionName) {

				var startHTML = "<div class='"+sectionName+"-entry'></div>";
				console.log(startHTML)
				var a= $("#"+sectionName);
				console.log(a)
				$("#"+sectionName).append(startHTML);

			}

		/** @function givemeTheKeys
		 * Return an array of an Object keys
		 * @param {object} object Object of which we would like to obtain the keys of
		 * @returns {array}
		*/
		function givemeTheKeys(object) {

				var keys = Object.keys(object);
				return keys;
		}


		/**Array that contains the value of media contact of the Object bio*/
		//var arrayFooter = [bioHTMLStrings.contacts[0].email, bioHTMLStrings.contacts[0].twitter, bioHTMLStrings.contacts[0].github]

		/**Loop that iterates over the arrayFooter and calls substituteAndInsert function for each value*/
		//for (index in arrayFooter) {

		//		substituteAndInsert(arrayFooter[index], "", footerContacts);

		//};

		/**As the values that contain arrayFooter are the same used for the contact subsection we need to add a class for the elements
		in the footer section to diferenciate them and target them for style*/
		var footerElement = $("#footerContacts li.fa");
		footerElement.addClass("footerIcons");

		// The code below hide the h3 tags that are empty on the education subsection:OnlineClasses*/
		$(".onlineClasses").hide();
		$(".onlineClasses:first").show();



		/**Map section*/

		/**As I wanted to learn about google maps I study a bit the documentation of it and apply it in a different way*/

		// var map;

		// /** @function createNewMap
		//  * Function that creates a new google map
		//  * @param {object} json Object with the information of a certain location
		//  */
		// var createNewMap = function(json) {

		// 		var location = json.results[0].geometry.location;
		// 	 	map = new google.maps.Map(mapDiv, {

		//       			center: location,
		//       			zoom: 3

		//     	});

		// 		addMarker(location, map);

		// };

		// /** @function addMArker
		//  * Creates markers in the map with the locations available in the resume
		//  * @param {object} location object that contains the latitude and longitude of a certain location
		//  * @param {object} map      object that contains the information of a google map
		// */
		// function addMarker(location, map) {

		//   		var marker = new google.maps.Marker({

		//     			position: location,
		//     			map: map

		//   		});

		// }

		// $.ajax({
		//  		url: "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area:SanFrancisco&key=AIzaSyDTeOjNaYrSL42NWlEtjY7UsKnf-bazI8Y",
		//  		success: createNewMap
		// });

		// /** @function takeTheLocationInfo
		//   * Request an ajax to get a json with the information of a location given as a parameter
		//   * @param {string} location String
		// */
		// function takeTheLocationInfo(location){

		// 		$.ajax({

		// 				url: "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area:"+location+"&key=AIzaSyDTeOjNaYrSL42NWlEtjY7UsKnf-bazI8Y",
		// 				success: parseMarker

		// 		});

		// }

		// /** @function parseMarker
		//  * Get the coordinates of the location from the json passed as argument
		//  * @param {object} json object with the information of a certain location
		// */
		// function parseMarker(json) {

		// 		var locationCord=json.results[0].geometry.location;
		// 		addMarker(locationCord, map);

		// }


		//iterateArrays(arrayObjectsInfo, arrayObjectsHTML, arrayObjectsStr);

});
