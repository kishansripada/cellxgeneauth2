
var btn = document.getElementById('login');

function setCookie(cname, cvalue, exhours) {
    const d = new Date();
    d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

btn.onclick = async function () {
    let password = document.getElementById("password").value
    let isCorrect = await fetch(`${window.origin}/login/${password}`).then(r => r.json())
    if (isCorrect) {
        console.log("correct")
        setCookie("auth", "XXVeh5U9hVu7Q87rhKQ51g==", 1)
        console.log(window.origin)
        window.location.href = `${window.origin}/app`
    }
};


