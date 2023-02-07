const urlSearchParams = new URLSearchParams(window.location.search);
const {topic} = Object.fromEntries(urlSearchParams.entries());
console.log(topic);

const container = document.querySelector(".blogs-con")
const apiKey = "40a94da478d1417fa4aa251bea430459"

window.addEventListener("DOMContentLoaded", function(){
    fetch(`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log("articles",data)
        console.log("api",`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${apiKey}`)
        const blogs = data["articles"]
        const showHtml = blogs.map((blog)=>{
            return `
                <div class="blog-box my-10">
                <img class="blog-img" src="${blog['urlToImage']}" alt=""/>
                <div class="blog-text">
                <h2>${blog['title']}</h2>
                <p>${blog['content']}</p>
                </div>
                <div class="plaga-btn">
                <button class="btn btn-warning mx-4">Check Plagiarism</button>
                <button class="btn btn-primary">Remove Plagiarism</button>
                </div>
                </div>
            `
        })
        container.innerHTML = showHtml
    });
})

// const list = document.querySelector('#projects')

// data.projects.forEach(project => {
// // Create project 
// const projectEl = document.createElement('div')

// // Create content like titles and text


// // Add element to list
// list.appendChild(projectEl)
// })