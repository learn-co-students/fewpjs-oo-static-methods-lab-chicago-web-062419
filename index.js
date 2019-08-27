class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let x = string.split(" ")
    for(let i = 0; i < x.length; i++){
      if(i === 0) {
        result.push(this.capitalize(x[i]))
      }else{
        if(words.includes(x[i])){
          result.push(x[i])
        }else {
          result.push(this.capitalize(x[i]))
        }
      }
    }
    return result.join(" ")
  }
}