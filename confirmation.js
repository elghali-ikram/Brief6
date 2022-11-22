const result = document.getElementById('result')

const params = new URLSearchParams(window.location.search);
var club= params.get('club')
var string=' ';
params.forEach((value, key)=>{
    if(key=='club')
    {
        string+=value;
        string+=' '
    }
    console.log(string)
});
var res=` Bienvenu ${params.get('nom')}  ${params.get('prenom')}  dans notre club(s)  ${string}`
result.textContent= res
