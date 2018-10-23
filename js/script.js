document.querySelector("img.preview").addEventListener("click", function(e) {
    var lowResSrc = e.target.src, // git the src of the targeted low resolution image
        overlayDiv = document.querySelector("div.overlay"), // grab the overlay div
        highResImg = document.createElement("img"), // create an image for the high resolution version
        spinnerImg = document.createElement("img"); // create an image for the spinning one

        overlayDiv.style.display = "block";
        highResImg.className = "bg-img";
        highResImg.src = lowResSrc.substr(0, lowResSrc.length - 7) + ".jpg";
        highResImg.style.maxWidth = "100%";
        overlayDiv.appendChild(highResImg);
}, false);