
    window.onload=function(){
        var chooses=document.querySelectorAll(".select>div>ul>li>a");
        console.log(chooses);
        for(var choose of chooses){
            choose.onclick=function(){
                var select=document.querySelector(".select>div>ul>li>a.active");
                select.className="";
                this.className="active";
            }
        }
    }
    
