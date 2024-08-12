import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './styles/app.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import DailyGoals from './otherprojects/components/daily_goals/DailyGoals'
import Netflix from './otherprojects/components/netflix/Netflix'
import ChatApp from './otherprojects/components/chatApp/ChatApp'
BrowserRouter

import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    {/* <App /> */}
    {/* <DailyGoals/> */}
    {/* <Netflix/> */}
    <ChakraProvider>
    <ChatApp/>
    </ChakraProvider>
  </React.StrictMode>
)
