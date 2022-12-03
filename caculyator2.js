var inp=document.querySelector(".inp")

document.querySelectorAll("td").forEach(function(td){
    td.addEventListener("click",function(e){
        var belgi = e.target.innerText   
        if( belgi=="C"){
            inp.value=""
        }else if (belgi=="="){
            inp.value= eval(inp.value)
        }else{
            inp.value+= belgi
        }
    })
})