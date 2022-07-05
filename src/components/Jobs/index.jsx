import React from 'react'
import { Job_card } from '../components/Job_card';

const index = () => {

    const apiurl = "https://job-portal-assignment3.herokuapp.com/jobs"
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(apiurl)
            .then((response) => {
                setData(response.data)
            })
    }, [])
    return (
        <div >
            {data.map(e => <Job_card e={e} />)}
        </div>
    )
}

export default index