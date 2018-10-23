document.querySelector("img.preview").addEventListener("click", function(e) {
    var lowResSrc = e.target.src, // git the src of the targeted low resolution image
        overlayDiv = document.querySelector("div.overlay"), // grab the overlay div
        highResImg = document.createElement("img"), // create an image for the high resolution version
        spinnerImg = document.createElement("img"); // create an image for the spinning one

        overlayDiv.style.display = "block";
        highResImg.className = "bgImg";
        highResImg.src = lowResSrc.substr(0, lowResSrc.length - 7) + ".jpg";
        overlayDiv.appendChild(highResImg);

        spinnerImg.className = "spinner";
        spinnerImg.src = "images/spinner.gif";
        overlayDiv.appendChild(spinnerImg);

        
}, false);