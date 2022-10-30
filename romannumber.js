 str = "LVIII"
 t = str.split("");
 object = {
     "L": 50,
     "V": 10,
     "I": 1
 }
 const splitted = str.split("").map(key => object[key])
 console.log(splitted.reduce((acc, val) => acc + val))


 //  for (let i = 0; i < str.length; i++) {
 //      c = str.reduce((acc, val) => acc + val)
 //      console.log(c)
 //  }