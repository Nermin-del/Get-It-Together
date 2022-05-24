import axios from "axios"

export const Delete = async (id) => {
    await axios.delete(`http://localhost:3000/clubs/${id}`)

}