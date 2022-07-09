
let inativo = document.querySelector(".inativo");
let ativo = document.querySelector(".ativo");
let firstContent = document.querySelector("#firstContent");
let secondContent = document.querySelector("#secondContent");

inativo.onclick=function(){
    if(firstContent.style.display === 'none'){
        secondContent.style.display = 'none';
        firstContent.style.display = 'block';
    }else{
        firstContent.style.display = 'none';
        secondContent.style.display = 'block';
    }  

    if(secondContent.style.display === 'block'){
        secondContent.style.display = 'block';
        firstContent.style.display = 'none';
    }else{
        secondContent.style.display = 'block';
        firstContent.style.display = 'none';
    }
}

/*/
inativo.onclick=function(){
    if(secondContent.style.display === 'block'){
        secondContent.style.display = 'block';
        firstContent.style.display = 'none';
    }else{
        secondContent.style.display = 'block';
        firstContent.style.display = 'none';
    }
    
}

*/

/*let loginFormLink = document.querySelector("#loginFormLink");
let cadastroFormLink = document.querySelector("#cadastroFormLink");
let firstContent = document.querySelector("#firstContent");
let secondContent = document.querySelector("#secondContent");

loginFormLink.onclick=function(){
    if(firstContent.style.display === 'none'){
        secondContent.style.display = 'none';
        firstContent.style.display = 'flex';
    }else{
        firstContent.style.display = 'none';
        secondContent.style.display = 'flex';
    }
}
cadastroFormLink.onclick=function(){
    if(secondContent.style.display === 'none'){
        secondContent.style.display = 'flex';
        firstContent.style.display = 'none';
    }else{
        secondContent.style.display = 'none';
        firstContent.style.display = 'flex';
    }
}
*/