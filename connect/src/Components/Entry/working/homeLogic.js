
export async function tryHome(func){
    fetch("/userthere" , {
        method :"POST",
        headers : {
            "Content-Type":"application/json"
        },
    })
    .then( async res => {
        if(res.status === 300){
            console.log("%_% not user found(homeLogic)")  
            func(false);
        }
        else{
            func(true);
        }
    })
}