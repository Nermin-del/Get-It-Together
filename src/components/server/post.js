import axios from "axios";

export const post = async (data) => {

    axios.post("http://localhost:3000/clubs", data).catch((error => {
        console.log('COULD NOT SAVE CLUBS :( ', error);
    }))
}