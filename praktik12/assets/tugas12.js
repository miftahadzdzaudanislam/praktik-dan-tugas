function kirim(){
    // Dapatkan inputtan
    let namamu = document.getElementById('pelanggan').value;
    let emailmu = document.getElementById('email').value;
    let jam = document.getElementById('waktu').value;
    let tujuan = document.getElementById('tujuan').value;
    let tiket = document.getElementById('tiket').value;

    document.getElementById('pelanggan').style.borderColor = '';
    document.getElementById('email').style.borderColor = '';
    document.getElementById('waktu').style.borderColor = '';
    document.getElementById('tujuan').style.borderColor = '';
    document.getElementById('tiket').style.borderColor = '';

    // error
    let errornama = '';
    let erroremail = '';
    let errorwaktu = '';
    let errortujuan = '';
    let errortiket = '';

    // kondisi
    if (namamu == ''){
        errornama = 'Harap isi nama anda';
        document.getElementById('pelanggan').style.borderColor = 'red';
    }if (emailmu == ''){
        erroremail = 'Harap isi email anda';
        document.getElementById('email').style.borderColor = 'red'
    }else if (emailmu.indexOf("@") == -1) {
        erroremail = "Email harus ada karakter '@'";
        document.getElementById('email').style.borderColor = 'red'
      }
    if (jam == ''){
        errorwaktu = 'Harap tentukan waktunya';
        document.getElementById('waktu').style.borderColor = 'red'
    }if (tujuan == ''){
        errortujuan = 'Harap tentukan tempatnya';
        document.getElementById('tujuan').style.borderColor = 'red'
    }if (tiket == 0 || tiket > 9){
        errortiket = 'Harap masukan jumlah tiket dari 1-9'
        document.getElementById('tiket').style.borderColor = 'red'
    }

    // pesan error
    document.getElementById('errornama').innerHTML = errornama;
    document.getElementById('erroremail').innerHTML = erroremail;
    document.getElementById('errorwaktu').innerHTML = errorwaktu;
    document.getElementById('errortujuan').innerHTML = errortujuan;
    document.getElementById('errortiket').innerHTML = errortiket;

    // outpuutan
    if (errornama == '' && erroremail == '' && errorwaktu == '' && 
        errortujuan == '' && errortiket == 0){
        let outputdata = document.getElementById('outputdata');
        let outputitem = document.createElement('div');
        outputitem.innerHTML = '<div><p>Nama: ' + namamu + '<br>Email: ' + 
        emailmu + '<br>Pukul: ' + jam + '<br>Tujuan: ' + tujuan
        + '<br>Tiket: ' + tiket + '<br>==========================</p></div>';
        outputdata.appendChild(outputitem);

        document.getElementById('pelanggan').value = '';
        document.getElementById('email').value = '';
        document.getElementById('waktu').value = '';
        document.getElementById('tujuan').value = '';
        document.getElementById('tiket').value = 0;
    }
}