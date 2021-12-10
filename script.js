/// First Version 
console.log("working !!!")

// To do: 1.fetch 2..then 3.json 4 console.log to check data

const body = document.querySelector("#body");

//const awwPromise = 
fetch ("https://www.reddit.com/r/aww/.json")
.then(res => res.json())

//awwPromise
.then(data => {
    //console.log(data.data.children[0]);
    for (let i=0; i < data.data.children.length; i++){
        const newDiv = document.createElement("div");
        //name title link image
        let name = data.data.children[i].data.name
        let title = data.data.children[i].data.title
        let link = data.data.children[i].data.url
        let image = data.data.children[i].data.thumbnail

        //console.log(name);

        // <br> use it to break the line 
        newDiv.innerHTML = `<br> ${name} <br> ${title} <br> ${link} <br> ${image} <br>`;
        // or other way you can write => newDiv.innerHTML = name + " " + title + " " + link + " " + image;
        body.appendChild(newDiv); 

        //console.log(data.data.children[i]);
    };

    
});