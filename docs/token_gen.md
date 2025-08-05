🧩 1. Apa itu Token?
Token itu representasi nilai digital yang dibuat di atas blockchain.

Bisa mewakili aset nyata (misal voucher wisata, tiket, point loyalti, bahkan saham)

Atau sekadar unit digital untuk sistem internal Anda (misal STT: SmartTourismToken)

Di Ethereum (Sepolia termasuk), token biasanya pakai standar ERC-20

Jadi: Anda membuat token sama aja seperti Anda membuat mata uang digital sendiri, yang hidup di atas Ethereum.

---

🪪 2. Simbol Token (Symbol)
Simbol merupakan singkatan dari nama token.

Contoh:

Nama: Smart Tourism Token

Simbol: STT

Ini yang nanti akan muncul di wallet Anda sebagai label

Analoginya seperti "Rupiah" (nama) dan "IDR" (simbol).

---

🪙 3. Total Supply
Total Supply adalah jumlah token yang diciptakan saat awal deploy kontrak.

Misal Anda tulis: 1000000 → berarti Anda mencetak 1 juta token

Token ini langsung dikirim ke address wallet yang melakukan deploy (atau Anda sendiri via MetaMask)

Supply ini sifatnya fixed jika smart contract Anda tidak mengaktifkan fitur mint() tambahan

Jadi jika Anda membuat token loyalti untuk wisata, Anda bisa atur supply-nya tetap, biar terasa lebih eksklusif.

---

🔗 4. Alamat Kontrak (Contract Address)
Ini adalah alamat unik tempat smart contract token Anda disimpan di blockchain.

Mirip seperti “lokasi permanen” di dunia blockchain

Bisa dicek di Block Explorer (misalnya: Sepolia Etherscan)

Semua transaksi ke token ini akan mengacu ke alamat ini
