const checkStringLength = (str, maxLength) => str.length <= maxLength;
const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().split(' ').join('');
  return cleanStr === cleanStr.split('').reverse().join('');
};

console.log('Тесты checkStringLength:');
console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 10));

console.log('\nТесты isPalindrome:');
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('А роза упала на лапу Азора'));
