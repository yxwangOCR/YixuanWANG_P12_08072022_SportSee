import axios from 'axios'
import { useQuery } from 'react-query'



const getUser = async (userId) => {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}`)
    return data
}

export default function useUser(idUser) {
    return useQuery(['user'], () => getUser(idUser))
}
