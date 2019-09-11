var input = document.querySelector('input');

input.onkeyup = function (event) {
    if (event.keyCode === 13) {
        user = this.value;

        if (user.length > 0) {
            axios.get('https://api.github.com/users/' + user, {
                    headers: {
                        'Authorization': 'token c3d8cb966aabef5a5b626beef1744423710031b7'
                    },
                    auth: {
                        'username': 'victorbaptista16@hotmail.com'
                    }
                })
                .then(function (response) {

                    var name = response.data.login;
                    var pic = response.data.avatar_url;
                    var link = response.data.html_url;
                    var desc = response.data.bio;

                    createCard(name,pic,link,desc);

                    console.log(response.data)
                    console.log(response.headers)
                },
                (error) => {
                    alert(error);
                });
                
        }
    }
}



createCard = (name,pic,link,desc) => {
   const card = document.querySelector('.card');

    // var nameHTML = document.createElement('h2');
    // nameHTML.id = "name";
    // var node = document.createTextNode(name);
    // nameHTML.appendChild(node);
    // card.appendChild(nameHTML);

    const nameHTML = document.querySelector('#name');
    const picHTML  = document.querySelector('#pic');
    const linkHTML = document.querySelector('#link');
    const descHTML = document.querySelector('#desc');

    nameHTML.innerHTML = name;
    picHTML.setAttribute('src', pic);
    linkHTML.setAttribute('href', link);
    descHTML.innerHTML = desc;
}