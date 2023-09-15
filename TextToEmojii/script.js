var cutter=""


function encryption(){
    document.querySelector("#encr-btn").addEventListener("click",function(){
       var input=document.getElementById("txtmsg").value
       console.log(input)

       var password=document.getElementById("password").value
       console.log(password)

       var str=input.split("")
    //    console.log(str)

       str.forEach(element => {
            cutter += `&#128${(element.charCodeAt())} `
       });
    //    console.log(cutter)

       document.querySelector("#result").innerHTML= cutter

       var dataa=[];
       if(JSON.parse(localStorage.getItem('data1'))){

        dataa= JSON.parse(localStorage.getItem('data1'))
        dataa.push({"pass":password,"input":input,"cutter":cutter})
       }else{
        dataa=[{"pass":password,"input":input,"cutter":cutter}]
       }
      
       
       localStorage.setItem('data1',JSON.stringify(dataa))
    })
}
encryption()


function decryption(){
    document.querySelector("#decr-btn").addEventListener("click",function(){
        var cutter2=''
        var input2=document.querySelector("#emojimsg").value
        var password2=document.querySelector("#finalpassword").value
        var user=JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        var str2=input2.split(" ")
        str2.forEach(element=>{
            cutter2 += `&#${(element.codePointAt(0))} `
        })
        console.log(cutter2)
        var found;
        for(let i of user){
            if(i.cutter == cutter2){
                found=i
                console.log(i)
            }
        }
        if(found.cutter === cutter2){
            document.querySelector("#result").style.dispaly="block"
            document.querySelector("#result").style.color="#eee"
            document.querySelector("#result").innerHTML=found.input
        }else{
            document.querySelector("#result").style.dispaly="block"
            document.querySelector("#result").style.color="red"
            document.querySelector("#result").innerHTML="Wrong Password"
        }
    })
}
decryption()


function btnClick(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decrypt").style.display="block"
        document.querySelector("#encrypt").style.display="none"
        document.querySelector("#dec-btn").style.backgroundColor="#333"
        document.querySelector("#enc-btn").style.backgroundColor="#222"
        document.querySelector("#result").style.display="none"
        document.querySelector("#main>h1 span img").style.rotate="270deg"
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encrypt").style.display="block"
        document.querySelector("#decrypt").style.display="none"
        document.querySelector("#enc-btn").style.backgroundColor="#333"
        document.querySelector("#dec-btn").style.backgroundColor="#222"
        document.querySelector("#main>h1 span img").style.rotate="90deg"
        document.querySelector("#result").style.display="none"
    })


    document.querySelector("#encr-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display="block"
    })
    document.querySelector("#decr-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display="block"
    })
}
btnClick()