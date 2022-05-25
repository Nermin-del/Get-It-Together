import axios from "axios"
import { useEffect } from "react";

export const get = async () => {
    const result = await axios.get('http://localhost:3000/clubs');
    return result.data;
}