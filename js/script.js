function generateLinks() {
    {
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

    {
        const C_e = [0, 22,  2,  2, 70, 12, 86, 71, 13,
                    81, 67, 94, 66, 10, 76, 21, 29, 88,
                    25, 44,  6, 46, 93, 81, 95, 89, 13,
                    6, 53, 33];
        const b2 = "7hbvr56yhj876";
        let r2 = ""; let j2 = 0;
        for (const e of C_e) {
            j2  = ++j2 % b2.length;
            r2 += String.fromCharCode(e ^ b2.charCodeAt(j2));
        }
        const p1 = document.getElementById("cyber-sec-summ");
        if (p1) {
            const bE = "YCBJIGRvIHZhcmlvdXMgcHJvamVjdHMgaW4gbXkgPGEgaHJlZj0iJHtyMn0iPnBlcnNvbmFsIG9yZ2FuaXphdGlvbjwvYT4uIFByb2plY3RzIGluY2x1ZGUgc21hbGwgdG9vbHMsIGJhc2ljIG1hbHdhcmUgcHJvamVjdHMgZm9yIHRlYWNoaW5nLCBhbmQgZXhwbG9pdGF0aW9uLmA=";
            p1.innerHTML += eval(atob(bE));
        }
    }
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