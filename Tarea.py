from Crypto.Cipher import DES

key = 'Secretos'#El tamaño maximo debe ser de 8bytes
plaintext = 'Texto plano'
iv= 'IVsecret'#El tamaño maximo debe ser de 8bytes

bkey=bytes(key,'utf8')
biv= bytes(iv,'utf8')
bplain=bytes(plaintext,'utf8')

cipher = DES.new(bkey, DES.MODE_CFB,biv)

msg =  cipher.encrypt(bplain)

cipher2=DES.new(bkey, DES.MODE_CFB,biv)
msg2=cipher2.decrypt(msg)


print(msg,bkey.hex(),biv.hex())
print(msg2)
html=open("index.html","w")
html.write('''
    <!DOCTYPE html>

    <html>
        <head></head>
        <title>Pagina generada por python</title>
        <body>
            <p>Esta pagina contiene un mensaje secreto</p>
            <div class="key" id= "%s"> Texto key</div>
            <div class="DES" id= "%s"> Texto des</div>
            <div class="iv" id= "%s"> Texto iv </div>
        </body>
    </html>
        '''% (bkey.hex(),msg.hex(),biv.hex()))

html.close()

