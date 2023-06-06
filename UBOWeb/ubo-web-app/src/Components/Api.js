import axios from 'axios';

const url="http://localhost:4000/Bills"
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