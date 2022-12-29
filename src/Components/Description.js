import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "./Card/Card.css"

const Description = () => {

    const { id } = useParams()
    const post = useSelector(data => data)
    const filteredProject = post[0].filter(thisProject => thisProject.ID === parseInt(id));

    return (
        <div className="card m-5">
            <div className="card-header d-flex justify-content-between">
                <p>Author Name : {filteredProject[0].author_name}</p>
                <p>{filteredProject[0].publish_date}</p>
                
            </div>
            <div className="card-body">
                <h5 className="card-title">{filteredProject[0].post_title}</h5>
                <p className="card-text">{filteredProject[0].short_description}</p>
                <Link to="/" className="btn btn-sm">Back to Dashboard</Link>
            </div>
        </div>
    )
}

export default Description