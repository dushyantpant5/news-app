import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title,description,imgUrl,newsUrl,author,source,publishTime} = this.props;

    return (
      <div className="my-3">
        <div className="card" style ={{width:"18"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex : '1',left:'86%'}}>
            {source}
        </span>
            <img src={imgUrl} className="card-img-top" alt="...."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(publishTime).toDateString()} </small></p>
                <a href={newsUrl} target = "blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
