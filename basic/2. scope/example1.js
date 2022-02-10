/*
Function scope:
জাভাস্ক্রিপ্টে ব্যাপ্তি কোডের বর্তমান প্রেক্ষাপট বোঝায়, যা জাভাস্ক্রিপ্টে ভেরিয়েবলের অ্যাক্সেসযোগ্যতা নির্ধারণ করে। Scope দুটি ধরণের local এবং global:
 * global ভেরিয়েবল হচ্ছে ব্লকের বাইরে ঘোষিত
 * local ভেরিয়েবল হচ্ছে ব্লকের ভিতরে ঘোষিত

নীচের উদাহরণে, আমরা একটি global variable animal তৈরি করব। ফাংশনের মধ্যে animal নামের একই একটি local variable। কনসোলে তাদের পাঠানোর মাধ্যমে, আমরা দেখতে পাচ্ছি যে কিভাবে ভেরিয়েবলের মান scopeর উপর নির্ভর করে এবং মূল মান পরিবর্তন করা হয় না।
*/

// Global variable initialization
var animal = "Tiger";

function transform() {
  // A function-scoped local variable initialization
  var animal = "Cangaroo";
  console.log(animal);
}

// Global and local variable log
console.log(animal);
transform();
console.log(animal);

/*
Output:

Tiger
Cangaroo
Tiger
*/