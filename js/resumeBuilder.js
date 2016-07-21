

var model = {

	bio: {
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
		    "biopic": "https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/vaneUdacityp2.jpg"
	},





	education : {

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
					]
	},

	work : {

		"jobs": [
				{
					"employer": "Merck Group",
					"title": "Sales Application Specialist",
					"location": "Mexico City",
					"dates": "August 2013-October 2014",
					"description": "Maintain and increase market share at all assigned area, by building strong customer relationship and understanding the customer's needs and requirement."+
					"Responsible for fulfilling and forecasting market need accurately, and meeting assigned sales quota"+
					"Responsible for new accounts development"+
					"Development of clients such as: Colgate, Coca Cola, Beiersdorf AG, BASF, Henkel and Unilever"
				},
				{
					"employer": "Indumex",
					"title": "Technical Sales Executive",
					"location": "Mexico City",
					"dates": "January 2013-August 2013",
					"description": "Maintain and increase market share in all Mexico"+
					"Responsible for new accounts development"+
					"Technical support and participation in customer product development for  subtitution of an existing ingredient or include tour ingredient in a new project, Participating in trials and testing"
				},
				{
					"employer": "Puratos",
					"title": "RD Manager",
					"location": "Hidalgo",
					"dates": "January 2011-January 2012",
					"description": "Responsible for technical projects from experimental design to completion. Including testing, documentation and analytical procedures."+
					"Directed activities for development of concepts for future needs of the market"+
					"Provided technical services to customers, sales, marketing and divisions to ensure alignment with the business strategy"+
					"Participated in cross regional innovation projects"
				},
				{
					"employer": "Bimbo Bakery Group",
					"title": "R&D Supervisor",
					"location":"Mexico City",
					"dates": "January 2008-May 2010",
					"description": "Research, formulation and development of new products within time, cost and processing requirements" +
					"Reformulated existing products"+
					"Conducted and leaded physicochemical, sensorial and microbiological analyses of prototypes developed, as well as pilot and industrial test "+
					"Identified and  implemented cost-saving solutions for the company"+
					"Provided technical assistance to operation in both cost improvement projects and routine troubleshooting"
				},

			],
	},

	projects : {

					"projects": [
						{
							"title": "About me",
							"dates": "2016",
							"description": "Project 0 for Udacity Nanodegree."+
							"Website in which I worked with basic structure of HTML and CSS",
							"images": [
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Screen+Shot+2016-01-15+at+3.png"
							]
						},
						{
							"title": "Portfolio Site",
							"dates": "2016",
							"description": "Project 1 for Udacity Nanodegree. Portfolio site in which I replicated the design given in HTML, CSS and bootstrap."+
							"This website is responsible, display images, descriptions and links to each of my portfolio projects and has some interactivity given by Javascript and Jquery.",
							"images": [
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.32.13+PM.png",
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.32.13+PM.png"
							]
						},
						{
							"title": "Online Resume",
							"dates": "2016",
							"description": "Project 2 for Udacity Nanodegree. ",
							"images": [
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.36.03+PM.png",
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.36.03+PM.png",
									"https://s3-us-west-2.amazonaws.com/vaneprojects/images/Udacity-p2/Screen+Shot+2016-03-17+at+4.36.03+PM.png"
							]
						}
					]
				}


};

var controller = {

	createHtmlElement: function(elemType, attrType, attrValue, text){

		var htmlElement = document.createElement(elemType);
		if(Array.isArray(attrType)===true){

			for(var i = 0; i<= attrType.length; i++){
				htmlElement.setAttribute(attrType[i], attrValue[i]);
			}

		}
		else{
			htmlAttribute = htmlElement.setAttribute(attrType, attrValue);

			//console.log(htmlElement);
		}

		varinnerHtml = htmlElement.textContent = text;

		return htmlElement;
	},

	getInfo: function(infoToGet){

		var information = model[infoToGet];
		return information;
	},

	makeASubtitle: function(text, type){

		//console.log(type)

		var subtitle;

		if(type=== 1){
			subtitle = controller.createHtmlElement("a", ["href", "class"], ["#", "subtitle"], text);
			return subtitle
		}
		else{
			subtitle = controller.createHtmlElement("div", "class", "subtitle1", text);
			return subtitle
		}

	},

	makeADateElem: function(dates){

		var dateElem = controller.createHtmlElement("div", "class", "date-text", dates)

		return dateElem;

	},

	makeALocationElem: function(location){

		var locationElem = controller.createHtmlElement("div", "class", "location-text", location)

		return locationElem
	},

	makeANewSection: function(sectionName){

		var newSection = controller.createHtmlElement("div", "class", sectionName, "" )
		return newSection
	},

	makeADescriptionElement: function(description){

		var descriptionElem = controller.createHtmlElement("p", "class", "text-justify", description);
		return descriptionElem;
	},

	makeImageElemForProjects: function(src){

		var divContainer = controller.createHtmlElement("div", "class", "col-md-4 project-images", "");
		var projectImage = controller.createHtmlElement("img", ["src", "class"], [src, "img-responsive"], "");
		divContainer.appendChild(projectImage);
		console.log(divContainer);
		return divContainer;
	}


};



var view={

	createHeader: function(){

		var bioInfo = controller.getInfo("bio");

		var contactIcons=["phone-square", "envelope", "github-square", "twitter-square", "map-marker"];
		var bioRef= ["5555", "https://mail.google.com/", "https://github.com/", "http://twitter.com/", ""];
		var contactNames = Object.getOwnPropertyNames(bioInfo.contacts);
		//console.log(contactNames)

		var headerEntry = controller.makeANewSection("header-entry"),
			nameElem = controller.createHtmlElement("div", "class", "text-uppercase text-center headerTitle", bioInfo.name),
			roleElem = controller.createHtmlElement("div", "class", "text-center role headerRole", bioInfo.role),
			welcomeMessage = controller.createHtmlElement("span", "class", "welcome-message text-capitalize", bioInfo.welcomeMessage),
			skills = controller.createHtmlElement("div", "class", "flex-grow  skills textSkills", bioInfo.skills),
			biopic = controller.createHtmlElement("div", "class", "col-md-12", ""),
			picElem = controller.createHtmlElement("img", ["src", "class"],[bioInfo.biopic, "biopic img-responsive img-circle"], ""),
			contact;

		//console.log(picElem)




			$("#header").append(headerEntry);
			$("#header").prepend(roleElem);
			$("#header").prepend(nameElem);
			biopic.appendChild(picElem)
			$("#header").prepend(biopic);


			for (var i = 0; i <= contactNames.length; i++) {
				var contactAElem = controller.createHtmlElement("a", "href", bioRef[i], "");
				//console.log(contactAElem)
				var contactLiElem = controller.createHtmlElement("li", "class", "flex-item fa fa-" + contactIcons[i] , "");
				var spanElem = controller.createHtmlElement("span", "class", "textContact", contactNames[i]);
				contactAElem.appendChild(contactLiElem);
				contactLiElem.appendChild(spanElem);
				$("#topContacts").append(contactAElem);

			};
	},

	createEducationSection: function(){

		var educationInfo = controller.getInfo("education"),
			howManySchools= educationInfo.schools.length,
			howManyOnlineCourses = educationInfo.onlineCourses.length,
			schoolSection,
			schoolName,
			schoolLocation,
			schoolDegree,
			schoolMajor,
			schoolDates,
			schoolurl,
			ocSection,
			ocTitle,
			ocSchool,
			ocDates,
			ocUrl;

			//elemOnOcSection;

				//console.log();


				//For Schools
			for (var i = 0 ; i < howManySchools; i++) {

				schoolSection = controller.makeANewSection("school-entry")
				console.log(schoolSection)


				schoolName = controller.makeASubtitle(educationInfo.schools[0].name, 1);
				console.log(educationInfo.schools[0].name)
				schoolLocation = controller.makeALocationElem(educationInfo.schools[0].location);
				schoolDegree = controller.makeASubtitle(educationInfo.schools[0].degree, 2);
				schoolMajor = controller.createHtmlElement("em", "class", "", "Major "+educationInfo.schools[0].majors[0]);
				schoolDates = controller.makeADateElem(educationInfo.schools[0].dates);
				schoolurl = controller.createHtmlElement("a", ["href", "class"], ["#", "schoolLink"], educationInfo.schools[0].url )
				var elemOnSchoolSection =[schoolName, schoolLocation, schoolDegree, schoolMajor, schoolDates, schoolurl];
				for (var j = 0; j < elemOnSchoolSection.length; j++) {

					schoolSection.appendChild(elemOnSchoolSection[j])

				};

				$("#education").append(schoolSection)

			};

			//For Online Courses
			for (var i = 0 ; i < howManyOnlineCourses; i++) {

				ocSection = controller.makeANewSection("school-entry")

				ocTitle = controller.makeASubtitle(educationInfo.onlineCourses[i].title, 1);
				ocSchool = controller.makeASubtitle(educationInfo.onlineCourses[i].school, 2);
				ocDates = controller.makeADateElem(educationInfo.onlineCourses[i].dates);
				ocUrl = controller.createHtmlElement("a", ["href", "class"], ["#", "schoolLink"], educationInfo.onlineCourses[i].url);
				var elemOnOcSection = [ocTitle, ocSchool, ocDates, ocUrl]
				for (var j = 0; j < elemOnOcSection.length; j++) {

					ocSection.appendChild(elemOnOcSection[j])
					//console.log(elemOnOcSection[j])

				};

				// ocSection.appendChild(ocTitle);
				// ocSection.appendChild(ocSchool);
				// ocSection.appendChild(ocDates);
				// ocSection.appendChild(ocUrl);
				$("#education").append(ocSection);

			};



	},

	//WorkSection
	createWorkSection: function(){

		var workSection,
			workInfo = controller.getInfo("work"),
			howManyJobs = workInfo.jobs.length,
			workEmployer,
			workTitle,
			workLocation,
			workDates,
			workDescription;

		for(var i = 0; i < howManyJobs; i++){

			workSection = controller.makeANewSection("work-entry");
			workEmployer = controller.makeASubtitle(workInfo.jobs[i].employer, 1);
			workTitle = controller.makeASubtitle(workInfo.jobs[i].title, 2);
			workLocation = controller.makeALocationElem(workInfo.jobs[i].location);
			workDates = controller.makeADateElem(workInfo.jobs[i].dates);
			workDescription = controller.makeADescriptionElement(workInfo.jobs[i].description);
			//console.log(workLocation);

			workSection.appendChild(workEmployer);
			workSection.appendChild(workTitle);
			workSection.appendChild(workLocation);
			workSection.appendChild(workDates);
			workSection.appendChild(workDescription);
			$("#work").append(workSection);

		}
	},

	createProjectSection: function(){

		var projectSection,
			projectInfo = controller.getInfo("projects"),
			howManyProjects = projectInfo.projects.length,
			projectTitle,
			projectDates,
			projectDescription,
			projectImages,
			imgContainer,
			imgElem;

		for (var i = 0; i < howManyProjects; i++) {

			projectSection = controller.makeANewSection("projects-entry");
			projectTitle = controller.makeASubtitle(projectInfo.projects[i].title);
			projectDates = controller.makeADateElem(projectInfo.projects[i].dates);
			projectDescription = controller.makeADescriptionElement(projectInfo.projects[i].description);
			imgContainer = controller.createHtmlElement("div", "class", "row image-container", "");

			var elemOnProjectSection = [projectTitle, projectDates, projectDescription, imgContainer]
			for(var ii = 0; ii < elemOnProjectSection.length; ii++){

				projectSection.appendChild(elemOnProjectSection[ii]);
			}

			for (var j = 0; j < projectInfo.projects[i].images.length; j++) {


				imgElem = controller.makeImageElemForProjects(projectInfo.projects[i].images[j]);
				imgContainer.appendChild(imgElem)



			};

			projectSection.appendChild(imgContainer)

			$("#project").append(projectSection);


			console.log(projectInfo.projects[i].images[0])

		};


			console.log(projectInfo.projects[0].title)
	}

			//console.log(howManyJobs)




};

view.createHeader()
view.createEducationSection()
view.createWorkSection()
view.createProjectSection()
