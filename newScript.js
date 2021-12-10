const body = document.querySelector("body");

const awwPromise = fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json())

awwPromise.then(data => {
    for (let i = 0; i < data.data.children.length; i++){
        const newDiv = document.createElement("div")
        const newTitle = document.createElement("h3")
        const newImage = document.createElement("img")
        const newLink = document.createElement("a")

        const Title = document.querySelector("h3")
        const Image = document.querySelector("img")
        const Link = document.querySelector("a")

        // let name = data.data.children[i].data.name
        let title = data.data.children[i].data.title
        let image = data.data.children[i].data.thumbnail
        let link = data.data.children[i].data.url

       newTitle.innerHTML = title;
       newImage.src = image;
       newLink.href = link;
       newLink.innerText = link;

    // Link.setAttribute("href", ${link});

    body.append(newDiv); 
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newImage);
    newDiv.appendChild(newLink);
 }
 
});
