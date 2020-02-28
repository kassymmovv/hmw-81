import axios from 'axios'

export const POST_URLS = 'POST_URLS';
export const GET_URLS = 'GET_URLS'

export const getUrls = (error,status) => ({type:GET_URLS,error,status});
export const postUrls = url => ({type:POST_URLS,url});


export const postUrl = url => {
  return async (dispatch) => {
      const response =  await axios.post('http://localhost:8000/short',url);
      dispatch(postUrls(response.data))
  }
};
