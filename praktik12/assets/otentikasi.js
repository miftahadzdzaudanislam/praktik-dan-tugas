function auth () {
    const username = 'Miftah' 
    const password = '6612399'

    // dapatkan input user
    let userInput = document.getElementById('username').value
    let passwordInput = document.getElementById('password').value

    // kondisi
    if (username == userInput && password == passwordInput){
        alert('Login Berhasil')
        document.location = 'home.html'
    } else {
        alert('Login Gagal')
    }
} 