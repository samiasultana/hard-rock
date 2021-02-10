const searchSong = () => {
    const searchText = document.getElementById("search-field").value;
    // console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displaySongs(data.data))
};
const displaySongs = songs => {
    console.log(songs);
    const songContainer = document.getElementById("song-container");
    // songs.forEach(song => console.log(song.title)
    songs.forEach(song => {
        const divSong = document.createElement("div");
        divSong.className = "single-result row align-items-center my-3 p-3"

        // li.innerText = song.title;
        // songContainer.appendChild(li);
        divSong.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
                <audio controls>
                    <source src="${song.preview}" type="audio/ogg">
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        </div>
        `;
        songContainer.appendChild(divSong);
    }
    )
}

const getLyric = (artist, title) => {
// console.log(artist,title);
const url=` https://api.lyrics.ovh/v1/${artist}/${title}`
// console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data.lyrics))
}