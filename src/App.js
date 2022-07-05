import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Job_card } from './components/Job_card';

function App() {
  const apiurl = "https://job-portal-assignment3.herokuapp.com/jobs"
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(apiurl)
      .then((response) => {
        setData(response.data)
      })
  }, [])

  return (
    <>
      <div className="App">
        {data.map(e => <Job_card e={e} />)}

        i am

      </div>
    </>
  );
}

export default App;
