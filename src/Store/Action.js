export const addTodo=(data)=>{
    return{
        type:"Addtodo",
        payload:{
            id:new Date().getTime().toString(),
            data:data 
    }
    }
}

export const remove=(id)=>{
    return{
        type:"removetodo",
        id:id   
    }
}
