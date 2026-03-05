fetch('/assets/data/blog.json')
.then(res=>res.json())
.then(posts=>{

let recent = posts.slice(0,5);

let html = "";

recent.forEach(post=>{

html += `
<li class="mb-2">
<a href="${post.url}">
${post.title}
</a>
</li>
`;

});

document.getElementById("recent-posts").innerHTML = html;

});
