// Write your code here
const LanguageFilterItem = props => {
  const {langTabs, selectedTab} = props
  const {language, id} = langTabs

  const onClickTab = () => {
    selectedTab(id)
  }

  return (
    <button type="button" onClick={onClickTab}>
      {language}
    </button>
  )
}

export default LanguageFilterItem
