const prompt = require("prompt-sync")({ sigint: true });
function vig(msgunprocessed, keyraw) {
  let alph = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let keylow = keyraw.toLowerCase();
  let keyarray = keylow.split("");
  let keyprocessed = [ ];
  let passes = 0;
  while (passes <= keyarray.length) {
    switch (keyarray[passes]) {
      case 'a':
      keyprocessed[passes] = 1;
        break;
      case 'b':
      keyprocessed[passes] = 2;
        break;
      case 'c':
      keyprocessed[passes] = 3;
        break;
      case 'd':
      keyprocessed[passes] = 4;
        break;
      case 'e':
      keyprocessed[passes] = 5;
        break;
      case 'f':
      keyprocessed[passes] = 6;
        break;
      case 'g':
      keyprocessed[passes] = 7;
        break;
      case 'h':
      keyprocessed[passes] = 8;
        break;
      case 'i':
      keyprocessed[passes] = 9;
        break;
      case 'j':
      keyprocessed[passes] = 10;
        break;
      case 'k':
      keyprocessed[passes] = 11;
        break;
      case 'l':
      keyprocessed[passes] = 12;
        break;
      case 'm':
      keyprocessed[passes] = 13;
        break;
      case 'n':
      keyprocessed[passes] = 14;
        break;
      case 'o':
      keyprocessed[passes] = 15;
        break;
      case 'p':
      keyprocessed[passes] = 16;
        break;
      case 'q':
      keyprocessed[passes] = 17;
        break;
      case 'r':
      keyprocessed[passes] = 18;
        break;
      case 's':
      keyprocessed[passes] = 19;
        break;
      case 't':
      keyprocessed[passes] = 20;
        break;
      case 'u':
      keyprocessed[passes] = 21;
        break;
      case 'v':
      keyprocessed[passes] = 22;
        break;
      case 'w':
      keyprocessed[passes] = 23;
        break;
      case 'x':
      keyprocessed[passes] = 24;
        break;
      case 'y':
      keyprocessed[passes] = 25;
        break;
      case 'z':
      keyprocessed[passes] = 26;
        break;
    }
    passes++;
  }
  var msgunprocessed1 = msgunprocessed.toLowerCase();
  var msgunprocessed2 = msgunprocessed1.split("")
  var msgprocessed = [];
  var passes1 = 0
  var msglen = msgunprocessed2.length
  while (passes1 <= msglen ) {
    switch (msgunprocessed2[passes1]) {
      case 'a':
      msgprocessed[passes1] = 1;
        break;
      case 'b':
      msgprocessed[passes1] = 2;
        break;
      case 'c':
      msgprocessed[passes1] = 3;
        break;
      case 'd':
      msgprocessed[passes1] = 4;
        break;
      case 'e':
      msgprocessed[passes1] = 5;
        break;
      case 'f':
      msgprocessed[passes1] = 6;
        break;
      case 'g':
      msgprocessed[passes1] = 7;
        break;
      case 'h':
      msgprocessed[passes1] = 8;
        break;
      case 'i':
      msgprocessed[passes1] = 9;
        break;
      case 'j':
      msgprocessed[passes1] = 10;
        break;
      case 'k':
      msgprocessed[passes1] = 11;
        break;
      case 'l':
      msgprocessed[passes1] = 12;
        break;
      case 'm':
      msgprocessed[passes1] = 13;
        break;
      case 'n':
      msgprocessed[passes1] = 14;
        break;
      case 'o':
      msgprocessed[passes1] = 15;
        break;
      case 'p':
      msgprocessed[passes1] = 16;
        break;
      case 'q':
      msgprocessed[passes1] = 17;
        break;
      case 'r':
      msgprocessed[passes1] = 18;

        break;
      case 's':
      msgprocessed[passes1] = 19;
        break;
      case 't':
      msgprocessed[passes1] = 20;
        break;
      case 'u':
      msgprocessed[passes1] = 21;
        break;
      case 'v':
      msgprocessed[passes1] = 22;
        break;
      case 'w':
      msgprocessed[passes1] = 23;
        break;
      case 'x':
      msgprocessed[passes1] = 24;
        break;
      case 'y':
      msgprocessed[passes1] = 25;
        break;
      case 'z':
      msgprocessed[passes1] = 26;
        break;
      default:
      msgprocessed[passes1] = 0;
      break;
    }
    passes1++;
  }
  var final = [ ];
  var keypos = 0;
  var charpos = 0;
  var end = msgprocessed.length
 while (charpos <= end) {
   //1
   var charnum = msgprocessed[charpos] + keyprocessed[keypos];
   if (charnum >= 26) {
     charnum -= 26
     ;   }
   final[charpos] = alph[charnum];
   charpos++
   keypos++
   charnum = 0;
   if (keypos >= keyprocessed.length) {
     keypos=0;
   }
   //2
   var charnum = msgprocessed[charpos] + keyprocessed[keypos];
   if (charnum >= 26) {
     charnum -= 26;   }
      final[charpos] = alph[charnum];
   charpos++
   keypos++
      charnum = 0;
      if (keypos >= keyprocessed.length) {
        keypos=0;
      }
   //3
   var charnum = msgprocessed[charpos] + keyprocessed[keypos];
   if (charnum >= 26) {
     charnum -= 26;
   }
      final[charpos] = alph[charnum];
   charpos++
   keypos++
   charnum = 0;
   if (keypos >= keyprocessed.length) {
     keypos=0;
   }
   //4
   var charnum =  msgprocessed[charpos] + keyprocessed[keypos];

   if (charnum >= 26) {
     charnum -= 26;
   }
   final[charpos] = alph[charnum];
   charpos++
   keypos++
      charnum = 0;
   if (keypos >= keyprocessed.length) {
     keypos=0;
   }
 }
 console.log('encryption done, output below;');
 return final.join('');
}
function unvig(msgunprocessed, keyraw) {
  let alph = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let keylow = keyraw.toLowerCase();
  let keyarray = keylow.split("");
  let keyprocessed = [ ];
  let passes = 0;
  while (passes <= keyarray.length) {
    switch (keyarray[passes]) {
      case 'a':
      keyprocessed[passes] = 1;
        break;
      case 'b':
      keyprocessed[passes] = 2;
        break;
      case 'c':
      keyprocessed[passes] = 3;
        break;
      case 'd':
      keyprocessed[passes] = 4;
        break;
      case 'e':
      keyprocessed[passes] = 5;
        break;
      case 'f':
      keyprocessed[passes] = 6;
        break;
      case 'g':
      keyprocessed[passes] = 7;
        break;
      case 'h':
      keyprocessed[passes] = 8;
        break;
      case 'i':
      keyprocessed[passes] = 9;
        break;
      case 'j':
      keyprocessed[passes] = 10;
        break;
      case 'k':
      keyprocessed[passes] = 11;
        break;
      case 'l':
      keyprocessed[passes] = 12;
        break;
      case 'm':
      keyprocessed[passes] = 13;
        break;
      case 'n':
      keyprocessed[passes] = 14;
        break;
      case 'o':
      keyprocessed[passes] = 15;
        break;
      case 'p':
      keyprocessed[passes] = 16;
        break;
      case 'q':
      keyprocessed[passes] = 17;
        break;
      case 'r':
      keyprocessed[passes] = 18;
        break;
      case 's':
      keyprocessed[passes] = 19;
        break;
      case 't':
      keyprocessed[passes] = 20;
        break;
      case 'u':
      keyprocessed[passes] = 21;
        break;
      case 'v':
      keyprocessed[passes] = 22;
        break;
      case 'w':
      keyprocessed[passes] = 23;
        break;
      case 'x':
      keyprocessed[passes] = 24;
        break;
      case 'y':
      keyprocessed[passes] = 25;
        break;
      case 'z':
      keyprocessed[passes] = 26;
        break;
    }
    passes++;
  }
  var msgunprocessed1 = msgunprocessed.toLowerCase();
  var msgunprocessed2 = msgunprocessed1.split("")
  var msgprocessed = [];
  var passes1 = 0
  var msglen = msgunprocessed2.length
  while (passes1 <= msglen ) {
    switch (msgunprocessed2[passes1]) {
      case 'a':
      msgprocessed[passes1] = 1;
        break;
      case 'b':
      msgprocessed[passes1] = 2;
        break;
      case 'c':
      msgprocessed[passes1] = 3;
        break;
      case 'd':
      msgprocessed[passes1] = 4;
        break;
      case 'e':
      msgprocessed[passes1] = 5;
      console.log()
        break;
      case 'f':
      msgprocessed[passes1] = 6;
        break;
      case 'g':
      msgprocessed[passes1] = 7;
        break;
      case 'h':
      msgprocessed[passes1] = 8;
        break;
      case 'i':
      msgprocessed[passes1] = 9;
        break;
      case 'j':
      msgprocessed[passes1] = 10;
        break;
      case 'k':
      msgprocessed[passes1] = 11;
        break;
      case 'l':
      msgprocessed[passes1] = 12;
        break;
      case 'm':
      msgprocessed[passes1] = 13;
        break;
      case 'n':
      msgprocessed[passes1] = 14;
        break;
      case 'o':
      msgprocessed[passes1] = 15;
        break;
      case 'p':
      msgprocessed[passes1] = 16;
        break;
      case 'q':
      msgprocessed[passes1] = 17;
        break;
      case 'r':
      msgprocessed[passes1] = 18;
        break;
      case 's':
      msgprocessed[passes1] = 19;
        break;
      case 't':
      msgprocessed[passes1] = 20;
        break;
      case 'u':
      msgprocessed[passes1] = 21;
        break;
      case 'v':
      msgprocessed[passes1] = 22;
        break;
      case 'w':
      msgprocessed[passes1] = 23;
        break;
      case 'x':
      msgprocessed[passes1] = 24;
        break;
      case 'y':
      msgprocessed[passes1] = 25;
        break;
      case 'z':
      msgprocessed[passes1] = 26;
        break;
      default:
      msgprocessed[passes1] = 0;
      break;
    }
    passes1++;
  }
  var final = [ ];
  var keypos = 0;
  var charpos = 0;
  var end = msgprocessed.length
 while (charpos <= end) {

   //1
   var charnum = msgprocessed[charpos] - keyprocessed[keypos];
   if (charnum < 0) {
     charnum += 26;
   }

   final[charpos] = alph[charnum];
   charpos++
   keypos++
   if (keypos >= keyprocessed.length) {
     keypos=0;
   }
   //2
   var charnum = msgprocessed[charpos] - keyprocessed[keypos];
   if (charnum < 0) {
     charnum += 26;
   }
   final[charpos] = alph[charnum];
   charpos++
   keypos++
   if (keypos >= keyprocessed.length) {
     keypos=0;
   }
   //3
   var charnum = msgprocessed[charpos] - keyprocessed[keypos];
   if (charnum < 0) {
     charnum += 26;
   }
   final[charpos] = alph[charnum];
   charpos++
   keypos++
   if (keypos >= keyprocessed.length) {
     keypos=0;
   }
   //4
   var charnum =  msgprocessed[charpos] - keyprocessed[keypos];
   if (charnum < 0) {
     charnum += 26;
   }
   final[charpos] = alph[charnum];
   charpos++
   keypos++
   if (keypos >= keyprocessed.length) {
     keypos=0;
   }
      charnum = 0;
  if (keypos >= keyprocessed.length) {
    keyprocessed = 0;
  }
 }

 console.log("decryption done, output below;")
 return final.join('');
}
//where the stuff happens
var yee = true;
while (yee == true) {
console.clear()
console.log("██████╗ ██╗      ██████╗  ██████╗██╗  ██╗     ██████╗██╗██████╗ ██╗  ██╗███████╗██████╗")
console.log("██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝    ██╔════╝██║██╔══██╗██║  ██║██╔════╝██╔══██╗")
console.log("██████╔╝██║     ██║   ██║██║     █████╔╝     ██║     ██║██████╔╝███████║█████╗  ██████╔╝  ")
console.log("██╔══██╗██║     ██║   ██║██║     ██╔═██╗     ██║     ██║██╔═══╝ ██╔══██║██╔══╝  ██╔══██╗    ")
console.log("██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗    ╚██████╗██║██║     ██║  ██║███████╗██║  ██║    ")
console.log("╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝     ╚═════╝╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ")
console.log(" ██╗██████╗ ███████╗████████╗ █████╗ ██╗                                                    ")
console.log("██╔╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗╚██╗                                                   ")
console.log("██║ ██████╔╝█████╗     ██║   ███████║ ██║                                                   ")
console.log("██║ ██╔══██╗██╔══╝     ██║   ██╔══██║ ██║                                                   ")
console.log("╚██╗██████╔╝███████╗   ██║   ██║  ██║██╔╝                                                   ")
console.log(" ╚═╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝                                                    ")
console.log("")
console.log("")
console.log("")
console.log("")

//       ██████╗ █████╗ ███████╗███████╗███████╗██╗███╗   ██╗ █████╗ ████████╗███████╗██████╗
//      ██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝██║████╗  ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
//█████╗██║     ███████║█████╗  █████╗  █████╗  ██║██╔██╗ ██║███████║   ██║   █████╗  ██║  ██║
//╚════╝██║     ██╔══██║██╔══╝  ██╔══╝  ██╔══╝  ██║██║╚██╗██║██╔══██║   ██║   ██╔══╝  ██║  ██║
//      ╚██████╗██║  ██║██║     ██║     ███████╗██║██║ ╚████║██║  ██║   ██║   ███████╗██████╔╝
//       ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝




var choice = prompt("Encrypt(1) or Decrypt(2)   }");
if (choice == "2") {
    var msgunprocessed = prompt("what is your message   }");
    var keyraw = prompt("what is your key   }")
    console.log(unvig(msgunprocessed, keyraw) + "}");
}else if (choice == "1") {
  var msg = prompt("what is your message   }")
  var key = prompt("what is your key    }")
  console.log(vig(msg, key) + "}");
}
console.log('')
console.log("enter to repeat, ctrl-c to exit")
prompt("")
console.clear()
}
