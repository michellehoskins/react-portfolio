import React from 'react'

export default function BlogArticle(props) {
    console.log(props.match.params.article)

return <div style={{marginTop: '7rem'}}>The article that should load is: {props.match.params.article}</div>
}