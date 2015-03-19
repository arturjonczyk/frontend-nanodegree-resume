var bio = {
	"name": "Artur Jonczyk",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "645456789",
		"email": "artur.jonczyk@gmail.com",
		"github": "arturjonczyk",
		"twitter": "arturjonczyk",
		"location": "A Coruna, Spain"
	},
	"welcomeMessage": "I'm really glad to see you...",
	"skills": ["easy going", "happy person", "always positive", "saving the universe"],
	"biopic": "images/fry.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedContacts = "";
		for (var contact in bio.contacts) {
			formattedContacts += HTMLcontactGeneric.replace("%contact%", contact);
			formattedContacts = formattedContacts.replace("%data%", bio.contacts[contact]);
		}
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedSkillsStart = HTMLskillsStart;
		var formattedSkillsSet = "";
		for (var skill in bio.skills) {
			formattedSkillsSet += HTMLskills.replace("%data%", bio.skills[skill]);
		}
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedContacts);
		$("#header").append(formattedPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedSkillsStart);
		$("#skills").append(formattedSkillsSet);
		$("#footerContacts").append(formattedContacts);
	}
};

var work = {
	"jobs": [{
		"employer": "Planet Express",
		"title": "Delivery Boy",
		"location": "Brooklyn, NY",
		"dates": "January 3000 - Future",
		"description": "Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
	}, {
		"employer": "Panucci's Pizza",
		"title": "Delivery Boy",
		"location": "Manhattan, NY",
		"dates": "1998 - December 31, 1999",
		"description": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
	}],
	"display": function() {
		for (var job in work.jobs) {
			var formattedWorkStart = HTMLworkStart;
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$("#workExperience").append(formattedWorkStart);
			$(".work-entry:last").append(formattedEmployer + formattedJob);
			$(".work-entry:last").append(formattedWorkDate);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [{
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.",
		"images": ["http://placehold.it/300x200", "http://placehold.it/300x200"]
	}, {
		"title": "Diferent Project 2",
		"dates": "2013",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Donec sed odio dui.",
		"images": ["http://placehold.it/300x200", "http://placehold.it/300x200"]
	}],
	"display": function() {
		for (var i in projects.projects) {
			var formattedProStart = HTMLprojectStart;
			var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			var formattedProImages = "";
			for (var image in projects.projects[i].images) {
				formattedProImages += HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
			}
			$("#projects").append(formattedProStart);
			$(".project-entry:last").append(formattedProTitle);
			$(".project-entry:last").append(formattedProDate);
			$(".project-entry:last").append(formattedProDesc);
			$(".project-entry:last").append(formattedProImages);
		}
	}
};

var education = {
	"schools": [{
		"name": "Nova Southeastern University",
		"location": "Fort Lauderdale, FL",
		"degree": "Master",
		"majors": ["CS"],
		"dates": 2013,
		"url": "http://southeasternuniversity.org"
	}, {
		"name": "Eckerd College",
		"location": "Saint Petersburg, FL",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2003,
		"url": "http://eckerdcollege.org"
	}],
	"onlineCourses": [{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/ud804"
	}],
	"display": function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}

		$("#education").append(HTMLonlineClasses);
		for (var course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedUrl);
		}
	}
};

var addMap = function() {
	$("#mapDiv").append(googleMap);
};

bio.display();
work.display();
projects.display();
education.display();
addMap();