document.addEventListener("DOMContentLoaded", function () {
    const projectListsBlock = `
        <li id="dropdownTitle">General</li>
        <li><a class="dropdown-item" href="smiirlcounter.html">Hardware Hack</a></li>
        <li><a class="dropdown-item" href="untitled_wedge.html">Untitled Wedge</a></li>
        <li><a class="dropdown-item" href="khi.html">Kent Hack It!</a></li>
        <li><a class="dropdown-item" href="bluq.html">BluQ</a></li>
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