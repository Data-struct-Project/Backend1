const form=document.getElementById('form');
const zone=document.getElementById('zone');
const seat=document.getElementById('seat');
const full_name=document.getElementById('full_name');


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(full_name.value=== ''){
        showerror(full_name,'Please enter your name');
    }else{
        showsuccess(full_name);
        /*window.location.replace('payment');*/
        location.href = 'payment'
    }
});

function showerror(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}


function showsuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}