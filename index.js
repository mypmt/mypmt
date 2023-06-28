firebase.initializeApp({
    apiKey: "AIzaSyBlpczM-936b8ArGB9RVptozFyLfx7BCtw",
    authDomain: "tracker-5649b.firebaseapp.com",
    projectId: "tracker-5649b",
    storageBucket: "tracker-5649b.appspot.com",
    messagingSenderId: "925388885520",
    appId: "1:925388885520:web:840211f911d78682a88495"
});  
firebase.firestore().settings({ timestampInSnapshots: true });
function submit () {
    let item = document.getElementById('item').value;
    let price = document.getElementById('price').value;
    if(item && price !== ''){
        firebase.firestore().collection('Track').add({
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            item: item,
            price: price
        }).then(()=>{
            document.getElementById('submit').innerHTML='done';
            setTimeout(()=>{
               window.location.reload();
            },2000)
        });
    }
}