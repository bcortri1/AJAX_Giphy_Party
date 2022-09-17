console.log("Let's get this party started!");
api_key="MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";


$("#sBtn").on("click", function(evt){
    evt.preventDefault();
    gSearch();
});

$("#rBtn").on("click", function(evt){
    evt.preventDefault();
    $("#gif-container").empty();
});


async function gSearch(){
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${$("input").val()}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log("got", response);
}

