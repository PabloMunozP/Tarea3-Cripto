from Crypto.Cipher import DES
key = b'Secretos'
cipher = DES.new(key, DES.MODE_CFB)
plaintext = b'Texto plano'
msg = cipher.iv + cipher.encrypt(plaintext)

print(msg.hex())

html=open("index.html","wb")
codigo_html='''
    <!DOCTYPE html>

    <html>
        <head></head>
        <title>Pagina generada por python</title>
        <body>
            <p>Esta pagina contiene un mensaje secreto</p>
            <div class="DES" id= "%cifrado%"> Texto</div>
        </body>
    </html>
        '''
codigo_html=codigo_html.replace("%cifrado%",msg.hex())
html.write(codigo_html.encode("utf-8"))

html.close()