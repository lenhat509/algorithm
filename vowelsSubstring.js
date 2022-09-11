const countVowelsSubstring = (string) => {
    let count = 0;
    const map = new Map();
    let start = -1;
    let end = 0;
    for (; end < string.length; end++) {
        char = string.charAt(end);
        if (isVowel(char)) {
            map.set(char, end);
            if (map.size === 5) {
                const k = getMinIndex(map);
                count += k - start;
            }
        } else {
            start = end;
            map.clear();
        }
    }
    return count;
};

const isVowel = (char) => {
    return (
        char === "a" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
        char === "e"
    );
};

const getMinIndex = (map) => {
    return Math.min(...map.values());
};

console.log(countVowelsSubstring("cuaieaaaaaeeeoeeoxuou"));
