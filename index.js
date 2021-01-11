let issues = [
    {
        href: "issues/climate.html",
        title: "Avert climate catastrophe and restore our planet",
        logo: "images/logos/climate.png",
        background: "images/climatecrisis.jpg"
    },

    {
        href: "issues/fastfashion.html",
        title: "The problem with fast fashion",
        logo: "images/logos/fashion.png",
        background: "images/fastfashion.jpg"
    },

    {
        href: "issues/gender.html",
        title: "Somewhere on the spectrum",
        logo: "images/logos/lgbtqflag.png",
        background: "images/lgbtq.jpg"
    },

    {
        href: "issues/refugees.html",
        title: "No one is free when some are opressed",
        logo: "images/logos/refugees.png",
        background: "images/refugees.jpg"
    },

    {
        href: "issues/mentalhealth.html",
        title: "Asking for help does not make you weak",
        logo: "images/logos/mentalhealthaware.png",
        background: "images/mentalhealth.jpg"
    },

    {
        href: "issues/childrights.html",
        title: "The rights of the child",
        logo: "images/logos/childrenrights.png",
        background: "images/childrights.jpg"
    }
];

function createGrid() {

    let issuesGrid = '';

    for(let i = 0; i < issues.length; i++) {

        issuesGrid += `<a href=${issues[i].href}><div class="issue-wrapper"><div class="issue-image-background" style="background-image:url(${issues[i].background});"></div><div class="image-text-wrapper"><div class="logo-wrapper"><img src=${issues[i].logo} alt=""></div><div class="subtitle">${issues[i].title}</div></div></div></a>`;
    }

    const grid = document.getElementById('issues-wrapper');
    console.log(grid);
    list.innerHTML = issuesGrid;

}

createGrid();


/* const searchBar = document.forms['search-issues'].querySelector('input');

searchBar.addEventListener('keyup', function(e) {

    const term = e.target.value.toLowerCase(); 
    const issues = list.getElementsByTagName('a');

    Array.from(issues).forEach(function(issue) {
        
        const name = issue.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(term) != -1) {
            issue.style.display = 'block';
        } else {
            issue.style = 'none';
        }
    })
}) */
