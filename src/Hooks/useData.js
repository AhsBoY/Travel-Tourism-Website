import axios from 'axios';
import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        const url = "https://howling-tomb-43983.herokuapp.com/info"
        axios.get(url)
            .then(res => setData(res.data))
    }, [])
    return (
        data
    );
};

export default useData;