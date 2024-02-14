export async function fillPosts(){
    return fetch("/getposts" , {
        method :"POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify()
    })
    .then(async res => {
        if(!res.ok)
            console.log("prob T_T at postGetLogic");
        return res.json();
    })
    .then(res => {
        return res.body;
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
        throw error; 
    });
}