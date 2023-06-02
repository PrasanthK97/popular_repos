import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RespositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const apiUrl = 'https://apis.ccbp.in/popular-repos?language='

class GithubPopularRepos extends Component {
  state = {activeTab: 'ALL', mainList: [], isLoading: true}

  componentDidMount() {
    const {activeTab} = this.state
    this.apiCall(activeTab)
  }

  selectedTab = id => {
    this.setState({activeTab: id})
    console.log(id)
    this.apiCall(id)
  }

  apiCall = async selectedId => {
    const {activeTab} = this.state
    const response = await fetch(`${apiUrl}${selectedId}`)
    const data = await response.json()
    const reqData = data.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
      id: each.id,
    }))
    this.setState({mainList: reqData, isLoading: false})
    console.log(reqData)
  }

  render() {
    const {mainList, isLoading} = this.state

    return (
      <div className="bg-main">
        {isLoading ? (
          <div data-testid="loader">
            <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
          </div>
        ) : (
          <>
            <h1>Popular</h1>
            <ul className="tab-container">
              {languageFiltersData.map(each => (
                <li key={each.id}>
                  <LanguageFilterItem
                    selectedTab={this.selectedTab}
                    langTabs={each}
                  />
                </li>
              ))}
            </ul>
            <div className="courses-container">
              <ul>
                {mainList.map(each => (
                  <li key={each.id}>
                    <RespositoryItem courseItems={each} />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
