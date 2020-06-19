let musicList = [];
let index = 0;
let myaudio;
(async () => {
    const f = await axios.get('/playlist/filelist').
                then(result => {
                    return result;
                }).catch( err => {
                    console.log(err);
                });

    
    musicList = f.data;
    addElement();
    const _myaudio = document.querySelector('.audio');
    myaudio = _myaudio;
    _myaudio.volume = 0.2;
    _myaudio.type="audio/mp3";
    _myaudio.src="../music/"+musicList[index++];
    const musicListSize = musicList.length;
    myaudio.addEventListener("ended",() => {
        if(index>=musicListSize) index = 0;
        _myaudio.src="../music/"+musicList[index++];
        _myaudio.play();
    })
    
})();

const addElement = () => {
    const parent = document.querySelector('.list-ul');
    parent.innerHTML = "";
    musicList.forEach( (music) => {
        const li = document.createElement('li');
        li.className = "music-item";

        const p = document.createElement('p');
        p.className = "title";
        p.textContent = music;

        const div = document.createElement('div');
        div.className = "buttons";

        const playBtn = document.createElement('button');
        playBtn.className = "play"
        playBtn.textContent = "▶️";
        playBtn.addEventListener("click", ()=> {
            myaudio.src=`../music/${music}`;
            myaudio.play();
            index--;
        });

        const removeBtn = document.createElement('button');
        removeBtn.className = "remove"
        removeBtn.textContent = "❌";
        removeBtn.addEventListener("click", ()=> {
            removeMusic(music, li, parent);
        })
        div.appendChild(playBtn);
        div.appendChild(removeBtn);
        li.appendChild(p);
        li.appendChild(div);
        parent.appendChild(li);
    });
}

const getMusicList = async () => {
    const f = await axios.get('/playlist/filelist').
                then(result => {
                    return result;
                }).catch( err => {
                    console.log(err);
                });

    
    musicList = f.data;
    addElement();
}

const removeMusic = async (name, target, parent) => {
    const f = await axios.get(`/playlist/remove?name=${name}`).
                then(result => {
                    return result;
                }).catch( err => {
                    console.log(err);
                });

    
    musicList = f.data;
    console.log(f.data);
    if(f.data==="ok"){
        parent.removeChild(target);
    }
}

document.querySelector('.reload').addEventListener("click", ()=> {
    getMusicList();
})