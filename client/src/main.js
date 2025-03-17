import './style.css'

const $app = document.querySelector('#app');

const $h2 = document.createElement("h2");
$h2.textContent = "Hello, world";
$app.appendChild($h2);

// And hit the API
const $code = document.createElement("pre")
$code.textContent = "Loading...";

const fn = async () => {
    const res = await (await fetch("/code")).text();
    $code.textContent = res;
}

$app.appendChild($code);
fn();
