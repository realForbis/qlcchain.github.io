# Python SDK

Python SDK for interacting with QLC node

```python
from pyqlc.client import Client

def example():
	qlc = Client("http://127.0.0.1:9735")
	
	accounts = qlc.Account.newAccounts(3)

	for idx, addr in enumerate(accounts):
		print(f"{idx} ==> {addr}")

example()
"""
Output:

0 ==> {
    'address': 'qlc_1i5emtz19w75cnzpcm3gn96smp4se8s5cn8potw7si456tapz3npemjwwami',
    'privKey': b'cc8f2fb68202526ebab7a968fa81883c29785dc4599e46126f422b11f4402f3f406c9ebe03f0a3553f654c2ea1c999d85961b23550d6aeb85cc04326916f8696',
    'pubKey': b'406c9ebe03f0a3553f654c2ea1c999d85961b23550d6aeb85cc04326916f8696',
    'seed': '7e6cbeb02e3247ae82fd0f0eb5030ed857c516f5fa4bba513ede65dffa863d31'
    }
1 ==> {
    'address': 'qlc_3duidxc7cuizuoj8gx7crpykbibweqe9kpc9fsgohz6arfzowoki5ip7ddcw',
    'privKey': b'ba9f8339fc6b0950d5b3afa3aaaad1518d32d098aa3f2715e1247acf45a72569af705f54556e1fdd626774aac5bd24c13c65d87959476e5d57fc88c37f5e5650',
    'pubKey': b'af705f54556e1fdd626774aac5bd24c13c65d87959476e5d57fc88c37f5e5650',
    'seed': '256d61e9a26f1209e62daff747e2caa959211324c1ffee04df3bbdeaa5c197d4'
    }
2 ==> {
    'address': 'qlc_3pe9cd67cbhtjgh67g79qdi9o8poto9jnyznsk5ofb6u8xaf1urnytsno345',
    'privKey': b'5e8d3b00cef26f73660144287dbe0c705825ba780fcba1828d41dd423cd5dc7ad98752c85525fa8b9e42b8a7bae07a9ad5d54f1a7bf4cc8756a49b3750d06f14',
    'pubKey': b'd98752c85525fa8b9e42b8a7bae07a9ad5d54f1a7bf4cc8756a49b3750d06f14',
    'seed': 'd20d72e3fb07b4936d8eee49cb23cf4e796fca566af07eaaf6c8578ab257103b'
    }
"""
```
