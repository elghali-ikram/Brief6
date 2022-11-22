const form = document.querySelector('form');
const nom = document.getElementById('nom');
var prenom = document.getElementById("prenom");
var tele = document.getElementById("tele");
var email = document.getElementById("email");
var genre = document.getElementById("genre");
var group =document.getElementsByName('groupe');
var club =document.getElementsByName('club');


form.addEventListener('submit', (event)=>{
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.form-control');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('form-control-error')){
            result = false;
        }
    });
    return result;
}
function validatenom()
{
    let result=true;
    if(nom.value.match(/[a-zA-Z]{3,30}/g)) {
        setSuccessFor(nom);
        result=true;
        console.log(result +"nom")
    } else {
        setErrorFor(nom, 'champ obligatoire');
        result=false;
        console.log(result +"nom")
    }
    return result;
}
function validateprenom()
{ 
    let result=true;
    if(prenom.value.match(/[a-zA-Z]{3,30}/g)) {
        setSuccessFor(prenom);
        result=true;
        console.log(result +"prenom")
    } else {
        setErrorFor(prenom, 'champ obligatoire');
        result=false;
        console.log(result +"prenom")
    }
    return result;
}
function validatele()
{

    let result=true;
    if(tele.value.match(/^(06|07|05)\d{8}$/g)) {
        setSuccessFor(tele);
        result=true;
        console.log(result +"tele")
    } else {
        setErrorFor(tele, 'telephone pas valider');
        result=false;
        console.log(result +"tele")

    }
    return result;
}
function validatemail()
{
    let result=true;
    if(email.value.match(/^((\w+)?.(\w+)?@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma))$/g)) {
        setSuccessFor(email);
        result=true;
        console.log(result +"email")
    } else {
        setErrorFor(email, 'email pas valider');
        result=false;
        console.log(result +"email")
    }
    return result;
}
function validatgenre()
{
    let result=true;
    if (genre.selectedIndex <1) {
        setErrorFor(genre,"champ obligatoire")
        result=true;
        console.log(result +"genre")
    }else {
        setSuccessFor(genre);
        result=false;
        console.log(result +"genre")
    }
    return result;
}
function validatgroup()
{
    let result=true;
    for(let i =0;i <group.length;i++)
    {
        if(group[i].checked)
        {
            setSuccessFor(group[i])
            break;        
        }
        else
        {
            setErrorFor(group[i],"choisir votre groupe")
        }
    }
    return result;
    
}
function validatclub() {
    let count =0;
    for(let i =0;i <club.length;i++)
    {
        
        if(club[i].checked)
        {   
            count++;
        }
        if(count >=1 && count <=3)
        {
            setSuccessFor(club[i])
        }
        else
        {
            setErrorFor(club[i], "choisir entre 1 et 3 un club")
        }
    }
}
function validateForm()
 {
    validatenom();
    validateprenom();
    validatele();
    validatemail();
    validatgenre();
    validatclub();
    validatgroup();
}
nom.addEventListener('keypress' ,(event)=>{
    event.preventDefault;
    validatenom();
})
prenom.addEventListener('keypress',(event)=>{
    event.preventDefault;
    validateprenom();
})
tele.addEventListener('keypress',(event)=>{
    event.preventDefault;
    validatele();
})
email.addEventListener('keypress',(event)=>{
    event.preventDefault;
    validatemail();
})
genre.addEventListener('change',(event)=>{
    event.preventDefault;
    validatgenre();
})

// function seterror(input, message)
// {
//     const parent= input.closest('.form-control');
//     if(parent.classList.contains('form-control-success')){
//         parent.classList.remove('form-control-success');
//     }
//     parent.classList.add('form-control-error');
//     const small = parent.querySelector('small');
//     small.textContent = message;
// }
// function setsucces(input)
// {
//     const parent= (((input.parentElement).parentElement).parentElement).parentElement;
//     if(parent.classList.contains('form-control-error')){
//         parent.classList.remove('form-control-error');
//     }
//     parent.classList.add('form-control-success');
//     const small = parent.querySelector('small');
//     small.textContent = ' ';
// }

function setErrorFor(element, errorMessage) {
    const parent = element.closest('.form-control');
    if(parent.classList.contains('form-control-success')){
        parent.classList.remove('form-control-success');
    }
    parent.classList.add('form-control-error');
    const small = parent.querySelector('small');
    small.textContent = errorMessage;
}
function setSuccessFor(element){
    const parent = element.closest('.form-control');
    if(parent.classList.contains('form-control-error')){
        parent.classList.remove('form-control-error');
    }
    parent.classList.add('form-control-success');
    const small = parent.querySelector('small');
    small.textContent = ' ';
    
}