import React from 'react'
import { Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Navbar, Feed, VideosDetail, ChannelDetail, SearchFeed} from './components'

function App() {
    return(
        <Box sx={{ backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id'  element={<VideosDetail />} />
                <Route path='/channel/:id'  element={<ChannelDetail />} />
                <Route path='/search/:searchTerms'  element={<SearchFeed />} />
            </Routes> 
        </Box>
   
    );
}

export default App
