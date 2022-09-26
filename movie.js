function searchMovie()
{
let id1=document.querySelector("#movie").value;

const url=(`http://www.omdbapi.com/?i=tt3896198&apikey=f766b134&t=${id1}`);

fetch(url)
.then(function(res)
{
    
    return (res.json());
   
})
.then(function(res)
{
    if(res.Response=="False")
    {
        error1(res);
    }
    else{
    console.log(res)
    print(res);
    }
})
.catch(function(err)
{
    console.log(err);
});
}


function print(el)
{
    
    document.querySelector("#container").innerHTML=null;
    let box=document.createElement("div");
     let title=document.createElement("h3");
     title.innerText=el.Title;

     let imdb=document.createElement("p");
     imdb.innerText=el.imdbRating;

     var tag=document.createElement("tag");
         tag.innerText="blockbuster";

    let tag1=document.createElement("div");
    tag1.setAttribute("class","tag1")
     let date=document.createElement("p");
     date.innerText=el.Released;

     let image=document.createElement("img");
     image.src=el.Poster;

     
     if(el.imdbRating>8.5)
     {
         tag1.append(imdb,tag);
     box.append(image,title,date,tag1);
     }
     else
     {
     box.append(image,title,date,imdb);
     }
     document.querySelector("#container").append(box);
 
}

function error1(res)
{
    let image=document.createElement("img");
     image.src="https://c.tenor.com/NpZyGNG3SLEAAAAM/this-content-is-not-available.gif";
    document.querySelector("#container").append(image);
}