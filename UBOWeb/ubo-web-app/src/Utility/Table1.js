import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Table1(props) {
  return (
    <>
    <table className='table table-hover  m-3'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Utility_Name</th>
                <th>Description</th>
                <th>Due_Date</th>
                <th>Time_Period</th>
                <th>Modification</th>
            </tr>
        </thead>

        <tbody>
            {
                props.list.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.Utility_Name}</td>
                        <td>{data.Description}</td>
                        <td>{data.Due_Date}</td>
                        <td>{data.Time_Period}</td>
                        <button className='btn btn-secondary m-1'
                        onClick={()=>{props.openForm()}}>Edit</button>
                        <button className='btn btn-danger'
                        onClick={()=>{props.delete(data.id);alert("are you sure to delete");}}
                        >Delete</button>
                    </tr>
                
                ))
            }
        </tbody>
    </table>
    </>
  )
}
