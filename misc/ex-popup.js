let crimson = document.getElementById('crimson');
let teal = document.getElementById('teal');
let reset = document.getElementById('reset');

//tabs.insertCSS to change header color after button click

crimson.onclick = () => {
    browser.tabs.insertCSS({code: "body { background: crimson !important; }"});
    //supported API  
}

teal.onclick = () => {
    browser.tabs.insertCSS({code: "body { background: teal !important; }"});
}

reset.onclick = () => {
    browser.tabs.insertCSS({code: "body { background: none !important; }"});
}
