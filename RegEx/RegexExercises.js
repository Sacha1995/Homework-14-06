// 1. Create a RegExp literal that searches for the term 'cat'. Use it to see if there are any cats in this string.
const purrString =
  "No sir! There are no cats hiding in here!! No cats at all...";

const IncludesCats = /cat/;
const purrCats = purrString.match(IncludesCats)
  ? "There are cats in this string."
  : "There are no cats in this string.";

console.log(purrCats);

// // 2. Create a RegExp using the constructor that does the same and pass the 'global' and 'case insensitive' flags
const catRegex = /cat/gi;

// // 3. Change this RegExp literal so that it will find the match
const re1 = /dog/i;
const str1 = "Dogs are awesome!";

// 4. Change this RegExp literal so that it will find all the matches
const re2 = /ball/g;
const str2 =
  "Oh dear, Jimmy! It looks like the cue ball is just behind that brown ball to the left of the baulk cushion";

const matches = str2.match(re2);
console.log(matches);

// 5. Test which of these strings starts with 'cat';
const re5 = /^cat/g;
const strs5 = ["catholic", "hat", "cataholic"];

const result = strs5.filter((str) => re5.test(str));

console.log(result);

// 6. Test which of these strings ends with 'ing';
const re6 = /ing$/g;
const strs6 = ["living", "vapid", "laughing", "vacuous", "loving"];

const result6 = strs6.filter((str) => re6.test(str));

console.log(result6);

// 7. Confirm that this string has the word 'holy' in it.
const re7 = /\bholy\b/gi;
const str7 = "God, the father, the son and the holy spirit";

const contains7 = re7.test(str7);

console.log(contains7);

// 8. Confirm that this string has a word starting with 'flap' in it.
const re8 = /\bflap/gi;
const str8 = "And lo, he was flapping about";

const contains8 = re8.test(str8);

console.log(contains8);

// 9. Confirm that this string has a word ending with 'per' in it.
const re9 = /per\b/gi;
const str9 = "like a complete chopper would!";
const contains9 = re9.test(str9);

console.log(contains9);
// 10. Confirm that this string has a word with 'ar' in it
const re10 = /\Bar\B/gi;
const str10 = "like he cared not a jot!";
const contains10 = re10.test(str10);

console.log(contains10);
// 11. Create a Regex that tests if something has vowels in it
const re11 = /[aeiou]/;
const str11 = "dog";

const contains11 = re11.test(str11);

console.log(`has a vowel: ` + contains11);

// 12. Create a Regex that tests if something has one number between 2 and 7 in it
const re12 = /^[2-7]$/;
const str12 = "1198";

const contains12 = re12.test(str12);

console.log(`has a number between 2 and 7: ` + contains12);

// 13. Create a Regex that tests if something has whitespace in it.
const re13 = /\s/;
const str13 = "this is a sentence";

const contains13 = re13.test(str13);

console.log(`has a whitespace: ` + contains13);

// 14. Create a Regex that tests if something is numbers only (Hint: starts and ends with 1+ numbers)
const re14 = /^\d+$/;

const testStrings = ["12345", "abc123", "123abc", "", "0", "1234567890"];

testStrings.forEach((str) => {
  console.log(`"${str}" is numbers only: ${re14.test(str)}`);
});

// 15. A year is 4 numbers. Make a regex to test for it within a string
const re15 = /\b[0-9]{4}\b/g;

const str15 = "I was born in 1957";

const contains15 = re15.test(str15);
console.log(`has 4 digits: ` + contains15);

// 16. A promo code has 'p-' then between 2 and 4 numbers, then another hyphen, then 2 letters. Make a regex.
const re16 = /^p-\d{2,4}-[a-z]{2}$/gi;
const examplePromoCode = "p-345-LL";

const contains16 = re16.test(examplePromoCode);
console.log(`I am a promocode: ` + contains16);

// 17. Use capture groups and .match() to get the day, month and year from this string
const re17 = /(?<day>^\d{1,2})\*(?<month>\d{1,2})\*(?<year>\d{2,4})$/;
const starDateString = "11*04*22";
const date17 = starDateString.match(re17);
console.log(date17);

// 18. Use capture groups and .match() to get the day, month and year from this string
// why does the re18 not give back the month, year and day?
const re18 = /(?<day>\d{1,2})\*(?<month>\d{1,2})\*(?<year>\d{2,4})/g;
const starDateString2 =
  "Star date 11*04*22! What a good date! 12*04*22 is better though";
const date18 = starDateString2.match(re18);
console.log(date18);

date18.forEach((date) => {
  console.log(date.match(re17));
});

// 19. Stop this expression from being greedy
//greedy
console.log(
  /\$(.+)\s/.exec("This costs $100.00 and it is less than $200.00")[1]
);
//lazy
console.log(
  /\$(.+?)\s/.exec("This costs $100.00 and it is less than $200.00")[1]
);

// 20. Remove all whitespace in this string and replace with a single _
const re20 = /\s+/g;
const spaceyStr = "my bad   file name.jpg";
const newStr20 = spaceyStr.replace(re20, "_");
console.log(newStr20);

// 21. Get my normal name from this string
const re21 = /(?<lastname>\w+), (?<firstname>\w+)/;
const oldFashioned = "Sherry, James";
const newName =
  oldFashioned.match(re21).groups.firstname +
  " " +
  oldFashioned.match(re21).groups.lastname;
console.log(newName);

// 22. Find all the strings with Sherry in that have 'James' before them
const re22 = /James Sherry/i; //is this cheating?
const arr22 = [
  "Robert Sherry is the Head of Operations",
  "James Sherry is the Head of Teaching",
  "Katie Smith is the Head of Marketing & Business Development",
];
const result22 = arr22.filter((item) => re22.test(item));

console.log(result22);

//it is cheating, should be:
// arr22.filter(function (str) {
//   return /James (?=Sherry)/g.test(str);
// })

// 23. Find all the strings with Sherry in that have 'Robert' after them
const re23 = /Sherry, Robert/i; //is this cheating?

const arr23 = [
  "Sherry, Robert is the Head of Operations",
  "Sherry, James is the Head of Teaching",
  "Smith, Katie is the Head of Marketing & Business Development",
];
const result23 = arr23.filter((item) => re23.test(item));

console.log(result23);

//it is cheating, should be:
// arr23.filter(function (str) {
//   return /(?<=Sherry, )Robert/g.test(str);
// })
