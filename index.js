class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  } 

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let array = string.split(' ')
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      if (i == 0) { 
        newArray.push(capitalize(array[i]))
      } else {
        if (exceptions.includes(array[i])) {
          newArray.push(array[i]) 
        } else {
          newArray.push(capitalize(array[i]))
        }
      }
    }
    return newArray.join(' ');
  }

}