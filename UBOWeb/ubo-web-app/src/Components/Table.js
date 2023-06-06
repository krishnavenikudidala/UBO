import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Table(props) {
  return (
    <>
    <table className='table table-hover  m-3'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Utility_Name</th>
                <th>Month</th>
                <th>Paid</th>
                <th>Paid_Date</th>
                <th>Modification</th>
            </tr>
        </thead>

        <tbody>
            {
                props.list.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.Utility_Name}</td>
                        <td>{data.Month}</td>
                        <td>{data.Paid}</td>
                        <td>{data.Paid_Date}</td>
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
