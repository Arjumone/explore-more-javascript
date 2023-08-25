const phones = [
    {name:'samsung',camera:12, storage:'32gb',price: 23000,color:'silver'},
    {name:'walton',camera:10, storage:'64gb',price: 33000,color:'silver'},
    {name:'iphone',camera:14, storage:'32gb',price: 123000,color:'silver'},
    {name:'nokia',camera:8, storage:'32gb',price: 13000,color:'silver'},
    {name:'htc',camera:12, storage:'32gb',price: 40000,color:'silver'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for( let i = 0;i< phones.length;i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price< cheapest.price){
            cheapest = phone
        }
    }
    return cheapest
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);