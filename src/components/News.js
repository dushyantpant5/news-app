import React, { Component } from 'react'
import LoadingSpinner from './LoadingSpinner';
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'

export default class News extends Component {
  
 static defaultProps = {
    pageSize : '5',
    country : 'in',
    category : 'general'
 }

 constructor()
  {
    super();
    this.state = {
        articles : [],
        loading : false,
        page : 1,
        
    }
    
  }

  async componentDidMount()
  {
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df30dd84b83b478f94ba580d819ecd79&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let newsData = await fetch(fetchUrl);
    let parsedData = await newsData.json();
    this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults,
        loading : false
    })
  }

handlePreviousBtn = async () =>
{
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df30dd84b83b478f94ba580d819ecd79&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let newsData = await fetch(fetchUrl);
    let parsedData = await newsData.json();
    this.setState({
        page : this.state.page-1,
        articles : parsedData.articles,
        loading : false
     })
}


handleNextBtn = async () =>
{
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df30dd84b83b478f94ba580d819ecd79&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let newsData = await fetch(fetchUrl);
    let parsedData = await newsData.json();
    this.setState({})

    this.setState({
        page : this.state.page+1,
        articles : parsedData.articles,
        loading:false
    })
}
  
render() {
    return (
      <>
      <div className="container my-3">
        <h1 className='text-center my-3'>TOP HEADLINES</h1>
        {this.state.loading && <LoadingSpinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element) =>{
               return <div className="col-md-4" key={element.title}>
                    <NewsItem title={element.title} description = {element.description} imgUrl={element.urlToImage} newsUrl={element.url} author = {element.author} publishTime={element.publishedAt} source = {element.source.name}/>
                </div>
            })}
        </div>

      <div className="container my-1 d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousBtn}>&larr; Previous</button>
      <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
      </div>
      
      </div>

      
      </>
    )
  }
}
