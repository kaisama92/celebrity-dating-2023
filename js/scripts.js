// UI logic
function hideCelebrityResultsAndError() {
  document.getElementById("error-message").setAttribute("class","hidden");
  document.getElementById("fred-flinstone").setAttribute("class", "hidden");
  document.getElementById("velma-dinkley").setAttribute("class", "hidden");
  document.getElementById("tarzan").setAttribute("class", "hidden");
}

window.onload = function(){
  // fxn
  hideCelebrityResultsAndError();
  document.querySelector("form").onubmit = function(event){
    event.preventDefault();
    
    // gather inputs
    const age = parseInt(document.getElementById("age-id").value);
    const height = parseInt(document.getElementById("height-id").value);

    if(!age && !height){
      document.getElementById("error-message").removeAttribute("class");
    } else {
      if(age > 60 && age>18){
        document.getElementById("fred-flinstone").removeAttribute("class");
      } else if (age>18 && age<41 || height>72){
          document.getElementById("velma-dinkley").removeAttribute("class");
      } else if ((age>18 && age<41) && (height<=72 && !height===0)) {
         document.getElementById("tarzan").removeAttribute("class");
      } else {
        document.getElementById("error-message").removeAttribute("class");
      }
    }
  }
}
