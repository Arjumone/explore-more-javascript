// practice 1: feet to inch
function feetToInch(feet){
    const inch = feet*12;
    return inch;
}
const result = feetToInch(12);
console.log(result);

// practice 2: centimeter to meter
function centimeterToMeter(centimeter){
    const meter = centimeter * 0.01;
    return meter;
}
const cm = centimeterToMeter(1000);
console.log(cm);

// practice 3: count paper
function paperRequirements(bookQuantity1,bookQuantity2,bookQuantity3){
    const bookPrint1 = 100 * bookQuantity1;
    const bookPrint2 = 200 * bookQuantity2;
    const bookPrint3 = 300 * bookQuantity3;
    const allPrintBook = bookPrint1 + bookPrint2 + bookPrint3;
    return allPrintBook
}
const totalBook = paperRequirements(10,7,5);
console.log(totalBook);

// practice 4: largest name
function bestFriend(name){
    let largestName = name[0];
    for(let i = 1;i< name.length;i++){
        // console.log(index);
        if(name[i].length > largestName.length){
            largestName = name[i]
        }
    }
    return largestName;
}
const friendName = [ 'arju','apna','anika','arjina','arshi'];
const friend = bestFriend(friendName)
console.log(friend);

// practice 5: check the positive number and when find negative number it will be stop
function onlyPositive(numbers){
    let numberOfPositive = [];
    for(let i = 0; i< numbers.length;i++){
        if(numbers[i] > 0){
            
        }
    }
    return ;
} 
const arr = [ 23, 45, 21, 64, -65, 21, 92];
const positiveNumber = onlyPositive(arr)
console.log(positiveNumber);