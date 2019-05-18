exports.findContent = findContent

function findContent (items, searchTerm) {
  var matches = []
  searchTerm = searchTerm.toLowerCase();
  for (var i = 0; i < items.length; i++) {
    if (items[i].tags) {
      for (var j = 0; j < items[i].tags.length; j++) {
        if (searchTerm == items[i].tags[j].toLowerCase()) {
          matches.push(items[i])
          break
        }
        else if (searchTerm.substring(0, 3) == items[i].tags[j].toLowerCase().substring(0,3)) {
          matches.push(items[i])
          break
        }
      }
    }
  }
  return matches
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
