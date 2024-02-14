export async function handlePostSubmit(imgBuffer , comment){
    fetch("/putPost" , {
        method :"POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({ imgBuffer : imgBuffer, comment : comment ,parent : null})
    })
    .then(res => {
        if(!res.ok)
            console.log("prob T_T at postStoreLogic");
        return res.json()
    })
    .then(res  => {
        console.log(res);
    })
}