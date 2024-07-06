// let item = [];

// while (true) {
//     let req = prompt("Enter the action (add, list, or quit):");

//     if (req === "quit") {
//         console.log("Quitting");
//         break;
//     } else if (req === "list") {
//         for (let li of item) {
//             console.log(li);
//         }
//     } else if (req === "add") {
//         let task = prompt("Enter the task you want to add:");
//         item.push(task);
//         console.log("Task added");
//     }else if(req ==="delete"){
//         let de = prompt("Enter the task you want to delete:");
//         item.splice(de,1);
//         console.log("deleted");
//     }
// }
// let n= 288222;
// let c=0;
// while(n>0){
//     n = Math.floor(n / 10);
//     c++;
// }
// window.alert(c);
let n= 288222;
while(n >0){
    let r=n%10;
    let sum =0;
    sum =sum+r;
    n=n/10;
}
window.alert(sum);