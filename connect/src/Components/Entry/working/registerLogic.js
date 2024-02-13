
export async function tryRegister(name , secondname, email , pass , repass , checker , isValid){

    if(pass !== repass){
        checker("fail" , "Passwords Don't Match Q_Q")
        return;
    }

   fetch("/register" , {
        method :"POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({name , secondname , email , pass })
    })
    .then(res => {
        if(!res.ok)
            console("prob T_T at registerLogic");
        return res.json()
    })
    .then(res  => {
        // console.log(res.code);
        if(res.code === 12){
            checker("fail" , "User Already Exists")
        }
        else{
            checker("success" , "User Created")
            isValid(true);
        }
    })
}
export async function tryRegisterIfPossible(func){
    fetch("/home" , {
        method :"GET",
        headers : {
            "Content-Type":"application/json"
        },
    })
    .then( res => {
        if(res.status === 200){
            console.log("%_% user found(registerLogic)")  
            func(true);
        }
    })
}