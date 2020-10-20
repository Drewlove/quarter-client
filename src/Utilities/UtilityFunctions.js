export const CapitalizeAllWords = (str) => {
  let strArr = str.split(" ")
  let newArr = strArr.map(word => {
    return `${word[0].toUpperCase()}${word.substring(1)}`
  })
  return newArr.join(" "); 
}

export const Hyphenate = (str) => {
  let strArr = str.split(" "); 
  return strArr.join("-"); 
}


