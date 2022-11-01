if("serviceWorker"  in navigator){
    navigator.serviceWorker.register("serviceworker.js").then(registration=>{
        console.log(" serviceWorker registered !")
        console.log(registration);
    }).catch(error=>{
        console.log("serviceworker error!")
        console.log(error);
    })
}else{
    alert("service worker isn't working!")
}