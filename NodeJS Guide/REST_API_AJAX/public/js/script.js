let getBtn = document.querySelector('.get');
getBtn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/2')
        .then((response)=>response.json())
        .then((data)=>console.log(data));
})

let postBtn = document.querySelector('.post');
postBtn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/', { //send request to this
        method:'POST',                      //post request in json format
        headers: {                          //specifies the format of the information
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        },
        body: JSON.stringify({              //information to post
            login:'Nancy',
            age:20
        })
    }).then((response)=>response.text())    //convert response to text format
    .then((data)=>console.log(data));
})

let updateBtn = document.querySelector('.update');
updateBtn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/1', { //update user with ID ==1
    method:'PUT',                      
    headers: {                          
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
    },
    body: JSON.stringify({              
        age:21                                 //update age to 21
    })
}).then((response)=>response.text())    
.then((data)=>console.log(data));
})

let deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/1', { //deletes user with ID ==1
    method:'DELETE'
}).then((response)=>response.text())    
.then((data)=>console.log(data));
})