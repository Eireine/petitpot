import React from 'react'
import './ArticlePreview.css'


function ArticlePreview(props) {
    return (
        <React.Fragment>
            <div id="basicArticle">
                <div id="side-left">
                    <img src={props.image}></img>
                    <div id="tag">{props.tag}</div>
                </div>

                <div id="side-right">
                    <div id="title">{props.title}</div>
                    <div id="date">{props.date}</div>
                    <div id="description">{props.description}</div>
                    <div id="link"><a href="{props.link}">Lire l'article</a></div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default ArticlePreview


