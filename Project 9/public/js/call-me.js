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