const result = document.getElementById('result')

const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=>{
    result.append( `${key}` + ':' + `${value}`);
    result.append(document.createElement('br'));
});