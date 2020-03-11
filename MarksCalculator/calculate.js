function fun()
{
    
    var m1=parseInt(document.getElementById("math").value);
    var m2=parseInt(document.getElementById("physics").value);
    var m3=parseInt(document.getElementById("chemistry").value);
    var m4=parseInt(document.getElementById("computer").value);
    var m5=parseInt(document.getElementById("english").value);
    var m6=parseInt(document.getElementById("hindi").value);
    var listadd=[];
    document.getElementById("tot").value=m1+m2+m3+m4+m5+m6;
    listadd.push(m1,m2,m3,m4,m5,m6)
    console.log(listadd);
}