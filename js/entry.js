var data = {
  race: {
    human: {
      name: "Human",
      description: "Human description."
    },
    symbiont: {
      name: "Symbiont",
      description: "Symbiont description."
    },
    orc: {
      name: "Orc",
      description: "Orc description."
    },
    mechanoid: {
      name: "Mechanoid",
      description: "Mechanoid description."
    },
    frost: {
      name: "Frost",
      description: "Frost description."
    },
    ghoul: {
      name: "Ghoul",
      description: "Ghoul description."
    },
  },
  class: {
    outlander: {
      name: "Outlander",
      description: "Outlander description."
    },
    champion: {
      name: "Champion",
      description: "Champion description."
    },
    rogue: {
      name: "Rogue",
      description: "Rogue description."
    },
    soldier: {
      name: "Soldier",
      description: "Soldier description."
    },
    hermit: {
      name: "Hermit",
      description: "Outlander description."
    },
  }
};

var setUpSeeMoreButtons = function (field) {
  var updater;
  var seeRaces = document.getElementById('see-' + field);
  seeRaces.onclick = function () {
    var infoBox = document.getElementById(field + '-info-box');
    if (infoBox.className == 'carousel open') {
      infoBox.className = 'carousel closed';
      this.innerText = 'About';
      if (updater) {
        clearInterval(updater);
      }
      onclick = null;
    } else {
      infoBox.className = 'carousel open';
      this.innerText = 'Minimize';
      var selected = document.getElementById(field).value;
      infoBox.childNodes[1].childNodes[1].innerText = data[field][selected].name;
      infoBox.childNodes[1].childNodes[3].innerText = data[field][selected].description;
      updater = setInterval(function () {
        selected = document.getElementById(field).value;
        infoBox.childNodes[1].childNodes[1].innerText = data[field][selected].name;
        infoBox.childNodes[1].childNodes[3].innerText = data[field][selected].description;
      }, 500);
    }
  };
};

onload = function () {
  setUpSeeMoreButtons('race');
  setUpSeeMoreButtons('class');
};
