var currentImgId;

function enlargeImg(imgId) {
    var img = document.getElementById(imgId);

    // reset size of previously enlarged image, if any
    if (currentImgId) {
        var currentImg = document.getElementById(currentImgId);
        currentImg.classList.remove("enlarged");
    }

    // enlarge clicked image
    img.classList.add("enlarged");

    // set current image id to clicked image id
    currentImgId = imgId;
}