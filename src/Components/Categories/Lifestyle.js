import React, { Component } from 'react'
import { getArticles } from '../../Modules/ArticlesData'
import { Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Lifestyle extends Component {
  state = {
    articles: [],
    categoryName: 'Lifestyle'
  }

  setErrorMessage = (error) => {
    this.setState({
      errorMessage: error
    })
  }

  componentDidMount() {
    this.getArticlesData()
  }

  async getArticlesData() {
    let fetch = await getArticles();
    if (fetch.error) {
      this.setErrorMessage(fetch.error)
    } else {
      this.setState({
        articles: fetch
      })
    }
  }

  articleIngress = (content, wordCount) => {
    let ingress = content.split(' ').slice(0, wordCount).join(' ')
    return ingress + '...'
  }

  render() {
    let { articles, categoryName } = this.state
    let filteredArticleList = []
    let errorMessage
    let lifestyleArticles

    articles.forEach(article => {
      if (article.category.name === categoryName) {
        return filteredArticleList.push(article)
      }
    })

    lifestyleArticles = (
      filteredArticleList.map(article => {
        debugger
        return (
          <NavLink id={`article_${article.id}`} key={article.id} to={`/article/${article.id}`} >
            <Image src={article.image} alt="" wrapped ui={false} />
            <h3>{article.title}</h3>
            <p>{this.articleIngress(article.content, 20)}</p>
          </NavLink>
        )
      }
    ))

    return (
      <>
        <h1 id='lifestyle-header'>Lifestyle</h1>
        {lifestyleArticles}
        {errorMessage}
      </>
    )
  }
}

export default Lifestyle