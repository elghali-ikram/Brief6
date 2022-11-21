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


function validateForm() {
    if(nom.value.match(/[a-zA-Z]{3,30}/g)) {
        setSuccessFor(nom);
    } else {
        setErrorFor(nom, 'champ obligatoire');
    }
     if(prenom.value.match(/[a-zA-Z]{3,30}/g)) {
        setSuccessFor(prenom);
    } else {
        setErrorFor(prenom, 'champ obligatoire');
    }
    if(tele.value.match(/^(06|07|05)\d{8}$/g)) {
        setSuccessFor(tele);

    } else {
        setErrorFor(tele, 'doit contenir 10 number');
    }
    if(email.value.match(/^((\w+)?.(\w+)?@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma))$/g)) 
    {
        setSuccessFor(email);
    } else {
        setErrorFor(email, 'doit contenir 10 number');
    }
    if (genre.selectedIndex <1) {
        setErrorFor(genre,"champ obligatoire")
    }else {
        setSuccessFor(genre);
    }
    for(let i =0;i <group.length;i++)
    {
        if(group[i].checked)
        {
            setsucces(group[i])
            break;        
        }
        else
        {
            seterror(group[i],"choisir votre groupe")
        }
    }
    let count =0;

    for(let i =0;i <club.length;i++)
    {
        
        if(club[i].checked)
        {   count++;

        }
        if(count >=1 && count <=3)
        {
            setsucces(club[i])

        }
        else
        {
            seterror(club[i], "choisir entre 1 et 3 un club")

        }
    }
}

function seterror(input, message)
{
    const parent= input.closest('.form-control');
    if(parent.classList.contains('form-control-success')){
        parent.classList.remove('form-control-success');
    }
    parent.classList.add('form-control-error');
    const small = parent.querySelector('small');
    small.textContent = message;
}
function setsucces(input)
{
    const parent= (((input.parentElement).parentElement).parentElement).parentElement;
    if(parent.classList.contains('form-control-error')){
        parent.classList.remove('form-control-error');
    }
    parent.classList.add('form-control-success');
    const small = parent.querySelector('small');
    small.textContent = ' ';
}

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
    const parent = element.parentElement;
    if(parent.classList.contains('form-control-error')){
        parent.classList.remove('form-control-error');
    }
    parent.classList.add('form-control-success');
    const small = parent.querySelector('small');
    small.textContent = ' ';
    
}