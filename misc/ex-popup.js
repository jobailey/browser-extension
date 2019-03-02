let crimson = document.getElementById('crimson');
let teal = document.getElementById('teal');
let reset = document.getElementById('reset');

//tabs.insertCSS to change header color after button click

crimson.onclick = () => {
    BhxBrowser.tabs.insertCSS({code: "body { background: crimson !important; }"});
    //Bhx - JavaScript interface
    //tabs - API for interacting with browser tabs, injecting styles in page content
}

teal.onclick = () => {
    BhxBrowser.tabs.insertCSS({code: "body { background: teal !important; }"});
}

reset.onclick = () => {
    BhxBrowser.tabs.insertCSS({code: "body { background: none !important; }"});
}
