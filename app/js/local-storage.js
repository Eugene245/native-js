export default function cartStore(prodNum, obj) {
    localStorage.setItem(prodNum, JSON.stringify(obj));

    // var retrievedObject = localStorage.getItem(prodNum);

    // console.log(prodNum, JSON.parse(retrievedObject));

}