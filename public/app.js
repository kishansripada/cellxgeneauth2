
var btn = document.getElementById('login');

function setCookie(cname, cvalue, exhours) {
    const d = new Date();
    d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

btn.onclick = async function () {
    let password = document.getElementById("password").value
    let datasetUrl = await fetch(`${window.origin}/login/${password}`).then(r => r.json())
    console.log(datasetUrl.DATASET)
    if (datasetUrl) {
        setCookie("auth", "XXVeh5U9hVu7Q87rhKQ51g==", 1)
   window.location.href = `${window.origin}/app`
        // change config vars in heroku
        // fetch("https://api.heroku.com/apps/michigan-cellxgene/config-vars", {
        //     "method": "PATCH",
        //     "headers": {
        //         "Content-Type": "application/json",
        //         "Accept": "application/vnd.heroku+json; version=3",
        //         "Authorization": "Bearer 7143941a-cb61-4943-837a-fb0085cfb660"
        //     },
        //     "body": {
        //         "DATASET": datasetUrl.DATASET
        //     }
        // })
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/vnd.heroku+json; version=3',
                Authorization: 'Bearer 7143941a-cb61-4943-837a-fb0085cfb660'
            },
            body: `{"DATASET":"https://cellxgenetestbucket1.s3.us-east-2.amazonaws.com/pbmc3k+(2).h5ad "}`
        };

        fetch('https://api.heroku.com/apps/michigan-cellxgene/config-vars', options).then(r => {
            // console.log(`loading dataset with url ${r.DATASET}`)
         
        }).catch(err => {
            console.error(err);
        });



    }
};

