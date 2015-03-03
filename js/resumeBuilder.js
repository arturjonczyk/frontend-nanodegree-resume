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
	"biopic": "../images/fry.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedContacts = "";
		for (var contact in bio.contacts) {
			formattedContacts += HTMLcontactGeneric.replace("%contact%", contact);
			formattedContacts = formattedContacts.replace("%data%", bio.contacts[contact]);
		}
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
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
		"images": ["images/try-ios-banner_small.png", "images/core-ios-7-banner_small.png"]
	}, {
		"title": "Diferent Project 2",
		"dates": "2013",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Donec sed odio dui.",
		"images": ["images/try-objective-c-banner_small.png", "images/try-ios-banner_small.png"]
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


bio.display();
work.display();
projects.display();