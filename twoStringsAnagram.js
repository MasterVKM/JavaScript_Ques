function isStrictAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    // Step 3: Compare
    return sortedStr1 === sortedStr2;
}

// 🔍 Example Tests
console.log(isStrictAnagram("race car", "race  car")); 
console.log(isStrictAnagram("listen", "silent"));      
console.log(isStrictAnagram("a b c", "c b a"));         

