// O(n) O(1)
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let left = 0;
    let right = 0;
    let map = new Map();
    while (right < s.length) {
        let char = s.charAt(right);
        if (map.has(char)) {
            // find the length of substring
            let length = right - left;
            longest = Math.max(longest, length);
            // shift left pointer
            let dupIndex = map.get(char);
            for (let i = left; i <= dupIndex; i++) map.delete(s.charAt(i));
            left = dupIndex + 1;
        } else {
            map.set(char, right);
            right++;
        }
    }
    let length = right - left;
    longest = Math.max(longest, length);
    return longest;
};
