import {Component} from 'react'
import AppHistory from './components/AppHistory'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {historyList: initialHistoryList, searchInput: ''}

  onDeleteAppHistory = uniqueNo => {
    const {historyList} = this.state
    const resultHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== uniqueNo,
    )
    this.setState({historyList: resultHistoryList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {historyList, searchInput} = this.state
    const filteredHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let data
    let emptyHistory
    if (filteredHistoryList.length === 0) {
      emptyHistory = <p className="no-results">There is no history to show</p>
    } else {
      data = filteredHistoryList.map(eachHistory => (
        <AppHistory
          eachAppHistory={eachHistory}
          key={eachHistory.id}
          onDeleteApp={this.onDeleteAppHistory}
        />
      ))
    }
    return (
      <div>
        <div className="container">
          <div className="history-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <div className="search-container">
              <div className="search-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search"
                />
              </div>
              <input
                type="search"
                placeholder="Search history"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </div>
        <div className="history-body-container">
          <ul>
            {data}
            {emptyHistory}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
