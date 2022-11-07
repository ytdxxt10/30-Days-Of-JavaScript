let love =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';

let regEx = /\blove\b/gi;
console.log(love.match(regEx), love.match(regEx).length);
let because =
  'You cannot end a sentence with because because because is a conjunction';

let regEx2 = /\bbecause\b/gi;
console.log(because.match(regEx2).length);

const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

console.log(sentence);

let salary =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let regEx3 = /^\d{n}$/;
console.log(salary.match(regEx3));
/**
 * 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
 */
