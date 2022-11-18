/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my", "your", "mydgos"];
  let adjetive = ["great", "big", "fat", "small", "misterious", "black"];
  let noun = ["jogger", "racoon", "food", "nap", "house", "computer", "music"];
  let domains = [".com", ".cl", ".ve", ".it", ".es", ".ag"];

  let combinations = 0;

  for (let art of pronoun) {
    for (let adj of adjetive) {
      for (let sust of noun) {
        for (let dom of domains) {
          let domain = `${art}${adj}${sust}${dom}`;
          console.log(domain);
          combinations++;
        }
      }
    }
  }
  console.log(combinations);
};
