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

const message = document.querySelector('#message');

message.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
        const text = message.value;
        const url = `http://localhost/ProjekKelas/chat/chat-write.php?text=${text}`;

        message.value = '';
        axios.get(url);
    }
});