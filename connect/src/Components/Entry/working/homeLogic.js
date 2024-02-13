
export async function tryHome(func){
    fetch("/home" , {
        method :"GET",
        headers : {
            "Content-Type":"application/json"
        },
    })
    .then( res => {
        if(res.status === 300){
            console.log("%_% not user found(homeLogic)")  
            func(false);
        }
    })
}