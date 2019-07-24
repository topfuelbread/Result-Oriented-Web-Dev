let createForm = document.querySelector('.create-post-form');
let createTitle = document.querySelector('#create-title');
let createCountry = document.querySelector('#create-country');
let createImageUrl = document.querySelector('#create-image-url');
let createText = document.querySelector('#create-text');
let createImageFile = document.querySelector('#create-image-file');

createForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData();
    data.append('title',createTitle.value);
    data.append('country',createCountry.value);
    data.append('imageURL',createImageUrl.value);
    data.append('text',createText.value);
    data.append('description',createText.value.substring(0,createText.value.indexOf('.')+1));
    data.append('imageFile', createImageFile.files[0]);

    fetch('http://localhost:3000/posts', {
        method:'POST',
        body: data
    }).then((response)=>response.text()).then((data)=>window.history.go());
})

//for image url vs file selection:
function disableInput(input1, input2){
    if(input1.value){
        input2.disabled = true;
    } else{
        input2.disabled = false;
    }
}
createImageUrl.addEventListener('change',function(){disableInput(createImageUrl,createImageFile)});
createImageFile.addEventListener('change',function(){disableInput(createImageFile,createImageUrl)});