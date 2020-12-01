//code for displaying the repos
const data = [
    {
        id : 1,
        name: "Ristorante-Con-Fusion ",
        message:'Making a restaurant website with BootStrap',
        private: 'Private',
        language: "HTML",
        color: "#e34c26",
        update: "Updated 7 days ago"

    },
    {
        id : 2,
        name: "updated-weatherApp",
        message:'A progressive Weather web app including OpenWeatherMap API, manifest file, local storage',
        language: "HTML",
        color: "#e34c26",
        update: "Updated on Sep 17"

    },
    {
        id : 3,
        name: "plural-sight-js-dev-env",
        language: "JavaScript",
        color: "#f1e05a",
        update: "Updated on Aug 30"

    },
    {
        id : 4,
        name: "MWS-playground",
        private: 'Private',
        language: "PBIX ",
        color: "magenta",
        update: "Updated on July 1"

    },
    {
        id : 5,
        name: "Python-Playground",
        message: "Messing around with code",
        private: 'Private',
        language: "Python",
        color: "#f1e05a",
        update: "Updated on May 7"

    },
    {
        id : 6,
        name: "CDC-Web-app",
        language: "CSS",
        color: "#563d7c",
        update: "Updated on Nov 10, 2018"

    },
    {
        id : 7,
        name: "CDC-Learning-Repository",
        language: "HTML",
        color: "#e34c26",
        update: "Updated on Feb 3, 2018"

    }
]

let ell = ""    
let priv =""
let display = ''

for( var i = 0; i < data.length; i++){
    if(data[i].private != undefined){
        priv = 'inline-block'
    }
    else{
        priv = 'none'
    }
    if(data[i].message != undefined){
        display = 'block'
    }
    else{
        display = 'none'
    }
    ell += `<div class="repo">
    <h3 class = 'name'>${data[i].name}
        <span class = 'private' style = "display: ${priv}"> ${data[i].private}</span> 
    </h3>
    <a href='#' class = "star"> <span class="fa fa-star-o"> </span> Star </a>
    <p style = "display: ${display}" class="message"> ${data[i].message}</p>
    <p class="footnotes">
        <span class = "fa fa-circle-thin" style="background-color: ${data[i].color}; color: ${data[i].color}; border-radius: 100%"> </span> 
        <span class="lang"> ${data[i].language}</span>
        <span class = 'update'>${data[i].update}</span>
    </p>
    </div>

`
}

repos = document.getElementById('repos')
repos.innerHTML = ell


// code for toggling the dropdown menus
const dropdownBtn1 = document.querySelector('#dropdown-btn1')
const dropdown1 = document.querySelector('#dropdown1')
const dropdownBtn2 = document.querySelector('#dropdown-btn2')
const dropdown2 = document.querySelector('#dropdown2')
const options1 = document.querySelectorAll('.option1')
const options2 = document.querySelectorAll('.option2')
const type = document.querySelector('#type')
const language = document.querySelector('#language')
const close1 = document.querySelector('#close1')
const close2 = document.querySelector('#close2')


//code for the dropdown for type of repo
dropdownBtn1.addEventListener('click', function(e){
    e.preventDefault();
    toggleHidden(dropdown1)
})

options1.forEach(function(option){
    option.addEventListener('click', function(e){
        selected(e,dropdown1,type)
    })
})
close1.addEventListener('click', function(e){
    dropdown1.classList.add('hidden')
})

 //code for the dropdown for languages
dropdownBtn2.addEventListener('click', function(e){
    e.preventDefault();
    toggleHidden(dropdown2)
})

options2.forEach(function(option){
    option.addEventListener('click', function(e){
        selected(e,dropdown2,language)
    })
})
close2.addEventListener('click', function(e){
    dropdown2.classList.add('hidden')
})

//code needed by both code groups above
function toggleHidden(hide){
    hide.classList.toggle('hidden')
}

function selected(any,dropdown,span){
    const labelElement = document.querySelector(`label[for='${any.target.id}']`).innerText;
    toggleHidden(dropdown)
    span.innerText = labelElement
}




//code for toggling the nav on small screens
const navbar = document.querySelector('#sm-nav')
const navButton = document.querySelector('#nav-button')

navButton.addEventListener('click', function(e){
    toggleHidden(navbar)
})

//code for activating css on the search form in the header
const expand = document.querySelector('#expand')
const searchRepo = document.querySelector('#search-repo')
const search1 = document.querySelector('#search1')

const searchMd = document.querySelector('#search-md')
const searchRepoMd = document.querySelector('#search-repo-md')
const expandMd = document.querySelector('#expand-md')

searchRepo.addEventListener('click', function(e){
    toggleWidth(search1)
    toggleHidden(expand)
    toggleBackground(searchRepo)
})

searchMd.addEventListener('click', function(e){
    toggleWidth(searchMd)
    toggleHidden(expandMd)
    toggleBackground(searchRepoMd)
})



//funtions to toggle changes
function toggleBackground(bg){
    bg.classList.toggle('search-focus')
}
function toggleWidth(width){
    width.classList.toggle('search1-focus')
}
