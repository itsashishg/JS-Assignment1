// Q3. Replace Vowel with Another Character

function replacevowel(str) {
      var s = str.split('');
      for (var i = 0; i < s.length; i++) {
          if(s[i]==='a')
          s[i] = '1';
          if(s[i]==='e')
          s[i] = '2';
          if(s[i]==='i')
          s[i] = '3';
          if(s[i]==='o')
          s[i] = '4';
			    if(s[i]==='u')
          s[i] = '5'; 
          else
          s[i] = String.fromCharCode(s[i].charCodeAt(0));
      }
      return s.join('');
  }
  console.log(replacevowel('karachi'));