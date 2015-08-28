var here = require('./')
var assert = require('assert')

assert.deepEqual(
  here([ [ '1', '2' ] ]),
  [ [ '1' ], [ '2' ] ])

assert.deepEqual(
  here([
    [ '1', '2' ],
    [ 'a', 'b', 'c' ],
    [ 'x', 'y' ] ]),
  [ [ '1', 'a', 'x' ],
    [ '1', 'a', 'y' ],
    [ '1', 'b', 'x' ],
    [ '1', 'b', 'y' ],
    [ '1', 'c', 'x' ],
    [ '1', 'c', 'y' ],
    [ '2', 'a', 'x' ],
    [ '2', 'a', 'y' ],
    [ '2', 'b', 'x' ],
    [ '2', 'b', 'y' ],
    [ '2', 'c', 'x' ],
    [ '2', 'c', 'y' ] ])

