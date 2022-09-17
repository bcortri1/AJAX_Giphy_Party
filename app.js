console.log("Let's get this party started!");

//Grabs giphy search data and returns an array of objects
function gSearch(){
    let response = axios.get(`http://api.giphy.com/v1/gifs/search?q=${$("input").val()}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    return response;
}
//Takes a promised array and appends random url to gif-container
async function appendGif(response){
    response = await response;
    console.log(response)
    let rand = Math.floor(Math.random()* 50);
    let gifUrl= response.data.data[rand].images.original.url;
    $("#gif-container").append($("<img>").attr("src", gifUrl));

}

$("#sBtn").on("click", function(evt){
    evt.preventDefault();
    appendGif(gSearch());
});

$("#rBtn").on("click", function(evt){
    evt.preventDefault();
    $("#gif-container").empty();
});