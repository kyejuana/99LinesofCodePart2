function playSong(){
    let friends = ['Tristan', 'Chris', 'Rose', 'Nikki', 'Annie']
    for (let i = 0; i < friends.length; i++) {
        let friendDiv = document.createElement('div');
        friendDiv.className = 'friend';
        let friendName = document.createElement('h3');
        friendName.innerText = friends[i] + ': ';
        document.body.appendChild(friendDiv);
        let para = document.getElementsByClassName('friend');
        para[i].appendChild(friendName);
        let j = friends;
        for (let j = 99; j > 0; j--){
            let friendName = document.createElement('h3');
            let song = document.createElement('p');
            if(j>2){
                song.innerText = '' + j + ' lines of code on the screen, ' + j + ' lines of code...' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.';
            } else if (j == 2) {
                song.innerText = '' + j + ' lines of code on the screen, ' + j + ' lines of code...' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file.';    
            } else if (j == 1) {
                song.innerText = '' + j + ' line of code on the screen, ' + j + ' line of code...' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.';
            }
            document.body.appendChild(song);
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("singbutton").addEventListener('click', function() {
        playSong();
    })
})
