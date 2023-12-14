function hitungParkir(){
    //Dapatkan nilai inputtan user
    let masuk = document.getElementById('masuk').value
    let keluar = document.getElementById('keluar').value

    //Dapatkan elemen untuk mendapatkan hasil
    let hasilDurasi = document.querySelector('#hasilDurasi')
    let hasilBiaya = document.querySelector('#hasilBiaya')

    //hitung durasi
    let durasi = keluar - masuk
    
    //hitung biaya
    let biaya = 3000

    //setelah 2 jam pertama, tambahkan biaya perjamnya 1000
    if(durasi > 2){
        biaya += (durasi - 2) * 1000
    }

    console.log(durasi);
    console.log(biaya);

    ///Menampilkan hasil ke html
    hasilDurasi.innerHTML = durasi
    hasilBiaya.innerHTML = biaya


}