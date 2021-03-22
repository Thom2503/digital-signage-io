function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function titleCase(str) {
  var splitStr = str.toLowerCase().split('-');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join('-');
}
// const Pokedex = require("pokeapi-js-wrapper");
window.addEventListener('load',
  function() {
    const P = new Pokedex.Pokedex();
    P.resource(
      "api/v2/location/rustboro-city/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        console.log(japaneseName[i].name)
        document.getElementById("RustboroOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("RustboroTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-rustboro").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/7/72/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/littleroot-town/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        document.getElementById("littlerootOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("RustboroLittleroot").innerHTML = name.replace('-', ' ');
      document.getElementById("image-littleroot").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/a/a3/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/dewford-town/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        console.log(japaneseName[i].name)
        document.getElementById("dewfordOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("btn_DewfordTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-dewford").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/1/1c/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/mauville-city/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        console.log(japaneseName[i].name)
        document.getElementById("mauvilleOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("mauwvilleTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-mauwville").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/d/d6/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/lavaridge-town/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        console.log(japaneseName[i].name)
        document.getElementById("lavaridgeOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("lavaridgeTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-lavaridge").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/f/f7/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/fortree-city/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        console.log(japaneseName[i].name)
        document.getElementById("fortreeOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("fortreeTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-fortree").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/7/7c/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/mossdeep-city/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        console.log(japaneseName[i].name)
        document.getElementById("mossdeepOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("mossdeepTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-mossdeep").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/3/38/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/sootopolis-city/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        console.log(japaneseName[i].name)
        document.getElementById("sootopolisOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("sootopolisTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-sootopolis").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/c/cf/" + name.replace('-', '_') + "_RS.png' alt='"+titleCase(obj.name)+"'>"
    });

    P.resource(
      "api/v2/location/ever-grande-city/"
    ).then( response => {
      console.log(response)
      var obj = response;
      var name = titleCase(obj.name);
      var japaneseName = obj.names;
      for (let i = 0; i < japaneseName.length; i++) {
        document.getElementById("evergrandeOtherLang").innerHTML = japaneseName[i].name;

      }
      document.getElementById("evergrandeTitle").innerHTML = name.replace('-', ' ');
      document.getElementById("image-evergrande").innerHTML = "<img style='width: 90%;position: relative;' src='https://cdn.bulbagarden.net/upload/3/31/Ever_Grande_City_RS.png' alt='"+titleCase(obj.name)+"'>"
    });
}, false);
