// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
/**
 *   r0c0   || r0c1   || r0c2  ||
 *   #          _           _
 *   r1c0   || r1c1   || r1c2  ||
 *   #          #           _
 *   r2c0   || r2c1   || r2c2  ||
 *   #          #           #
 *
 * @param n
 */
function steps(n) {
    for (let row = 0; row < n; row++){
        let str = '';
        for (let col = 0; col < n; col++){
            if (col <= row){
                str += '#';
            }else{
                str += ' ';
            }
        }
        console.log(str)
    }
}
steps(7)
module.exports = steps;
