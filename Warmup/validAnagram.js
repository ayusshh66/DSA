class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         let S = s.split('').sort().join('')
         let T = t.split('').sort().join('')

         if(S===T){
            return true
         }else {
            return false
         }
    }
}
