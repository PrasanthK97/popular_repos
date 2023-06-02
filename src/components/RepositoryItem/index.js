// Write your code here
import './index.css'

const RespositoryItem = props => {
  const {courseItems} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount, id} = courseItems

  return (
    <div className="course-item-container">
      <img className="course-tile" src={avatarUrl} alt={name} />
      <h1>{name}</h1>

      <div className="icon-container">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount}</p>
      </div>
      <div className="icon-container">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount}</p>
      </div>
      <div className="icon-container">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount}</p>
      </div>
    </div>
  )
}

export default RespositoryItem
