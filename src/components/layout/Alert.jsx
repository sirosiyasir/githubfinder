import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

function Alert() {
  const { alert } = useContext(AlertContext)
  return (
    alert !== null && (
      <div>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  )
}

export default Alert
