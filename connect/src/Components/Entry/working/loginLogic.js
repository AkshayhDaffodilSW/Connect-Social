
export async function tryLogin(email , pass, checker){



   fetch("/login" , {
        method :"POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({ email , pass })
    })
    .then(res => {
        if(!res.ok)
            console.log("prob T_T");
        return res.json()
    })
    .then(res  => {
        console.log(res.code);
        if(res.code === 13){
            checker("fail" , "Wrong Username or Password")
        }
        else{
            checker("success" , "Success")
        }
    })
}