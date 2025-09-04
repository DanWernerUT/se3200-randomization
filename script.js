console.log("Connected")

let generateButton = document.querySelector("#generateSong")

generateButton.onclick = function () {
    fetch("https://api.jsonbin.io/v3/b/68b9b3abae596e708fe26ed9")
    .then(function(response){
        console.log(response)
        response.json().then(function(data){
            let main = document.querySelector("main")

            let div_name = document.createElement("div")
            div_name.id = "songName"
            let currentdiv_name = document.querySelector("#songName")
            let h4_name = document.createElement("h4")
            h4_name.id = "songNameHeader"
            let currenth4_name = document.querySelector("#songNameHeader")

            let h4_composer = document.createElement("h4")
            h4_composer.id = "songComposerHeader"
            let currenth4_composer = document.querySelector("#songComposerHeader")
            let div_composer = document.createElement("div")
            div_composer.id = "songComposer"
            let currentdiv_composer = document.querySelector("#songComposer")

            let h4_year = document.createElement("h4")
            h4_year.id = "yearPublishedHeader"
            let currenth4_year = document.querySelector("#yearPublishedHeader")
            let div_year = document.createElement("div")
            div_year.id = "yearPublished"
            let currentdiv_year = document.querySelector("#yearPublished")

            let h4_score = document.createElement("h4")
            h4_score.id = "songScoreHeader"
            let currenth4_score = document.querySelector("#songScoreHeader")
            let div_score = document.createElement("div")
            div_score.id = "songScore"
            let currentdiv_score = document.querySelector("#songScore")

            let h4_grade = document.createElement("h4")
            h4_grade.id = "gradeHeader"
            let currenth4_grade = document.querySelector("#gradeHeader")
            let div_grade = document.createElement("div")
            div_grade.id = "grade"
            let currentdiv_grade = document.querySelector("#grade")
            
            let r = Math.random()
            let randIndex = Math.floor(r*data.record.length)
            console.log("The data is ", data)
            console.log(data.record[randIndex].name)

            h4_name.innerHTML = "Piece Name:"
            main.removeChild(currenth4_name)
            main.appendChild(h4_name)
            div_name.innerHTML = data.record[randIndex].name
            main.removeChild(currentdiv_name)
            main.appendChild(div_name)

            h4_composer.innerHTML = "Composer:"
            main.removeChild(currenth4_composer)
            main.appendChild(h4_composer)
            div_composer.innerHTML = data.record[randIndex].composer
            main.removeChild(currentdiv_composer)
            main.appendChild(div_composer)

            h4_year.innerHTML = "Year Published:"
            main.removeChild(currenth4_year)
            main.appendChild(h4_year)
            div_year.innerHTML = data.record[randIndex].yearPublished
            main.removeChild(currentdiv_year)
            main.appendChild(div_year)

            h4_score.innerHTML = "Link:"
            main.removeChild(currenth4_score)
            main.appendChild(h4_score)
            div_score.innerHTML = data.record[randIndex].youtubeScore
            main.removeChild(currentdiv_score)
            main.appendChild(div_score)

            h4_grade.innerHTML = "Grade Level:"
            main.removeChild(currenth4_grade)
            main.appendChild(h4_grade)
            div_grade.innerHTML = data.record[randIndex].grade
            main.removeChild(currentdiv_grade)
            main.appendChild(div_grade)

            main.style.height = "525px"
            main.style.transition = "height 0.25s"
            
        })
    })
}