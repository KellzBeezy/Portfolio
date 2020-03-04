import React, { Component } from 'react';
import ShowNews from './showNews.js';
import axios from 'axios';

 class News extends Component {
    constructor (){
        super();
        this.state = {
             arr : []
        }
    }

    componentDidMount(){
        axios.get('/news').then (res=>{
            this.setState({ 
                arr: res.data
            })
            console.log(this.state.arr);
        });
    }
    
    render() {
        return (
            <div>
           { 
                   this.state.arr.map(news=>(
                       //console.log(news.headline),
                       < ShowNews 
                       key={news.Id}
                       headline={news.headline} 
                       content={news.content}
                       linkToimage={news.linkToimage}
                       Source={news.Source}
                       linkTonews={news.linkTonews}
               />
                   )
                )
            }
   
           </div>
        )
    }
}
export default News;