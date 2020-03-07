//pulling data from firestore (Test)
const dataList = document.querySelector("#test");
const setupData = data => {
  data.forEach(doc => {
    const guide = doc.data();
    console.log(guide);
  });
};
