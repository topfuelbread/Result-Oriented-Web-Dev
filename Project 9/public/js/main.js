document.addEventListener('DOMContentLoaded',async function(){
    let posts = await getPosts();
    let articles = document.querySelector('.articles');
    articles.innerHTML='';
    posts.forEach((post)=>{
        let postHTML = `
        <div class="col-4">
            <div class="card">
                <img class="card-img-top" src="${post.imageURL}" alt="${post.title}">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.description}</p>
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>`;
        articles.insertAdjacentHTML('beforeend',postHTML);
    })
})

let callMeForm = document.querySelector('.call-me-form');
callMeForm.addEventListener('submit',function(e){
    e.preventDefault();
    fetch('http://localhost:3000/callback-requests',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify({
            phoneNumber: callMeForm.querySelector('input').value
        })
    }).then((resp)=>resp.text()).then(()=>alert('We will call you ASAP!'));
})