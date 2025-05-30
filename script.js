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
    "model": "83LK (LOQ 15IAX9E)",
    "kernel": "6.14.7-arch2-1",
    "packages": "1643 (pacman), 19 (flatpak)",
    "shell": "bash 5.2.37",
    "display": "1920x1080 @ 144 Hz in 16\"",
    "deskenv": "KDE Plasma",
    "winmanager": "KWin (Wayland)",
    "terminal": "kitty 0.42.1",
    "termfont": "NotoSansMono-Regular (11pt)",
    "cpu": "12th Gen Intel(R) Core(TM) i5-12450HX (12) @ 4.40 GHz",
    "gpu-int": "Intel UHD Graphics @ 1.30 GHz [Integrated]",
    "gpu-dis": "NVIDIA GeForce RTX 3050 6GB Laptop GPU [Discrete]",
    "memory": "15.34 GiB",
    "swap": "24.00 GiB",
    "disk-root": "266.33 GiB / 342.39 GiB (78%) - ext4",
    "disk-home": "58.19 GiB / 97.87 GiB (59%) - ext4",
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