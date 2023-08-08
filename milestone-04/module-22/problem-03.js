/**
 * আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

* এইবার ভালো করে খেয়াল করো। 

* প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

* সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

* তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

* এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
* উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
 */

function paperRequirements(first_book, second_book, third_book){
    
    const first_book_paper = 100;
    const second_book_paper = 200;
    const third_book_paper = 300;

    const book1 = first_book * first_book_paper;
    const book2 = second_book * second_book_paper;
    const book3 = third_book * third_book_paper;
    // Total paper
    const total_paper = book1 + book2 + book3 ;
    return total_paper;
}

const first_book = 10; 
const second_book = 20; 
const third_book = 5;

const total_paper = paperRequirements(first_book, second_book, third_book);
console.log(`To print ${first_book} copy of Fist book, ${second_book} copy of Second book and ${third_book} copy of third book you need total paper `,total_paper);