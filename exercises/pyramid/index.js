// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
/**
 *   r0c0   || r0c1   || r0c2  || r0c3   || r0c4  ||
 *   _          _          #        _         _
 *   r1c0   || r1c1   || r1c2  || r1c3   || r1c4  ||
 *   _          #          #        #         _
 *   r2c0   || r2c1   || r2c2  || r2c3   || r2c4  ||
 *   #          #          #        #         #
 *
 * @param n
 */
function pyramid(n) {
    for (let row = 0; row < n; row++){
        let str = '';
        for (let col = 0; col < (n*2-1); col++){

        }

    }

}
pyramid(4);
module.exports = pyramid;
