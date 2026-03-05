let allPosts = [];
fetch('/assets/data/blog.json')
.then(res=>res.json())
.then(posts=>{
allPosts = posts;
displayPosts(posts);
});
function displayPosts(posts){
let html = "";
posts.forEach(post=>{
html += `
<div class="col-md-6 col-lg-4 mb-4">
<div class="card h-100 shadow-sm">
<img src="${post.image}" class="card-img-top">
<div class="card-body">
<h5>${post.title}</h5>
<p>${post.description}</p>
<a href="${post.url}" class="btn btn-primary">
Read Article
</a>
</div>
</div>
</div>
`;
});
document.getElementById("blog-list").innerHTML = html;
}

document.getElementById("search-input").addEventListener("input",function(){
let keyword = this.value.toLowerCase();
let filtered = allPosts.filter(post=>
post.title.toLowerCase().includes(keyword)
);
displayPosts(filtered);
});

document.getElementById("category-filter").addEventListener("change",function(){
let category = this.value;
if(category==="all"){
displayPosts(allPosts);
}else{
let filtered = allPosts.filter(post=>post.category===category);
displayPosts(filtered);
}
});
