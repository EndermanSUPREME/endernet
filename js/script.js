document.addEventListener("DOMContentLoaded", function () {
    const projectListsBlock = `
        <li id="dropdownTitle">General</li>
        <li><a class="dropdown-item" href="smiirlcounter.html">Hardware Hack</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li id="dropdownTitle">Research</li>
        <li><a class="dropdown-item" href="srcSlice.html">srcSlice</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li id="dropdownTitle">Cyber Security</li>
        <li><a class="dropdown-item" href="windowsKeyLogger.html">Windows Keylogger</a></li>
        <li><a class="dropdown-item" href="c2_server.html">C2 Server</a></li>
    `;

    // Look for the element with id="InterestingProjects" and insert the html block above
    // into the content of the tag found, the snippet above is used in multiple pages
    document.getElementById("InterestingProjects").innerHTML = projectListsBlock;
});

document.addEventListener("DOMContentLoaded", function () {
    let bgVideo = document.getElementById("background_video");
    let timeout = setTimeout(() => {
        console.log("Background video took too long to load, removing to improve loading speed...");
        bgVideo.remove();
    }, 3000); // 3 seconds timeout

    // cancel the timeout if we can render the video properly
    bgVideo.addEventListener("canplaythrough", () => {
        clearTimeout(timeout);
    });

    // remove if the video runs into an issue
    bgVideo.addEventListener("error", () => {
        console.log("Error loading background video, removing to improve loading speed...");
        bgVideo.remove();
    });
});