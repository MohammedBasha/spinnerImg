// declare the overlay div globally to be used in the next both events
var overlayDiv = document.querySelector("div.overlay"); // grab the overlay div

document.querySelector("img.preview").addEventListener("click", function(e) { // start handling the click event on the low resolution image
    
    var lowResSrc = e.target.src, // git the src of the targeted low resolution image
        highResImg = document.createElement("img"), // create an image for the high resolution version
        spinnerImg = document.createElement("img"); // create an image for the spinning one

        overlayDiv.style.display = "block"; // show the overlay div when click on the low resolution image
        highResImg.className = "bgImg"; // add the predefined class to the high resolution image
        highResImg.src = lowResSrc.substr(0, lowResSrc.length - 7) + ".jpg"; // set the src for the high resolution image
        overlayDiv.appendChild(highResImg); // append the high resolution image to the overlay div

        spinnerImg.className = "spinner"; // add the predefined class to the spinning image
        spinnerImg.src = "images/spinner.gif"; // set the src of the spinning image
        overlayDiv.appendChild(spinnerImg); // append the spinning image in the overlay div

        highResImg.addEventListener("load", function(e) { // fire the load event handler on the high resolution image
            spinnerImg.parentNode.removeChild(spinnerImg); // remove the spinning image since the high resolution image loads
        }, false);

}, false);

overlayDiv.addEventListener("click", function(){ // set the click event handler for the overlay div to disappear after clicking on it
    this.style.display = "none";
}, false);