const Base_Url = 'https://shopysam-back.onrender.com'

const SummaryApi = {
  registerUser: {
    url: `${Base_Url}/api/auth/register`,
    method: 'post',
  },
  verifyEmail: {
    url: `${Base_Url}/api/auth/verify-email`,
    method: 'post',
  },
  loginUser: {
    url: `${Base_Url}/api/auth/login`,
    method: 'post',
  },
  userDetails: {
    url: `${Base_Url}/api/auth/details`,
    method: 'get',
  },
  uploadAvatar: {
    url: `${Base_Url}/api/auth/upload-avatar`,
    method: 'put',
  },
  logoutUser: {
    url: `${Base_Url}/api/auth/logout`,
    method: 'get',
  },

  //  // shop api // //
  getDigitalsCategory:{
    url : `${Base_Url}/api/digitals/categories`,
    method : 'get'
  },
  getClothCategory:{
    url : `${Base_Url}/api/cloth/categories`,
    method : 'get'
  },
  getDigitalsByFilter :{
    url : `${Base_Url}/api/digitals/filtering`,
    method : 'get'
  },
  getClothByFilter :{
    url : `${Base_Url}/api/cloth/filtering`,
    method : 'get'
  },
}

export default SummaryApi
