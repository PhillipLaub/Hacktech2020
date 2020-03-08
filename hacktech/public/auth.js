//Check if User is LOgged in

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    let links = document.querySelector("#links");
    let loginButton = document.querySelector("#loginButton");
    loginButton.style.display = "none";
    let registerButton = document.querySelector("#registerButton");
    registerButton.style.display = "none";
    let logout = document.createElement("li");
    logout.innerHTML = "LOGOUT";
    logout.classList.add = "link";
    logout.setAttribute("id", "logout");
    console.log(logout);
    links.insertBefore(logout, links.childNodes[2]);
    logout.addEventListener("click", e => {
      e.preventDefault();
      auth.signOut();
      window.location = "/";
    });
    let username = document.createElement("li");
    username.innerHTML = `Hello ${user.displayName}`;
    logout.classList.add = "link";
    links.insertBefore(username, links.childNodes[3]);

    // grab data
    db.collection("searches")
      .get()
      .then(snapshot => {
        setupData(snapshot.docs);
      });

    const setupData = data => {
      data.forEach(doc => {
        const guide = doc.data();
        console.log(guide);
      });
    };

    console.log("user active", user);
  } else {
    console.log("no user");
  }
});

//LOGIN Sign In
setTimeout(() => {
  let registerForm = document.querySelector("#form-register");
  console.log(registerForm);

  registerForm.addEventListener("submit", e => {
    e.preventDefault();

    // get user info
    const email = registerForm["email"].value;
    const password = registerForm["password"].value;
    const name = registerForm["name"].value;
    console.log(email, password);

    // sign up the user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        // insert user data to firebase collection
        cred.user.updateProfile({
          displayName: name
        });
        return db
          .collection("users")
          .doc(cred.user.uid)
          .set({
            userName: name,
            userEmail: email
          });
      })
      .then(() => {
        window.location = "/";
        registerForm.reset();
      });
  });
}, 0);

// LOGIN USER
setTimeout(() => {
  const loginForm = document.querySelector("#form-login");
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    //grab user info;
    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(cred => {
        console.log(cred.user);
      })
      .then(() => {
        window.location = "/";
        loginForm.reset();
      });
  });
}, 0);
