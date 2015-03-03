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

bio.display();