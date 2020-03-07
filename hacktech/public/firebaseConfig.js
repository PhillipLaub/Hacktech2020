    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDb6oIQbnK9sLmqlEwwlT5xw6QEvwlghJQ",
        authDomain: "hacktech2020-8397a.firebaseapp.com",
        databaseURL: "https://hacktech2020-8397a.firebaseio.com",
        projectId: "hacktech2020-8397a",
        appId: "1:1039043411011:web:3dd1f9a5ef1cd5697d68f6"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // Make Auth
      const auth = firebase.auth();
      const db = firebase.firestore();
    
    
    
      // Parse the response and build an HTML table to display search results
    // Construct the request
    // Replace MyAppID with your Production AppID
    // var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    // url += "?OPERATION-NAME=findItemsAdvanced";
    // url += "&SERVICE-VERSION=1.13.0";
    // url += "&SECURITY-APPNAME=PhillipL-Hacktech-PRD-969eab4f9-2d048b4e";
    // url += "&RESPONSE-DATA-FORMAT=JSON";
    // url += "&REST-PAYLOAD";
    // url += "&GLOBAL-ID=EBAY-US";
    // url += "&keywords=doom";
    // url += "&paginationInput.entriesPerPage=10";
    // console.log(url);
    // fetch(url)
    // .then(response => {
    // return response.json()
    // })
    // .then(data => {
    // // Work with JSON data here
    // console.log(data)
    // })
    // .catch(err => {
    // // Do something for an error here
    // })