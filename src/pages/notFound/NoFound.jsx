import React from 'react'
import { Link } from 'react-router-dom'

function NoFound() {
  return (
    <div className='my-5 py-5' >
        <div className="container">
        <div className='d-flex justify-content-between align-items-center flex-wrap' >
            <div style={{maxWidth :500}} >
                <img style={{width:"100%"}} src="404-title.jpg" alt="" />
                <h4 className='text-center mt-5' >
                Page Not Found!
                </h4>
                <div>
                <div className='text-center' >
                <Link to={"/"} >
                    <button className="btn btn-primary">
                    Go Back To Homepage
                    </button>
                </Link>
                </div>
                </div>
            </div>
            <div style={{maxWidth :500}} >
                <img style={{width:"100%"}} src="404.jpg" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default NoFound