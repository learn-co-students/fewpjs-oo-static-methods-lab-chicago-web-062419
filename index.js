class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let newString = [];
    let wordArray = sentence.split( " " )
    for ( let n = 0; n < wordArray.length; n++ ) {
      if ( n == 0 ) {
       newString.push( this.capitalize( wordArray[ n ] ) )
      } else {
        if ( exceptions.includes( wordArray[ n ] ) ) {
          newString.push( wordArray[ n ] )
        } else {
          newString.push( this.capitalize( wordArray[ n ] ) )
        }
      }

    }
    return newString.join( " " );
  }
}
