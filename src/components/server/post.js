import axios from "axios";

export const post = async (clubs) => {

    await axios.post("http://localhost:5000/clubs", clubs)
}