let video_count = 0, pictureID = 0, gifID = 0;

if (window.onload)
{
    let pageStyle = document.getElementById("externalStyleSheet")

    if (getBrowserName() == 'Chrome')
    {
        pageStyle.setAttribute('href', "styles/chrome.css");
    } else if (getBrowserName() == 'Safari')
        {
            pageStyle.setAttribute('href', "styles/safari.css");
        } else if (getBrowserName() == 'Firefox')
            {
                pageStyle.setAttribute('href', "styles/firefox.css");
            } else if (getBrowserName() == 'Edge')
                {
                    pageStyle.setAttribute('href', "styles/edge.css");
                }
}

function getBrowserName() {
    let browserName = '';
    let userAgent = navigator.userAgent;
    (typeof InstallTrigger !== 'undefined') && (browserName = 'Firefox');
    ( /* @cc_on!@*/ false || !!document.documentMode) && (browserName = 'IE');
    (!!window.chrome && userAgent.match(/OPR/)) && (browserName = 'Opera');
    (!!window.chrome && userAgent.match(/Edge/)) && (browserName = 'Edge');
    (!!window.chrome && !userAgent.match(/(OPR|Edge)/)) && (browserName = 'Chrome');

    let ua_lower = userAgent.toLowerCase(); 
    if (ua_lower.indexOf('safari') != -1) { 
        if (ua_lower.indexOf('chrome') > -1) {
            browserName = 'Chrome';
        } else {
            browserName = 'Safari';
        }
    }

  
    /**
     * Expected returns
     * Firefox, Opera, Edge, Chrome, Safari
     */

    return browserName;
}

function setImageSize()
{
    let currentScreenWidth = screen.width;

    // Change the image relative position
    if (getBrowserName() == 'Chrome' || getBrowserName() == 'Safari') {
        if (currentScreenWidth < 1366)
        {
            if (currentScreenWidth < 850)
            {
                if (currentScreenWidth < 354)
                {
                    document.getElementById("generalDiv2").style.height = "910px";
                    setImagePosition(document.getElementById("displayImage"), document.getElementById("displayGif"), "-250px")
                } else
                    {
                        document.getElementById("generalDiv2").style.height = "850px";
                        setImagePosition(document.getElementById("displayImage"), document.getElementById("displayGif"), "-250px")
                    }
            } else
                {
                    setImagePosition(document.getElementById("displayImage"), document.getElementById("displayGif"), "-395px")
                    document.getElementById("generalDiv2").style.height = "650px";
                }
        } else
            {
                setImagePosition(document.getElementById("displayImage"), document.getElementById("displayGif"), "-500px")
            }
    } else if (getBrowserName() == 'Firefox')
        {
            if (currentScreenWidth < 850)
            {
                if (currentScreenWidth < 565)
                {
                    document.getElementById("generalDiv2").style.height = "910px";
                } else
                    {
                        document.getElementById("generalDiv2").style.height = "850px";
                        
                    }
            } else
                {
                    document.getElementById("generalDiv2").style.height = "650px";
                }
        }
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
            renderNewPicture("images/picture(2).png");
        break;
        case 2:
            renderNewPicture("images/picture(3).png");
        break;
        case 3:
            renderNewPicture("images/picture(4).png");
        break;
        case 4:
            renderNewPicture("images/picture(5).png");
        break;
        case 5:
            renderNewPicture("images/picture(6).png");
        break;
        case 6:
            renderNewPicture("images/picture(7).png");
        break;
        case 7:
            renderNewPicture("images/picture(8).png");
        break;
        case 8:
            renderNewPicture("images/picture(9).png");
        break
        case 9:
            renderNewPicture("images/picture(10).png");
        break;
        case 10:
            renderNewPicture("images/picture(11).png");
        break;
        case 11:
            renderNewPicture("images/picture(12).png");
        break;
        case 12:
            renderNewPicture("images/picture(13).png");
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

    if (gifID > 4) gifID = 0;

    switch (gifID) {
        case 0:
            renderNewGif("images/gifClip(1).gif");
        break;
        case 1:
            renderNewGif("images/gifClip(2).gif");
        break;
        case 2:
            renderNewGif("images/gifClip(3).gif");
        break;
        case 3:
            renderNewGif("images/gifClip(4).gif");
        break;
        case 4:
            renderNewGif("images/gifClip(5).gif");
        break;
    
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