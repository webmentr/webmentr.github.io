fetch('assets/data/portfolio-data.json')
.then(response => response.json())
.then(data => {

const container = document.getElementById("portfolio-list");

data.projects.forEach(project => {

const card = document.createElement("div");

card.className = "col-md-4";

card.innerHTML = `
<div class="card p-4 h-100">

<h5>${project.title}</h5>

<small class="text-muted">${project.category}</small>

<p>${project.description}</p>

<a href="${project.link}">
View Case Study
</a>

</div>
`;

container.appendChild(card);

});

});
