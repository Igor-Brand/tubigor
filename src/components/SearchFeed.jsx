import {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material'
import Videos from './Videos';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
function SearchFeed() {
  
  const [videos, setVideos]=useState([]);
  const {searchTerm}  = useParams();
  useEffect(() => {
/*     setVideos(null);
 */
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto',
    height: '90vh', flex:2}}>
    <Typography variant="h4" 
        fontWeight={900}  
        color="white"
        mb={3} ml={{ sm: "100px"}}>
        Search Results <span style={{ color: "#FC1503" }}>{searchTerm}</span> 
      </Typography>

    <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed