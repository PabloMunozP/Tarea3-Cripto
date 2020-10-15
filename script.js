// ==UserScript==
// @name         Tarea3
// @namespace    none
// @version      0.1
// @description  try to take over the world!
// @author       Pablo Munoz P.
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://cdn.jsdelivr.net/npm/node-forge@0.7.0/dist/forge.min.js
// @match        https://pablomunozp.github.io/Tarea3-Cripto/
// @grant        none
// ==/UserScript==

window.addEventListener('load', function(){

    var id=document.getElementsByClassName('DES')[0].id;
    console.log(id);

    var key = document.getElementsByClassName('key')[0].id;
    var iv = document.getElementsByClassName('iv')[0].id;
    console.log(key);
    console.log(iv);
    var decipher = forge.cipher.createDecipher('DES-CBC', key);
    decipher.start({iv: iv});
    decipher.update(id);
    var result = decipher.finish(); // check 'result' for true/false
    // outputs decrypted hex
    console.log(decipher.output.toHex());

});
