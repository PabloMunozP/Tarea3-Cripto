// ==UserScript==
// @name         Tarea3
// @namespace    none
// @version      0.1
// @description  try to take over the world!
// @author       Pablo Munoz P.
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/forge/0.10.0/forge.all.min.js
// @match        https://pablomunozp.github.io/Tarea3-Cripto/
// @grant        none
// ==/UserScript==

window.addEventListener('load', function(){
    'use strict';
    var ivmsg = document.getElementsByClassName('DES')[0].id;
    var key = document.getElementsByClassName('key')[0].id;
    var iv = document.getElementsByClassName('iv')[0].id;
    //console.log('msg: ' + ivmsg, 'key: '+key, 'iv: ' +iv);
//##########################################################
    var msg=ivmsg.slice(iv.length)
    //console.log(CryptoJS.enc.Utf8.parse(key))


    //var test = CryptoJS.DES.encrypt(msg,key,{iv: iv, mode: CryptoJS.mode.CFB})
    //console.log(test.ciphertext.toString(CryptoJS.enc.Hex))
    //var d=CryptoJS.DES.decrypt(msg,'Secretos',{iv: iv, mode: CryptoJS.mode.CFB});
    //console.log(d, d.toString(CryptoJS.enc.Latin1));
    //var words = CryptoJS.enc.Hex.parse("48656c6c6f2c20576f726c6421");
    //var hex = CryptoJS.enc.Hex.stringify(words);
    //console.log( words,hex);
    var cipher = forge.cipher.createCipher('DES-CFB', key);
    cipher.start({iv: iv});
    cipher.update(forge.util.createBuffer('Texto plano','utf8'));
    cipher.finish();
    var encrypted = cipher.output;
    // outputs encrypted hex
    console.log(encrypted.toHex());


    var decipher = forge.cipher.createDecipher('DES-CFB', key);
    decipher.start({iv: iv});
    decipher.update(encrypted);
    var result = decipher.finish(); // check 'result' for true/false
    // outputs decrypted hex
    console.log(decipher);
});