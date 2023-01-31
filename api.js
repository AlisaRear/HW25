const getWeather = (city, onSuccess) => {
    const settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3bd24f13cecf13f96cfdc182bc8d4e8&units=metric`,
        "method": "GET",
        "timeout": 0,
        "error":(e)=>{
            console.log(e);
        }
    };
    $.ajax(settings).done(function (response) {
        // callback call
        onSuccess(response);
    });
}
const getPosts = (onSuccess) => {
    const settings = {
        "url": "https://jsonplaceholder.typicode.com/posts",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        onSuccess(response.map((postJSON)=>
            new Post(
                postJSON.userId,
                postJSON.id,
                postJSON.title,
                postJSON.body
            )
        ));
    });
}
const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => response.json())
        .then(response => {
            /*console.log(response);*/
            response.map((comment) =>
                new Comment(
                    comment.postId,
                    comment.id,
                    comment.name,
                    comment.email,
                    comment.body
                ))
        })
}
