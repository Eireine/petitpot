import React from 'react'
import './ArticlePreview.css'


function ArticlePreview(props) {
    return (
        <div id="basicArticle">
            <div class="side-left">
                <div id="tag">{props.tag}</div>
                <img src={props.image}></img>
            </div>

            <div class="side-right">
                <h1>{props.title}</h1>
                <div class="date">{props.date}</div>
                <div class="description">{props.description}</div>
                <div class="link"><a href="{props.link}">Lire l'article</a></div>
            </div>
        </div>
    )
}

export default ArticlePreview


