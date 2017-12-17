import React from 'react'
import PropTypes from 'prop-types'

export const Html = ({children}) => {
  return (
    <html>
      <body>
        <div id='app'>
          {children}
        </div>
        <script src='/root.js' />
      </body>
    </html>
  )
}

Html.propTypes = {
  children: PropTypes.any
}
