import React from 'react'

export const Job_card = (props) => {
    const {
        job_id,
        Company_name,
        Headquarter,
        Industry_type,
        Company_size,
        Description,
        Job_title,
        Experience,
        Job_location,
        Salary_range,
        Job_description,
        Company_logo } = props.e
    const handleClick = () => {
        console.log(job_id)
    }
    return (
        <div style={{ border: "1px solid red", width: "max-content", margin: "auto" }} onClick={() => handleClick()}>
            <img src={Company_logo} alt={Company_name + "_logo"} />
            <h2 style={{ fontSize: "16px" }}>{Company_name}</h2>
            <h3>{Job_title}</h3>
            <h4>Posted on 5th July</h4>
            <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                <h5>{Experience}</h5>
                <h5>{Job_location}</h5>
                <h5>{Salary_range}</h5>
            </div>
        </div >
    )
}


