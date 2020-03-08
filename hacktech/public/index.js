//pulling data from firestore (Test)
const setupData = data => {
  data.forEach(doc => {
    const guide = doc.data();
    console.log(guide);
  });
};
