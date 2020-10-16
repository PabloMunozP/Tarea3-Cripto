// ==UserScript==
// @name         Tarea3
// @namespace    none
// @version      1.1
// @description  try to take over the world!
// @author       Pablo Munoz P.
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/forge/0.10.0/forge.all.min.js
// @match        https://pablomunozp.github.io/Tarea3-Cripto/
// @updateURL   https://github.com/PabloMunozP/Tarea3-Cripto/blob/master/script.js
// ==/UserScript==

window.addEventListener('load', function(){
    'use strict';
    //Para cambiar los valores de desencriptacion
    var msg = document.getElementsByClassName('DES')[0].id;
    var key = document.getElementsByClassName('key')[0].id;
    var iv = document.getElementsByClassName('iv')[0].id;

    console.log('msg: ' + msg, 'key: '+key, 'iv: ' +iv);
    //desencriptar con js
    var decipher = forge.cipher.createDecipher('DES-CFB', key);
    msg=forge.util.createBuffer(msg);
    decipher.start({iv: iv});
    decipher.update(msg);
    var result = decipher.finish(); 
    decipher=decipher.output;
    console.log(decipher.toHex());
});