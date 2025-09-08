const generateButton = document.querySelector("#generateSong");
const container = document.querySelector(".container");
const piece_name = document.querySelector("#piece_name");
const composer = document.querySelector("#composer");
const year_published = document.querySelector("#year_published");
const song_link = document.querySelector("#song_link");
const grade_level = document.querySelector("#grade_level");

let songData = [];
let randIndex = 0;

fetch("https://api.jsonbin.io/v3/b/68b9b3abae596e708fe26ed9").then(function(response){
        return response.json();
    }).then(function(data){
        songData = data;
        randIndex = Math.floor(Math.random()*data.record.length);
        console.log("The data is ", data);
        console.log(data.record[randIndex].name);
    }).catch(error => {
        console.error('Fetch error:', error);
    }
);

generateButton.onclick = function () {
    randIndex = Math.floor(Math.random()*songData.record.length);
    piece_name.innerHTML = songData.record[randIndex].name;
    composer.innerHTML = songData.record[randIndex].composer;
    year_published.innerHTML = songData.record[randIndex].yearPublished;
    song_link.innerHTML = songData.record[randIndex].youtubeScore;
    song_link.href = songData.record[randIndex].youtubeScore;
    grade_level.innerHTML = songData.record[randIndex].grade;      
    container.style.display = "block";
}