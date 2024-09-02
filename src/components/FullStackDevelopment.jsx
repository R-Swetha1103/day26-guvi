
import React from 'react'

function FullStackDevelopment({data,setData}) {
  return <div className='container'>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {
    data.map((e,i)=>{
        return e.type==="FSD"? (<div className="col" key= {i}>
        <div className="card h-100">
          <img src={e.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{e.content}</h5>
            </div>
          <div className="card-footer">
            <small className="text-body-secondary">{e.date}</small>
          </div>
        </div>
      </div>
        ):""
    })
}
    
      </div>
    </div>
}

export default FullStackDevelopment
