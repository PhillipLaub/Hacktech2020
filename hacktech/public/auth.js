// grab data 
db.collection('searches').get().then(snapshot => {
    setupData(snapshot.docs);
});


//Check if User is LOgged in

    auth.onAuthStateChanged(user => {
        if(user) {
            console.log(user);
            let links = document.querySelector('#links');
            let loginButton = document.querySelector('#loginButton');
            loginButton.style.display = "none";
            let registerButton = document.querySelector('#registerButton');
            registerButton.style.display = "none";
            let logout = document.createElement("li");
            logout.innerHTML = "LOGOUT";
            logout.classList.add = "link";
            logout.setAttribute("id", "logout");
            console.log(logout);
            links.insertBefore(logout, links.childNodes[2]);
            logout.addEventListener('click', (e) => {
                e.preventDefault();
                auth.signOut();
                window.location = "/";
            });
            let username = document.createElement('li');
            username.innerHTML = `Hello ${user.email}`;
            logout.classList.add = "link";
            links.insertBefore(username, links.childNodes[3]);
            console.log('user active', user);
        } else {
            console.log('no user');
        }
    });


//LOGIN Sign In 
setTimeout(() => {
    let registerForm = document.querySelector('#form-register');
    console.log(registerForm);

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = registerForm['email'].value;
        const password = registerForm['password'].value;
        console.log(email, password);

        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user);
        }).then(() => {
            window.location = "/";
            registerForm.reset();
        });
    });
}, 0)
// LOGIN USER
setTimeout(() => {
    const loginForm = document.querySelector('#form-login');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //grab user info;
        const email = loginForm['email'].value;
        const password = loginForm['password'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user);
        }).then(() => {
            window.location = "/";
            loginForm.reset();
        });
    });
}, 0)
