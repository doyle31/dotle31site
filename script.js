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

window.onload = fetchIPAddress;