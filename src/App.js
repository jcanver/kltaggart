import React from 'react'
import { Root, Routes } from 'react-static'
import { ThemeProvider } from 'styled-components'
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
// import { createMuiTheme } from '@material-ui/core/styles'
// import grey from '@material-ui/core/colors/grey'
// import { Link } from '@reach/router'
import theme from 'theme'

import './app.css'

// const muiTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#FFFFFF'
//     }
//     // secondary: {
//     //   main: '#f44336',
//     // },
//   },
// })


function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Root>
  )
}

export default App
