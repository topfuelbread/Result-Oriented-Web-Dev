let showBtn = document.querySelector('.show');
let addBtn = document.querySelector('.add');
let updateBtn = document.querySelector('.update');
let deleteBtn = document.querySelector('.delete');
let list = document.querySelector('.list');

showBtn.addEventListener('click',function(){
    list.innerHTML='';
    fetch('http://localhost:3000/products')
        .then((response)=>response.json())
        .then((data)=>{
            data.forEach((product) => {
                let li = document.createElement('li');
                li.textContent = `${product.id} - ${product.name} - $${product.price}`;
                list.appendChild(li);
            })
        })
})

addBtn.addEventListener('submit',function(e){
    e.preventDefault();
    fetch('http://localhost:3000/products',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:document.getElementById('addName').value,
            price:document.getElementById('addPrice').value
        })
    }).then((response)=>response.text())
    .then((data)=>console.log(data))
})

updateBtn.addEventListener('submit',function(e){
    e.preventDefault();
    let id = document.getElementById('updateId').value;
    fetch('http://localhost:3000/products/'+id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            price:document.getElementById('updatePrice').value
        })
    }).then((response)=>response.text())
    .then((data)=>console.log(data));
})

deleteBtn.addEventListener('submit',function(e){
    e.preventDefault();
    let id = document.getElementById('deleteId').value;
    fetch('http://localhost:3000/products/'+id,{
        method:'DELETE'
    }).then((response)=>response.text())
    .then((data)=>console.log(data));
})