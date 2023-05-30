import './index.css'

const AppHistory = props => {
  const {eachAppHistory, onDeleteApp} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachAppHistory
  const onDeleteAppHistory = () => {
    onDeleteApp(id)
  }
  return (
    <li>
      <p className="timeAccessed">{timeAccessed}</p>
      <div className="app-history">
        <img src={logoUrl} alt="domain logo" className="logoUrl" />
        <div className="app-name-container">
          <p key="domainUrl">
            {title}
            <br />{' '}
            <span>
              <p>{domainUrl}</p>
            </span>
          </p>
          <button
            type="button"
            data-testid="delete"
            onClick={onDeleteAppHistory}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default AppHistory
