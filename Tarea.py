from Crypto.Cipher import DES
from base64 import b64encode

key = 'Secretos'#El tamaño maximo debe ser de 8bytes
plaintext = 'Texto plano'
iv= 'IVsecret'#El tamaño maximo debe ser de 8bytes

bkey=bytes(key,'utf8')
biv= bytes(iv,'utf8')
bplain=bytes(plaintext,'utf8')

cipher = DES.new(bkey, DES.MODE_CFB,biv)
msg = cipher.encrypt(bplain)
msg=b64encode(msg).decode('utf-8')
biv=b64encode(biv).decode('utf-8')
bkey=b64encode(bkey).decode('utf-8')

print(msg,bkey,biv)
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
        '''% (bkey,msg,biv))

html.close()

