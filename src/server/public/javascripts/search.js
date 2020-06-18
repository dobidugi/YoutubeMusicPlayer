const keywordSearch = async() => {
    const keyword = document.querySelector('input').value;
    const f = await axios.get('/search?keyword='+keyword).
                    then(result=>{
                        return result;
                    })
                    .catch(err => {
                        console.log(err);
                    })
    const videos = f.data;
    const parent = document.querySelector(".result");
    parent.innerHTML = "";
    videos.forEach( v => {
        addElement(v);
    })
}

const download = async(url, type) => {
    window.location.assign('/download?url='+url+'&type='+type);
}

const addPlayLsit = async(url, name) => {
    const f = await axios.get('/playlist/add?url='+url + "&name=" + name).
                    then(result=>{
                        return result;
                    })
                    .catch(err => {
                        console.log(err);
                    })
}


const addElement = function(video) {
    const parent = document.querySelector(".result");
    const li = document.createElement("li");
    li.className = "result-item";
    const img = document.createElement("img");
    img.className ="item-img";
    img.src=video.image;
    const figure = document.createElement("figure");
    const divItemOption = document.createElement("div");
    divItemOption.className="item-option";

    const divItemTitle = document.createElement("div");
    divItemTitle.className="item-title";
    const pTitle = document.createElement("p");
    pTitle.textContent = video.title;

    const divItemChannelName = document.createElement("div");
    divItemChannelName.className = "item-channelName";
    const pChannelName = document.createElement("p");
    pChannelName.textContent = video.author.name;


    const divItemDescription = document.createElement("div");
    divItemDescription.className = "item-desc";
    const pDescription = document.createElement("p");
    pDescription.textContent = video.description;

    const divItemView = document.createElement("div");
    divItemView.className = "item-view";
    const pView = document.createElement("p");
    pView.textContent = `👁 ${video.views}`;

    const divItembtns = document.createElement("div");
    divItembtns.className = "item-btns";
    const downloadBtn = document.createElement("button");
    const downloadBtn2 = document.createElement("button");
    const addListBtn = document.createElement("button");
    downloadBtn.className = "download-btn btn";
    downloadBtn.textContent = "Download mp4";
    downloadBtn2.className = "download-btn btn";
    downloadBtn2.textContent = "Download mp3";
    addListBtn.className = "add-playlist-btn btn";
    addListBtn.textContent = "add-playList";
    downloadBtn.addEventListener("click", () => {
        download(video.url,"mp4")
    });
    downloadBtn2.addEventListener("click", () => {
        download(video.url,"mp3")
    });

    addListBtn.addEventListener("click", () =>{
        addPlayLsit(video.url, video.title);
    });

    divItemTitle.appendChild(pTitle);
    divItemChannelName.appendChild(pChannelName);
    divItemDescription.appendChild(pDescription);
    divItemView.appendChild(pView);
    divItembtns.appendChild(downloadBtn);
    divItembtns.appendChild(downloadBtn2);
    divItembtns.appendChild(addListBtn);

    divItemOption.appendChild(divItemTitle);
    divItemOption.appendChild(divItemChannelName);
    divItemOption.appendChild(divItemDescription);
    divItemOption.appendChild(divItemView);
    divItemOption.appendChild(divItembtns);

    figure.appendChild(img);
    li.appendChild(figure);
    li.appendChild(divItemOption);
    parent.appendChild(li);

}

document.querySelector(".search-btn").addEventListener("click", keywordSearch);

document.querySelector('input').addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        keywordSearch();
    }
})
