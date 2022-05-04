import axios from "axios"

export const get = async (setClubs) => {
    await axios.get("http://localhost:5000/clubs")
    .then(res => {
        console.log(res.data)
        setClubs(res.data)
    })
}