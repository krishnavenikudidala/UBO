import axios from 'axios';

const url="http://localhost:4000/Utility"
export async function GetBill() {
  return (
    await axios.get(url)
  )
}

export async function DeleteBill(id) {
  return (
    await axios.delete(`${url}/${id}`)
  )
}

export async function postBill(data) {
  return (
    await axios.post(url,data,{headers:{
      'Content-Type':'application/json'
    }
    })
  )
}

