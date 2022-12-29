import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.css"

const Card = ({ data }) => {

    return (

        <div>
            {data.map((e, i) => {
                return (
                    <div className="row border rounded p-3 mt-3" style={{ borderColor: '#DFDFDF' }} key={i}>
                        <div className="col-12 col-lg-3">
                            <div className="img"></div>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="content row">
                                <div className='col-sm-9'>
                                    <p>{e.post_title}</p>
                                    <p>{e.meta_description}</p>
                                    <Link to={`description/${e.ID}`} className='btn btn-sm'>View Description</Link>
                                </div>
                                <p className='col-sm-3' style={{ textAlign: 'end' }}>{e.publish_date}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card