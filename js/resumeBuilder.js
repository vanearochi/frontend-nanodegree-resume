'use strict';

/** All data and HTML strings are inside objects so I could use functions and don't repeat the code thinking on what I learned on the javascript basic course: don't repeat yourself*/

		var bioHTMLStrings = {



							"name": '<div class="col-md-12 text-uppercase text-center headerTitle" id="name"><h1 >%data%</h1></div>',
							"role": '<div class="col-md-12 text-center role headerRole">&nbsp %data%</div><hr>',
							"contacts":{
									"mobile": '<a href="tel:555-555-5555"><li class="flex-item fa fa-phone-square">&nbsp <span class= "textContact">%data%</span></li></a>',
							 		"email": '<a href="mailto:vanearochi@gmail.com" ><li class="flex-item fa fa-envelope">&nbsp <span class="textContact">%data%</span></li></a>',
									"github": '<a href="https://github.com/vanearochi"><li class="flex-item fa fa-github-square">&nbsp <span class="textContact">%data%</span></li></a>',
							 		"twitter": '<a href="http://twitter.com/VaneArochi" ><li class="flex-item fa fa-twitter-square">&nbsp <span class="textContact">%data%</span></li></a>',
									"location": '<a href=""><li class="flex-item fa fa-map-marker">&nbsp <span class="textContact"> %data%</span></li></a>',
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

						    /**@function display
							 * Iterates over objects to take strings and calls functions with those strings as parameters
							   to substitute the %data% with information and append it to a Section
						    **/
							display: function(){

									/**Getting the Object keys*/
									var keysHTMLBio = givemeTheKeys(bioHTMLStrings);

									/**Taking each key to be able to acess the object value*/
									keysHTMLBio.forEach(function(val){

											var HTMLstring = bioHTMLStrings[val];
											var infoBio = bio[val];

											if(val==="contacts"){

													/**Iterating over bio.contacts object*/
													$.each(infoBio, function(key, value){

															var HTMLstringContacts= HTMLstring[key];

															substituteAndInsert(HTMLstringContacts, value, "#topContacts");
													});

											}
											else if(val==="skills"){

													//**Creating a new subsection for skills and appending the title of it*/
													createNewSection("header");
													var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance: %data%</h3><ul id="skills" class="flex-box"></ul>';
													substituteAndInsert(HTMLskillsStart, " ", ".header-entry:last");

													/**Iterating over bio.skills array and passing the values as arguments*/
													infoBio.forEach(function(value){
															substituteAndInsert(HTMLstring, value, ".header-entry:last");
													});
											}
											else if(val==="biopic"){

													substituteAndInsert(HTMLstring, infoBio, "#header");

											}
											else if (val==="name") {

													substituteAndInsert(HTMLstring, infoBio, "#header");

											}
											else{

													substituteAndInsert(HTMLstring, infoBio, ".headerTitle");

											}

									});
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
						},
				"onlineCourses":
						{
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
							"majors": ["BA"],
							"dates": "2001-2006",
							"url": "http://www.itmorelia.edu.mx/"
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
							"dates": "2016",
							"url": "https://www.udacity.com/course/ud804"
						},
						{
							"title": "Object-Oriented Javascript",
							"school": "Udacity",
							"dates": "2016",
							"url": "https://www.udacity.com/course/ud015"
						},
						{
							"title": "Responsive Images",
							"school": "Udacity",
							"dates": "2016",
							"url": "https://www.udacity.com/course/ud882"
						},
						{
							"title": "Responsive Web Design Fundamentals",
							"school": "Udacity",
							"dates": "2016",
							"url": "https://www.udacity.com/course/ud893"
						}
				],

				display: function(){
						/**Taking the subsection Keys of education and the keys inside of each*/
						var subsectionKeys = givemeTheKeys(educationHTMLStrings);
						var keysInSubsectionSchools = givemeTheKeys(educationHTMLStrings[subsectionKeys[0]]);
						var keysInSubsectionOnline =  givemeTheKeys(educationHTMLStrings[subsectionKeys[1]]);

						/**Iterating Over education.schools*/
						education.schools.forEach(function(val){
								/**Creating a new subsection for schools*/
								createNewSection("education");
								/**Taking the values in subsection schools and passing them as arguments*/
								keysInSubsectionSchools.forEach(function(value){

										var HTMLEduStr = educationHTMLStrings.schools[value];
										var infoEdu = val[value];
										substituteAndInsert(HTMLEduStr, infoEdu, ".education-entry:last");

								});

						});
						/**Creating a new subsection for Online Classes and appending the title to it by calling a function*/
						createNewSection("education");
						var onlineTitleHTML = '<h3 class="onlineClasses">%data%</h3>';
						substituteAndInsert(onlineTitleHTML, "Online Classes", ".education-entry:last");
								/**Iterating over education.onlineClasses array*/
								education.onlineCourses.forEach(function(val){

											/**Iterating over each object property to take the value*/
										 	keysInSubsectionOnline.forEach(function(value){

										 		var HTMLOnlineStr= educationHTMLStrings.onlineCourses[value];
										 		var infoOnline = val[value];
										 		substituteAndInsert(HTMLOnlineStr, infoOnline, ".education-entry:last");
								 });
						 });
				 }

		};

		education.display();

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

							//**Getting the keys of the subsections in work*/
							var keysInSubsectionjobs  = givemeTheKeys(workHTMLStrings);

							/**Iterating over the jobs subsection*/
							work.jobs.forEach(function(val){
									/**Creating a new subsection for each job*/
									createNewSection("work");
									/**Iterating over the array of keys to take the value of each job*/
									keysInSubsectionjobs.forEach(function(value){

										var HTMLWorkStr = workHTMLStrings[value];
										var infoWork = val[value];
										substituteAndInsert(HTMLWorkStr, infoWork, ".work-entry:last");

									 });
							});

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


		var projects = {

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

							//**Getting keys of the subsections in project*/
							var keysInSubsectionProjects  = givemeTheKeys(projectsHTMLStrings);
							console.log(keysInSubsectionProjects);

							/**Iterating over the projects subsection*/
							projects.projects.forEach(function(val){

									/**Creating a new subsection for each job*/
							 		createNewSection("projects");
							 		/**Iterating over the array of keys to take the value of each project*/
							 		keysInSubsectionProjects.forEach(function(value){

							 			var infoProjects= val[value];
							 			var HTMLProjectStr = projectsHTMLStrings[value];

							 			/**Condition to get the arrays inside the object*/
							 			if(Array.isArray(val[value])){
							 				/**Creating a new container for the images display*/
							 				var imgContainerHTML = '<div class="row image-container">%data%</div>';
							 				substituteAndInsert(imgContainerHTML, " ", ".projects-entry:last");

							 				/**Iterating over the array images*/
							 				val[value].forEach(function(img){

							 							substituteAndInsert(HTMLProjectStr, img, ".image-container:last");
							 				});

							 			}

							 			else{

							 				substituteAndInsert(HTMLProjectStr, infoProjects, ".projects-entry:last");

							 			}

									});
							});

					 }



		};
projects.display();



		/** @function substituteAndInsert
		 * Replace a piece of the HTML string with a new string passed as an argument and will append it to his corresponding  parent section
		 * @param {string} HTMLstring HTML string that will be appended to a parent section
		 * @param {string} info       String with the information that will be inserted on the HTMLstring
		 * @param {string} classOrID  selector for element where the complete htm will be inse name that will be used as a css selector to appen the HTMLstring
		*/
		function substituteAndInsert(HTMLstring, info, classOrID) {

				var regexTitle = /headerTitle/;
				var regexLoc = /location-text/;
				var regexbiopic= /biopic/;
				var changeData;
				var appendData;

				/**Condition to check for 2 elements that need to be prepend instead of appended*/
				if (HTMLstring.match(regexTitle) || HTMLstring.match(regexbiopic)) {

				 		changeData = HTMLstring.replace("%data%", info);
				 		appendData = $(classOrID).prepend(changeData);

				}

				// * This condition checks if the HTMLstring has location-text on it, if it does it will pass the info to takeLocationInfo for the markers map
				else if (HTMLstring.match(regexLoc)) {

				 		takeTheLocationInfo(info);
				 		changeData = HTMLstring.replace("%data%", info);
				 		appendData = $(classOrID).append(changeData);

				}

				else {

						changeData = HTMLstring.replace("%data%", info);
						appendData = $(classOrID).append(changeData);

				}

		}

		/** @function createNewSection
		 * Creates a new entry for a parent section
		 * @param {string} sectionName the name of the parent section in which the new entry is going to be appended
		*/
		function createNewSection(sectionName) {

				var startHTML = "<div class='"+sectionName+"-entry'></div>";
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
		var arrayFooter = [bioHTMLStrings.contacts.email, bioHTMLStrings.contacts.twitter, bioHTMLStrings.contacts.github];

		/**Loop that iterates over the arrayFooter and calls substituteAndInsert function for each value*/
		//for (index in arrayFooter)
		arrayFooter.forEach(function(value){

			substituteAndInsert(value, "", "#footerContacts");

		});

		/**As the values that contain arrayFooter are the same used for the contact subsection we need to add a class for the elements
		in the footer section to diferenciate them and target them for style*/
		var footerElement = $("#footerContacts li.fa");
		footerElement.addClass("footerIcons");


		/**Map section*/

		/**As I wanted to learn about google maps I study a bit the documentation of it and apply it in a different way*/

		 var map;

			 /** @function createNewMap
			  * Function that creates a new google map
			  * @param {object} json Object with the information of a certain location
			  */
			 var createNewMap = function(json) {

			 		var location = json.results[0].geometry.location;
			 	 	map = new google.maps.Map(mapDiv, {
	     					center: location,
			       			zoom: 3
				   	});

		 		addMarker(location, map);

			 };

			/** @function addMArker
			 * Creates markers in the map with the locations available in the resume
			 * @param {object} location object that contains the latitude and longitude of a certain location
		     * @param {object} map      object that contains the information of a google map
		     */
		    function addMarker(location, map) {

		  		var marker = new google.maps.Marker({

		     			position: location,
		     			map: map

		   		});

			 }

			$.ajax({
		  		url: "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area:SanFrancisco&key=AIzaSyDTeOjNaYrSL42NWlEtjY7UsKnf-bazI8Y",
		  		success: createNewMap
			 });

		   /** @function takeTheLocationInfo
		     * Request an ajax to get a json with the information of a location given as a parameter
		     * @param {string} location String
		   */
		   function takeTheLocationInfo(location){

		 		$.ajax({

		 				url: "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area:"+location+"&key=AIzaSyDTeOjNaYrSL42NWlEtjY7UsKnf-bazI8Y",
		 				success: parseMarker

		 		});

		    }

		  /** @function parseMarker
		   * Get the coordinates of the location from the json passed as argument
		   * @param {object} json object with the information of a certain location
		   */
		   function parseMarker(json) {

		  		var locationCord=json.results[0].geometry.location;
		 		addMarker(locationCord, map);

		 }


