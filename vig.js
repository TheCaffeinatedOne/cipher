function vig(msgunprocessed, keyraw) {
  let alph = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let keylow = keyraw.toLowerCase();
  let keyarray = keylow.split("");
  let keyprocessed = [ ];
  let passes = 0;
  while (passes <= 3) {
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
  console.log(keyprocessed);
  var msgunprocessed1 = msgunprocessed.toLowerCase();
  var msgunprocessed2 = msgunprocessed1.split("")
   console.log(msgunprocessed2)
  var msgprocessed = [];
  var passes1 = 0
  var msglen = msgunprocessed2.length - 1
  while (passes1 <= msglen ) {
    console.log(passes1)
    switch (msgunprocessed2[passes1]) {
      case 'a':
      msgprocessed[passes1] = 1;
      console.log(msgprocessed)
        break;
      case 'b':
      msgprocessed[passes1] = 2;
      console.log(msgprocessed)
        break;
      case 'c':
      msgprocessed[passes1] = 3;
      console.log(msgprocessed)
        break;
      case 'd':
      msgprocessed[passes1] = 4;
      console.log(msgprocessed)
        break;
      case 'e':
      msgprocessed[passes1] = 5;
      console.log(msgprocessed)
        break;
      case 'f':
      msgprocessed[passes1] = 6;
      console.log(msgprocessed)
        break;
      case 'g':
      msgprocessed[passes1] = 7;
      console.log(msgprocessed)
        break;
      case 'h':
      msgprocessed[passes1] = 8;
      console.log(msgprocessed)
        break;
      case 'i':
      msgprocessed[passes1] = 9;
      console.log(msgprocessed)
        break;
      case 'j':
      msgprocessed[passes1] = 10;
      console.log(msgprocessed)
        break;
      case 'k':
      msgprocessed[passes1] = 11;
      console.log(msgprocessed)
        break;
      case 'l':
      msgprocessed[passes1] = 12;
      console.log(msgprocessed)
        break;
      case 'm':
      msgprocessed[passes1] = 13;
      console.log(msgprocessed)
        break;
      case 'n':
      msgprocessed[passes1] = 14;
      console.log(msgprocessed)
        break;
      case 'o':
      msgprocessed[passes1] = 15;
      console.log(msgprocessed)
        break;
      case 'p':
      msgprocessed[passes1] = 16;
      console.log(msgprocessed)
        break;
      case 'q':
      msgprocessed[passes1] = 17;
      console.log(msgprocessed)
        break;
      case 'r':
      msgprocessed[passes1] = 18;
      console.log(msgprocessed)

        break;
      case 's':
      msgprocessed[passes1] = 19;
      console.log(msgprocessed)
        break;
      case 't':
      msgprocessed[passes1] = 20;
      console.log(msgprocessed)
        break;
      case 'u':
      msgprocessed[passes1] = 21;
      console.log(msgprocessed)
        break;
      case 'v':
      msgprocessed[passes1] = 22;
      console.log(msgprocessed)
        break;
      case 'w':
      msgprocessed[passes1] = 23;
      console.log(msgprocessed)
        break;
      case 'x':
      msgprocessed[passes1] = 24;
      console.log(msgprocessed)
        break;
      case 'y':
      msgprocessed[passes1] = 25;
      console.log(msgprocessed)
        break;
      case 'z':
      msgprocessed[passes1] = 26;
      console.log(msgprocessed)
        break;
      default:
      msgprocessed[passes1] = 0;
      console.log(msgprocessed)
      break;
    }
    passes1++;
  }
  var final = [ ];
  var keypos = 0;
  var charpos = 0;
  var end = msgprocessed.length -1
 while (charpos <= end) {
   keypos = 0;
   //1
   var charnum = msgprocessed[charpos] + keyprocessed[keypos];
   if (charnum >= 26) {
     charnum -= 26
     ;   }
      console.log(charnum);
   final[charpos] = alph[charnum];
   console.log(final[charpos]);
   charpos++
   keypos++
   charnum = 0;
   //2
   var charnum = msgprocessed[charpos] + keyprocessed[keypos];
   if (charnum >= 26) {
     charnum -= 26;   }
  console.log(charnum);
      final[charpos] = alph[charnum];
   console.log(final[charpos]);
   charpos++
   keypos++
      charnum = 0;
   //3
   var charnum = msgprocessed[charpos] + keyprocessed[keypos];
   if (charnum >= 26) {
     charnum -= 26;
   }
   console.log(charnum);
      final[charpos] = alph[charnum];
   console.log(final[charpos]);
   charpos++
   keypos++
   charnum = 0;
   //4
   var charnum =  msgprocessed[charpos] + keyprocessed[keypos];

   if (charnum >= 26) {
     charnum -= 26;
     console.log("set back a number");
   }
   console.log(charnum);
   final[charpos] = alph[charnum];
   charpos++
   keypos++
      charnum = 0;
 }
 console.log('VIG DONE');
 return final.join('');
}
