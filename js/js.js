let video_count = 0, pictureID = 0, gifID = 0;

function setImageSize()
{
    let currentScreenWidth = screen.width;

    if (currentScreenWidth < 1920)
    {
        // Change the image scale
        if (currentScreenWidth < 1600)
        {
            if (currentScreenWidth < 1440)
            {
                if (currentScreenWidth < 1366)
                {
                    if (currentScreenWidth < 1155)
                    {
                        if (currentScreenWidth < 1050)
                        {
                            if (currentScreenWidth < 850)
                            {
                                if (currentScreenWidth < 660)
                                {
                                    if (currentScreenWidth < 485)
                                    {
                                        rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "140px", "0%")
                                    } else
                                        {
                                            rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "185px", "0%")
                                        }
                                } else
                                    {
                                        rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "220px", "5%")
                                    }
                            } else
                                {
                                    rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "220px", "15%")
                                }
                        } else
                            {
                                rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "200px", "15%")
                            }
                    } else
                        {
                            rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "200px", "25%")
                        }
                } else
                    {
                        rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "250px", "25%")
                    }
            } else
                {
                    rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "250px", "25%")
                }
        } else
            {
                rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "350px", "20%")
            }
    } else
        {
            rescaleImage(document.getElementById("displayImage"), document.getElementById("displayGif"), "400px", "22%")
        }

    // Change the image relative position
    if (currentScreenWidth < 1366)
    {
        if (currentScreenWidth < 850)
        {
            document.getElementById("generalDiv2").style.height = "850px";
            setImagePosition(document.getElementById("displayImage"), document.getElementById("displayGif"), "-250px")
        } else
            {
                setImagePosition(document.getElementById("displayImage"), document.getElementById("displayGif"), "-395px")
                document.getElementById("generalDiv2").style.height = "650px";
            }
    } else
        {
            setImagePosition(document.getElementById("displayImage"), document.getElementById("displayGif"), "-500px")
        }
}

function rescaleImage(imgObject, gifObject, pixels, percentage)
{
    imgObject.style.width = pixels;
    imgObject.style.height = pixels;
    imgObject.style.right = percentage;

    gifObject.style.width = pixels;
    gifObject.style.height = pixels;
    gifObject.style.left = percentage;
}

function setImagePosition(imgObject, gifObject, pixels)
{
    // default top value : top: -350px

    imgObject.style.top = pixels;
    gifObject.style.top = pixels;
}

function setNextDisplayPicture()
{
    pictureID++;

    if (pictureID > 12) pictureID = 0;

    switch (pictureID) {
        case 0:
            renderNewPicture("images/picture(1).png");
        break;
        case 1:
            renderNewPicture("images/picture (2).png");
        break;
        case 2:
            renderNewPicture("images/picture (3).png");
        break;
        case 3:
            renderNewPicture("images/picture (4).png");
        break;
        case 4:
            renderNewPicture("images/picture (5).png");
        break;
        case 5:
            renderNewPicture("images/picture (6).png");
        break;
        case 6:
            renderNewPicture("images/picture (7).png");
        break;
        case 7:
            renderNewPicture("images/picture (8).png");
        break;
        case 8:
            renderNewPicture("images/picture (9).png");
        break
        case 9:
            renderNewPicture("images/picture (10).png");
        break;
        case 10:
            renderNewPicture("images/picture (11).png");
        break;
        case 11:
            renderNewPicture("images/picture (12).png");
        break;
        case 12:
            renderNewPicture("images/picture (13).png");
        break;
    
        default:
        break;
    }
}

function renderNewPicture(picturePath)
{
    let imgObject = document.getElementById("displayImage");
    imgObject.src = picturePath;
}

//---------------------------------------------------------------------------------

function setNextDisplayGif()
{
    gifID++;

    if (gifID > 9) gifID = 0;

    switch (gifID) {
        case 0:
            renderNewGif("images/gifClip(1).gif");
        break;
        case 1:
            renderNewGif("images/gifClip (2).gif");
        break;
        case 2:
            renderNewGif("images/gifClip (3).gif");
        break;
        case 3:
            renderNewGif("images/gifClip (4).gif");
        break;
        case 4:
            renderNewGif("images/gifClip (5).gif");
        break;
        case 5:
            renderNewGif("images/gifClip (6).gif");
        break;
        case 6:
            renderNewGif("images/gifClip (7).gif");
        break;
        case 7:
            renderNewGif("images/gifClip (8).gif");
        break;
        case 8:
            renderNewGif("images/gifClip (9).gif");
        break
        case 8:
            renderNewGif("images/gifClip (10).gif");
        break
    
        default:
        break;
    }
}

function renderNewGif(gifPath)
{
    let imgObject = document.getElementById("displayGif");
    imgObject.src = gifPath;
}

function setNextVideo()
{
    video_count++;

    if (video_count > 1) video_count = 0;

    switch (video_count) {
        case 0:
            playNextVideo("videos/videoOne.mp4");
        break;
        case 1:
            playNextVideo("videos/videoTwo.mp4");
        break;
    
        default:
        break;
    }
}

function playNextVideo(videoPath)
{
    let videoPlayer = document.getElementById("background_video");

    videoPlayer.src = videoPath;
    videoPlayer.play();
}