import React from 'react';
import articlecontent from './Article-content';
import ArticlesList from '../components/ArticlesList';

    const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articlecontent.find(article => article.name === name);

    // if a user hits a wrong url then display this message
    if(!article) return <h1>Article Does not Exist</h1>
    
    const otherArticle = articlecontent.filter(article => article.name !== name);

    return (

        <>

        <h1>{article.title} </h1>
        
        {article.content.map((paragraph)=>(

        <p >{paragraph}</p>

        ))}

         <ArticlesList articles={otherArticle}></ArticlesList>   
        </>

        );
        }
        export default ArticlePage