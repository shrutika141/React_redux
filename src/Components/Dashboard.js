import React, { useEffect, useState } from 'react'
import Card from './Card/Card';
import { getPost } from './../Middleware/Api';
import { useDispatch } from 'react-redux';
import { post } from '../Redux/Actions/Actions';
import Pagination from './Pagination/Pagination';

const Dashboard = () => {

  const dispatch = useDispatch();
  const [posts, setPosts] = useState('')
  const [dataIsLoaded, setDataIsLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  useEffect(() => {
    getPost()
      .then((response) => {
        dispatch(post(response.data))
        setPosts(response.data)
        setDataIsLoaded(true)
      })
  }, [])

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = posts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(posts.length / recordsPerPage)

  return (
    <div className='container'>
      <h3 className='m-4' style={{ color: '#0229BF' }}>Trending Articles</h3>
      {
        dataIsLoaded ? (
          <div>
            <Card data={currentRecords} />
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>

        ) : (
          <h5 className='ml-4'>Data is not Available !</h5>
        )
      }
    </div>
  )
}

export default Dashboard