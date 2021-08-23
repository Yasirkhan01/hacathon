let resSignUp = () => {
    let name = document.getElementById("restaurantName").value;
    let email = document.getElementById("restaurantEmail").value;
    let country = document.getElementById("restaurantCountry").value;
    let city = document.getElementById("restaurantCity").value;
    let password = document.getElementById("restaurantPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {

            let obj = {
                name,
                email,
                country,
                city,
                uid: res.user.uid
            }
            firebase.database().ref(`Restaurant/${res.user.uid}`).set(obj)
                .then(() => {
                    alert("Registered")
                    location.replace("restaurantSignIn.html")
                })
                .catch((err) => {
                    alert(err.message)
                })
                // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

let resLogin = () => {
    let email = document.getElementById("restaurantEmailSignIn").value;
    let password = document.getElementById("restaurantPasswordSignIn").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

            var user = userCredential.user;
            firebase.database().ref(`Restaurant/${user.uid}`).on("value", (data) => {
                    localStorage.setItem("SignedInRes", JSON.stringify(data.val()))
                    alert("success")
                    window.location.replace("restaurantDashboard.html")
                })
                .then(() => {
                    alert("Registered")
                    location.replace("restaurantSignIn.html")
                })
                .catch((err) => {
                    alert(err.message)
                })
                // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

let cusSignUp = () => {
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let country = document.getElementById("customerCountry").value;
    let city = document.getElementById("customerCity").value;
    let password = document.getElementById("customerPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            // Signed in 
            let obj = {
                name,
                email,
                country,
                city,
                uid: res.user.uid
            }
            firebase.database().ref(`Customer/${res.user.uid}`).set(obj)
                .then(() => {
                    alert("Registered")
                    location.replace("index.html")
                })
                .catch((err) => {
                    alert(err.message)
                })
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        })
}

let = customerLogin = () => {
    let email = document.getElementById("customerEmail").value;
    let password = document.getElementById("customerPass").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            firebase.database().ref(`Customer/${user.uid}`).on("value", (data) => {
                    localStorage.setItem("customerSignIn", JSON.stringify(data.val()))
                    alert("success")
                    window.location.replace("customerDashboard.html")
                })
                .then(() => {
                    alert("Registered")
                    location.replace("index.html")
                })
                .catch((err) => {
                    alert(err.message)
                })
                // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}