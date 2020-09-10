function generateDomains(search, tldlist) {
  // this function takes in an array of names and an array of top level domains (tlds) and returns an array of matches between them.
  return search.filter(word => tldlist.some(word2 => word.endsWith(word2))).flatMap(word3 => tldlist.filter(word4 => word4 == word3.slice(0 - word4.length)).map(word5 => word3.slice(0, 0 - word5.length)+"."+word5));
}
