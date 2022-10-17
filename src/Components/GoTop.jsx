import { faCircleUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const GoTop = () => {
  return (
    <div>
        <p className="text-orange-600 font-bold text-2xl"><FontAwesomeIcon icon={faCircleUp} /></p>
    </div>
  )
}

export default GoTop