
import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', { //Request Line
        headers: { // Telling the server who we are
            Authorization: 'Client-ID 9kbHpM2XRFZMz2BDc8onWABdykl2-z9CKsiQIIJKIrc'// Provide authentication       
        },
        params: {
            query: term
        }      
        
    });
    
    return response.data.results;
};


export default searchImages;

