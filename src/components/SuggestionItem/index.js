import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onTap} = props

  const {suggestion} = suggestionsList

  const onPress = () => {
    onTap(suggestion)
  }

  return (
    <li className="bg6">
      <p className="p">{suggestion}</p>
      <button type="button" className="btn" onClick={onPress}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="img3"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
