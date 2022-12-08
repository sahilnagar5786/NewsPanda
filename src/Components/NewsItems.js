import React from 'react'

const NewsItems = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display : 'flex',justifyContent : 'flex-end',position : 'absolute',right : '0'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/11/pexels-vicky-tran-1745766-332x435.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body my-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItems
