function generateLinks() {
    const A = [94,0,18,6,29,89,77,70,7,25,5,23,83,25,25,95,0,5,30,64,10,13,70];
    let b = "76tfvncbifwwr7t";
    let r = ""; let j = 0;
    for (let i = 0; i < A.length; ++i) {
        j = ++j % b.length;
        r += String.fromCharCode(A[i] ^ b.charCodeAt(j));
    }
    const a1 = document.getElementById("itch-io"); const a2 = document.getElementById("itch-io-chat");
    const a3 = document.getElementById("itch-io-chat2"); const a4 = document.getElementById("itch-io-adenia");
    if (a1) a1.href = r; if (a2) a2.href = r + "chat";
    if (a3) a3.href = r + "chat-2"; if (a4) a4.href = r + "adenia";
}

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
    generateLinks();
});