module.exports = function recurse(list, prefix) {
  if (prefix === undefined) {
    prefix = [ ] }
  var length = list.length
  var first = list[0]
  if (length === 1) {
    return first
      .reduce(
        function(result, element) {
          return result
            .concat([ prefix.concat(element) ]) },
        [ ]) }
  else {
    return first
      .reduce(
        function(result, element) {
          return result
            .concat(
              recurse(
                list.slice(1),
                prefix.concat(element)))},
        [ ]) } }
