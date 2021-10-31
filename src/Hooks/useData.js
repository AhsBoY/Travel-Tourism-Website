import axios from 'axios';
import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        const url = "http://localhost:5000/info"
        axios.get(url)
            .then(res => setData(res.data))
    }, [])
    return (
        data
    );
};

export default useData;