
const initalData = {

    list: []

}
const Reducers = (state = initalData, action) => {

    switch (action.type) {
        case "Addtodo":
            const { id, data } = action.payload
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]   

               }

            case "removetodo":  

            const del=state.list.filter((elem)=>elem.id!==action.id)
            return{
                list:del
            }



        default:
            return state

    }


}

export default Reducers

