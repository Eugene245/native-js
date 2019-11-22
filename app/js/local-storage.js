export default function cartStore(id, obj) {
    
    localStorage.setItem(id, JSON.stringify(obj));
    

}