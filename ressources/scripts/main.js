/*function parallax() {
  $(document).scroll(() => {

    var s = $(window).scrollTop();

    $("body").css("background-position-y", (s * .4));

    if (s >  $("#about").offset().top - 100) {
      $("#about").css("background-position-y", (s * .4));
    }
  })
}*/


function theme() {

	//init
	if (localStorage.theme) {
		let theme = localStorage.theme;
	} else {
		localStorage.theme = "aut";
		let theme = "aut";
	}

	$(".theme").val(localStorage.theme);
	apply();

	$(".theme").change(function() {
		apply();
	});



	function auto() {

		let d = new Date();

		if (d.getHours() < 8 || d.getHours() > 20) {
			$("body").addClass("nit");
		} else {
			$("body").removeClass();
		}
	}

	function apply() {

		let theme = $(".theme").val();
		localStorage.theme = theme;

		if (theme === "aut") {
			auto();
		} else {
			$("body").removeClass();
			$("body").addClass(theme);
		}
	}
}



function langue(init) {

	let translator = $('body').translate({lang: "fr", t: dict});

	if (!localStorage.langue) {
		localStorage.langue = "fr";
	}

	if (init) {
		translator.lang(localStorage.langue);
	}

	$(".lang").change(function() {

		let l = $(this).val();

		localStorage.langue = l;
		translator.lang(l);
	});

	$(".lang").val(localStorage.langue);
}



//le truc completement overkill pour obfucate une adresse mail
//mais eh

function obfuscate(str) {
  let txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

document.getElementById('mail').onmouseup = function() {
  this.innerText = obfuscate(atob("JiMxMTgmIzEwNSYjOTkmIzExNiYjMTExJiMxMTQmIzQ2JiM5NyYjMTIyJiMxMDEmIzExOCYjMTAxJiMxMDAmIzExMSYjNjQmIzEwOSYjOTcmIzEwNSYjMTA4JiM0NiYjOTkmIzExMSYjMTA5JiMxMyYjMTAmIzEzJiMxMA=="));

  setTimeout(function() {
    document.getElementById('mail').setAttribute("href", obfuscate(atob("JiMxMDkmIzk3JiMxMDUmIzEwOCYjMTE2JiMxMTEmIzU4JiM0NyYjNDcmIzExOCYjMTA1JiM5OSYjMTE2JiMxMTEmIzExNCYjNDYmIzk3JiMxMjImIzEwMSYjMTE4JiMxMDEmIzEwMCYjMTExJiM2NCYjMTA5JiM5NyYjMTA1JiMxMDgmIzQ2JiM5OSYjMTExJiMxMDk=")));
  }, 100)
}

window.onload = function() {
	langue(true);
	theme();
}









const dict = {
  "Bonjour, ici Victor !": {
    en: "Hi, Victor here !"
  },
  "Ce domaine appartient à Victor Azevedo, ce site n'est pas un portfolio.": {
    en: "This domain belongs to Victor Azevedo, this website is not a portfolio."
  },
  "Vous pouvez feuilleter mes projets, les utiliser, ": {
    en: "You can see my projects, use them, "
  },
  "en apprendre plus sur moi et me contacter.": {
    en: "know more about me and contact me."
  },
  "A propos": {
    en: "About"
  },
  "Projets": {
    en: "Projects"
  },
  "Une page d'accueil customisable au style d'iOS, construite en collaboration avec": {
    en: "A customizable startpage inspired by iOS' design, built in collaboration with"
  },
  "Disponible sur Firefox et Chrome.": {
    en: "Available on Firefox and Chrome."
  },
  "Synchronise n'importe quel texte sur tous vos appareils avec un simple nom d'utilisateur. Chiffré coté client et zero log.": {
    en: "Sync every text you want on all your devices with a simple username. Client-side encryption and zero log."
  },
  "Utilise l'emploi du temps individualisé de l'ENT UCA pour l'afficher plus rapidement, et plus clairement.": {
    en: "Uses UCA individualized schedules to display it in a more intuitive way."
  },
  "Mon premier site 😊 Un site statique de présentation pour la Savonnerie La Curieuse.": {
    en: "My first website 😊 A static presentation website for the Savonnerie La Curieuse."
  },
  "Limite l'utilisation de sites chronophages en sélectionnant un quota par jour. Nécessite beaucoup de permissions et doit être revu.": {
    en: "Limit chronophageous website by selecting a quota per day. Uses a lot of permissions for it to work, needs to be redone."
  },
  "Stylise le \"twitter décentralisé\" memo.cash un peu mieux.": {
    en: "Styles the \"decentralized Twitter\" memo.cash a bit better."
  },
  "Recherche rapidement la valeur actuelle d'une quantité de crypto en tapant dans la barre de recherche.": {
    en: "Rapidly search the current value of a quantity of crypto by typing in the browser search bar."
  },
  "Choisi les moteurs de recherches à comparer avec des mots clefs et affiche les 10 premiers résultats de chacun.": {
    en: "Choose search engines to compare with key-words and it shows the 10 firsts results of each."
  },
  "Moi c'est Victor Azevedo, je suis français, actuellement étudiant. Je suis le plus facilement joignable par telegram ": {
    en: "I am Victor Azevedo, I'm french, currently a student. I can be more easily contacted by telegram "
  },
  " ou ": {
    en: " or "
  },
  "J'utilise ce petit bout de l'internet pour créer. Vous pouvez ": {
    en: "I am using this piece of the internet to create. You can "
  },
  "juger mon code sur Github 🤔": {
    en: "judge my code on Github 🤔"
  },
  "Croquis de moi": {
    en: "Sketch of me"
  },
  "Ce qui me plaît": {
    en: "Things I like"
  },
  "La sécurité informatique, et tout ce que l'encryption peut nous apporter en plus.": {
    en: "Software / Hardware security, and all of what encryption can provide for us."
  },
  "L'économie du Bitcoin et le monde des monnaies numériques en général.": {
    en: "The Economy of Bitcoin and the world of cryptocurrencies overall."
  },
  "La musique qui fait réfléchir, comme du math rock ou metal progressif. J'essaye d'en composer, j'essaye.": {
    en: "Music that makes you think, such as math rock or progressive metal. I also try to compose, I try."
  },
  "Le minimalisme. Se libérer l'esprit en se séparant d'objets peu ou pas utilisés, et vivre simplement avec le nécessaire.": {
    en: "Minimalism. Freeing your mind by getting rid of objects you don't use often, if at all, and live simply with what's necessary."
  },
  "Mes adresses": {
    en: "My addresses"
  },
  "Identité PGP": {
    en: "PGP identity"
  },
  "Je n'utilise aucune autre clé que celle affiché sur cette page.": {
    en: "I don't use any other key than the one displayed on this page."
  },
  "par son créateur éponyme, France.": {
    en: "by its eponym creator, France."
  },
  "Langue": {
    en: "Language"
  },
  "Thème": {
    en: "Theme"
  },
  "Jour": {
    en: "Day"
  },
  "Nuit": {
    en: "Night"
  },
  "Noir": {
    en: "Black"
  },
  "site web": {
    en: "website"
  }
}