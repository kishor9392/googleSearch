import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    search: '',
  }

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  updateSearch = value => {
    this.setState({search: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state
    const newList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="bg">
        <div className="bg2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="img"
          />

          <div className="bg3">
            <div className="bg4">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="img2"
              />

              <input
                type="search"
                placeholder="Search Google"
                className="search"
                onChange={this.onSearch}
                value={search}
              />
            </div>

            <ul className="bg5">
              {newList.map(each => (
                <SuggestionItem
                  key={each.id}
                  suggestionsList={each}
                  onTap={this.updateSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
