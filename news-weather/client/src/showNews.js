import React from 'react'

 const ShowNews = ({headline, content, linkToimage, Source, linkTonews})=> {
    
        return (
                <div>
                    <h2><a href={linkTonews}>{headline}</a></h2>
                    <a href={linkTonews}><img src={linkToimage} alt='' width='49%' height='10%'/></a>
                    <h5>{Source}</h5>
                    <p>{content}
                    </p> 
                </div> 
        );
    
}
export default ShowNews;