// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const changeTabItem = () => {
    onChangeTabItem(tabId)
  }
  const buttonClassName = isActive ? 'button-active' : ''

  return (
    <li className="button-item">
      <button
        className={`button ${buttonClassName}`}
        type="button"
        onClick={changeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
