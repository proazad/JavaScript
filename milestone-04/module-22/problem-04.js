/**
 * একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
 */
// function bestFriend(friends){
//     const friendsNamelen = [];
//     for(var i = 0; i < friends.length; i++){
//         const  len = friends[i].length;
//         friendsNamelen.push(len);
//     }
//     const bestFriend = Math.max(...friendsNamelen);
//     for(var i = 0; i < friends.length; i++){
//         const len = friends[i].length;
//         if(bestFriend != len){
//             continue;
//         }
//         console.log(`${friends[i]} is my best friend.`);
//     }
// }

// Anotehr Way 
function bestFriend(friends){
    let bestFriend = [];
    for(var i = 0; i < friends.length; i++){
        let  currentValue = friends[i];
        if(currentValue.length > bestFriend.length){
            bestFriend = currentValue;
        }
    }
    return  bestFriend;
    
}

let friendList = ['Ripon','Javed','Fardeen','Riad'];
console.log(bestFriend(friendList));