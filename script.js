$('#getWeather').on('click',()=>{
    const cityName = $('#cityName').val();

    getWeather(cityName, (response)=>{
        $('#content').text(JSON.stringify(response));
    });

    $('#cityName').val('');
});

$('#sideNav').on('click',(event)=>{
    const tabName = event.target.getAttribute('data-name');
    //let content;
    switch (tabName) {
        case 'Posts':{
            getPosts((data)=>{
                console.log('blablaP')
                $('#content').html(`
                    ${data.map((post)=>{
                        return `
                            <div class="card">
                                <h2>${post.id}</h2>
                                <h3 class="title">${post.userId}</h3>
                                <h3 class="sub-title">${post.title}</h3>
                                <h4 class="price">${post.body}</h4>
                            </div>
                        `
                    }).join('')}
                    `
                )
            })
            break;
        }

        case 'Comments':{
            getComments((data)=>{
                console.log('blablaC')
                $('#content').html(`
                ${data.map((post)=>{
                    return `
                        <div class="card">
                            <h2>${post.id}</h2>
                            <h3 class="title">${post.postId}</h3>
                            <h3 class="sub-title">${post.name}</h3>
                            <h3 class="sub-title">${post.email}</h3>
                            <h4 class="price">${post.body}</h4>
                        </div>
                    `
                }).join('')}
                `)
            })
            break;
        }
    }
});