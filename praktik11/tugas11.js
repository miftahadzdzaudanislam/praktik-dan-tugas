function hitungKurs(){
    // Dapatkan nilai inputtan user
    let kurs = document.getElementById('kurs').value

    // Dapatkan elemen untuk mendapatkan hasil
    let kerupiah = document.getElementById('kerupiah')

    // hitung kurs ke rupiah
    let rupiah = kurs * 14650;

    // pemisah ribuan pada hasil
    let rupiahasli = rupiah.toLocaleString('id-ID');

    console.log(rupiahasli);

    // Menamplkan hasil ke hml
    kerupiah.innerHTML = rupiahasli
}
// 14650

function hitungDuaBilangan(){
    // Dapatkan nilah inputtan user
    let bil1 = parseFloat(document.getElementById('bil1').value);
    let bil2 = parseFloat(document.getElementById('bil2').value);

    // Dapatkan alamen untuk mendapatkan hasil
    let hasil = document.getElementById('hasil')

    // Hitung penjumahan
    let hasiltambah =  bil1 + bil2

    console.log(hasiltambah)

    // Menampilkan hasil ke html
    hasil.value = hasiltambah
}