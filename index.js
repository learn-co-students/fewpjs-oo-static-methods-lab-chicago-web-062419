class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let excepts = ['the', 'a', 'an', 'but', 'of', 'and','for', 'at', 'by', 'from']
    let splitArray = string.split(" ")
    let titleized = []
    for(let word of splitArray){
      if(word == splitArray[0]){
        titleized.push(Formatter.capitalize(word))
      } else if(excepts.includes(word)){
        titleized.push(word)
      } else {
        titleized.push(Formatter.capitalize(word))
      }
    }
    return titleized.join(" ")
  }
}