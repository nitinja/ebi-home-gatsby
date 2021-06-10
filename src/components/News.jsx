import React, { useEffect, useState } from 'react'

export default function News() {
  const [news, setNews] = useState([])
  const [firstNews, setFirstNews] = useState()
  useEffect(() => {
    fetch('https://www.ebi.ac.uk/about/news/feed.json?cachedate=5411008')
      .then(data => data.json())
      .then(data => {
        setFirstNews(data.nodes[0].node)
        setNews(data.nodes.slice(1, 2))
      })
  }, [])
  return (
    <div>
      {firstNews && (
        <div style={{border: '1px solid lightgrey'}}>
          <a
            className='block'
            href='https://www.ebi.ac.uk/about/news/announcements/visualising-rna-structures-using-r2dt'>
            <img src={firstNews.field_image.src} />
          </a>
          <div className='' style={{}}>
            <a href={firstNews.path}>
              <small>09 Jun 2021</small>
              <p>Visualising RNA structures using R2DT</p>
            </a>
          </div>
        </div>
      )}
      {news.map(item => (
        <NewsItem newsItem={item.node} key={item.node.path} />
      ))}
    </div>
  )
}

const NewsItem = ({ newsItem }) => {
  return (
    <>
      <a href={newsItem.path}>
        <h3>{newsItem.title}</h3>
        <p>{newsItem.body}</p>
      </a>
    </>
  )
}
