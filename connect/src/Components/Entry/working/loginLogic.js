
export async function tryLogin(email , pass, checker , isValid){



   fetch("/login" , {
        method :"POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({ email , pass })
    })
    .then(res => {
        if(!res.ok)
            console.log("prob T_T at loginLogic");
        return res.json()
    })
    .then(res  => {
        console.log(res.code);
        if(res.code === 13){
            checker("fail" , "Wrong Username or Password")
        }
        else{
            checker("success" , "Success")
            isValid(true);
        }
    })
}
export async function tryLoginIfPossible(func){
    fetch("/home" , {
        method :"GET",
        headers : {
            "Content-Type":"application/json"
        },
    })
    .then( res => {
        if(res.status === 200){
            console.log("%_%  user found(loginLogic)")  
            func(true);
        }
    })
}