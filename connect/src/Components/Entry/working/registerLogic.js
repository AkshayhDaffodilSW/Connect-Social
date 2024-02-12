
export async function tryRegister(name , secondname, email , pass , repass , checker){

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
            console("prob");
        return res.json()
    })
    .then(res  => {
        // console.log(res.code);
        if(res.code === 12){
            checker("fail" , "User Already Exists")
        }
        else{
            checker("success" , "User Created")
        }
    })
}