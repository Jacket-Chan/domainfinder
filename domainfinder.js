function generateDomains(search, tldlist) {
  var results1 = search.filter(word => tldlist.some(word2 => word.endsWith(word2)));
  console.log(results1);
  var results2 = results1.flatMap(word3 => tldlist.filter(word4 => word4 == word3.slice(0 - word4.length)).map(word5 => word3.slice(0, 0 - word5.length)+"."+word5));
  console.log(results2);
  return results2;
}
