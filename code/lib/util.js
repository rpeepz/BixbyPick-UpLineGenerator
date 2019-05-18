exports.findContent = findContent

function findContent (items, searchTerm) {
  var matches = []
  searchTerm = searchTerm.toLowerCase();
  for (var i = 0; i < items.length; i++) {
    if (items[i].tags) {
      for (var j = 0; j < items[i].tags.length; j++) {
        if (strncmp(searchTerm, items[i].tags[j].toLowerCase, 3)) {
          matches.push(items[i])
          break
        }
        if (searchTerm == items[i].tags[j].toLowerCase()) {
          matches.push(items[i])
          break
        }
      }
    }
  }
  return matches
}

function strncmp(str1, str2, n) {
  str1 = str1.substring(0, n);
  str2 = str2.substring(0, n);
  return ( ( str1 == str2 ) ? 0 : (( str1 > str2 ) ? 1 : -1 ));
}
// Javascript way using filters
/*exports.findContentJS = findContentJS
function findContentJS (items, searchTerm) {
  var matches = items.filter(function (x) {
    if (x.tags) {
      // Filter on filter 
      var matchTag = x.tags.filter(function (y) {
        return y == searchTerm
      });
      return (matchTag != "");
    }
  });
  return matches;
}*/
