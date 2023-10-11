import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useDispatch } from "react-redux"
import { addTodo } from '../Store/Action'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { remove } from '../Store/Action'
export default function Todo() {
    const dispatch = useDispatch()

    const list = useSelector((state) => state.Reducers.list)

    const [data, setdata] = useState("")
    return (
        <div>
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1 className='display-1 py-5'>This Is my Todo List</h1>
            <div className='d-flex col-xl-6'>
                <input type="text" className='form-control' value={data} onChange={(e) => { setdata(e.target.value) }} placeholder='Add Data' /><input type="button" value="Add" className='btn btn-success mx-3' onClick={() => { dispatch(addTodo(data)) }} />











            </div>
            
        </div>
        <div className='container p-5'>
        <table className='table '>
            <tbody>
                {
                    list.map((e) => {

                        return (
                            <tr >
                                <td className='py-3'>{e.data}</td>
                                <td className='py-3'><button className='btn btn-danger p-2' onClick={()=>{dispatch(remove(e.id))}}>Delete</button></td>
                            </tr>
                        )


                    })
                }
            </tbody>
        </table>

    </div>
    </div>
    )
}
