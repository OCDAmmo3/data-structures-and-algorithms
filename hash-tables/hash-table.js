'use strict';

const hashString = string => {
  let a = 1;
  let c = 0;
  let h;
  let o;
  if(typeof string !== 'string') {
    return 'I need a string';
  }
  if(string) {
    a = 0;
    for(h = string.length - 1; h >= 0; h--) {
      o = string.charCodeAt(h);
      a = (a<<6&268435455) + o + (o<<14);
      c = a & 266338304;
      a = c!==0?a^c>>21:a;
    }
  }
  return String(a);
};

module.exports = hashString;
