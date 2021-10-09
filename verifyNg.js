//A Function that Check If a String has Unique Characters
function checkForUniqueCharacters(){
	(function uniqueCharacters(str){
		let checker = 0;

		for (let i = 0; i < str.length; i++) {
			let bitAtIndex = str[i] - 'a';
			if ((checker & (1 << bitAtIndex)) > 0) {
				return false;
			}
			checker = checker | (1 << bitAtIndex);
		}
		return true;
	})()
	let input = "geekforgeeks";
	if (uniqueCharacters(input)) {
	document.write("The String " + input + " has all unique characters");
	}
	else {
	document.write("The String " + input + " has duplicate characters");
	}
}
	
//A Function that Check if Two Strings are Permutation of Each Other
function checkPermutation(){
    (function arePermutated(str1, str2){
        let n1 = str1.length;
        let n2 = str2.length;
        if (n1 != n2)
            return false;
            
        let ch1 = str1.split(' ');
        let ch2 = str2.split(' ');
        ch1.sort();
        ch2.sort();

        for(let i = 0; i < n1; i++)
            if (ch1[i] != ch2[i])
                return false;

        return true;
    })()

    let str1 = "test";
    let str2 = "ttew";

    if (arePermutated(str1, str2))
        document.write("Yes");
    else
        document.write("No");
}

//A Function that replace all spaces in a string with ‘%20’
(function replace() {
    var str = "Mr John Smith ";
    str = str.trim();
    str = str.replaceAll(" ", "%20");
    document.write(str);
})()

//A Function that Check for permutation of a palindrome
(function palindromePermutation () {
    const str = 'amadm';
    const isPalindrome = (str = '') => {
       const hash = {};
       let count = 0;
       for (let i = 0; i < str.length; i++) {
          let c = str[i];
          if(c === ' '){
             continue;
          };
          if(hash[c]){
             delete hash[c];
          }else{
             hash[c] = true;
          };
          count++;
       };
       if(count % 2 === 0){
          return Object.keys(hash).length === 0;
       }else{
          return Object.keys(hash).length === 1;
       };
    };
    console.log(isPalindrome(str));
})()

//A Function that Check If Two strings are Zero or One Edits Away
function checkEditsAway() {
    (function isDistance(s1, s2){
        let m = s1.length, n = s2.length;

        if (Math.abs(m - n) > 1)
            return false;

            let count = 0;
            let i = 0, j = 0;

        while (i < m && j < n){
            if (s1[i] != s2[j]){
                if (count == 1)
                    return false;
                if (m > n)
                    i++;
                else if (m< n)
                    j++;
                else{
                    i++;
                    j++;
                }
                count++;
            }
            else
            {
                i++;
                j++;
            }
        }
        if (i < m || j < n)
            count++;
        return count == 1;
    })()
    let s1 = "gfg";
    let s2 = "gf";
    if(isDistance(s1, s2))
        document.write("Yes");
    else
        document.write("No");
}
	

//A Function that performs basic string compression
function compressString() {
    (function stringCompression (str) {
        if (str.length ==0) {
            console.log('Please enter valid string.');
            return;
        }
        var output = '';
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            count++;
            if (str[i] != str[i+1]) {
            output += str[i] + count;
            count = 0;
            }
        }
        console.log(output);
    })()
}
