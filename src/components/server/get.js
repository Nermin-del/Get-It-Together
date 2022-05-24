import axios from "axios"
import { useEffect } from "react";

export const get = async (setClubs) => {
    const result = await axios.get('http://localhost:3000/clubs');
    setClubs(result.data)
}