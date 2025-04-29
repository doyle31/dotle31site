async function fetchIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        console.log('User IP Address:', data.ip);
        document.getElementsByClassName('ip-address');
        Array.from(document.getElementsByClassName('ip-address')).forEach(element => {
            element.innerText = `${data.ip}`;
        });
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

let text = {
    "os": "Arch Linux x86_64",
    "model": "20FA001NAU (ThinkPad T460s)",
    "kernel": "6.14.4-arch1-1",
    "packages": "1800 (pacman), 28 (flatpak-system), 9 (flatpak-user)",
    "shell": "bash 5.2.37",
    "display": "1920x1080 @ 60 Hz",
    "deskenv": "KDE Plasma",
    "winmanager": "KWin (Wayland)",
    "terminal": "kitty 0.41.1",
    "termfont": "NotoSansMono-Regular (11pt)",
    "cpu": "Intel(R) Core(TM) i7-6600U (2) @ 3.40 GHz ",
    "gpu": "Intel HD Graphics 520 @ 1.05 GHz [Integrated] ",
    "memory": "7.61 GiB",
    "swap": "16.00 GiB",
    "disk": "186.28 GiB / 216.94 GiB (86%) - ext4 ",
    "locale": "en_AU.UTF-8"
}

function getLinuxVersion() {
    fetch("https://gitlab.archlinux.org/api/v4/projects/42594/repository/tags")
        .then(response => response.json())
        .then(data => {
            let kernel = document.getElementById("kernel")
            kernel.innerText = (" " + data[0].name);
        });
}

window.onload = function () {
    for (const [key, value] of Object.entries(text)) {
        const element = document.getElementById(key);
        if (element) {
            element.innerText = (" " + value);
        } else {
            console.warn(`Element with ID ${key} not found.`);
        }
    }
    fetchIPAddress();
    getLinuxVersion();
};