import React from 'react';
import articlecontent from './Article-content';

const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articlecontent.find(article => article.name === name);

    if(!article) return <h1>Article Does not Exist</h1>
    

    return (

<>
<h1>{article.title} </h1>
{article.content.map((paragraph)=>(

<p>{paragraph}</p>

)

)}

</>

);
}
export default ArticlePage