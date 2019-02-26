function load() {
    const chat = document.querySelector('#chat');
    const url = 'http://localhost/ProjekKelas/chat/chat-read.php';

    axios.get(url).then(resp => {
        chat.value = resp.data;
    });

    // timeout for 1 second
    setTimeout(load, 1000);
}

load();