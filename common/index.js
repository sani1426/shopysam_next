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
  forgotPassword: {
    url: `${Base_Url}/api/auth/forgot-password`,
    method: 'put',
  },
  verifyOtp: {
    url: `${Base_Url}/api/auth/verify-otp`,
    method: 'put',
  },
  resetPassword: {
    url: `${Base_Url}/api/auth/reset-password`,
    method: 'put',
  },
  logoutUser: {
    url: `${Base_Url}/api/auth/logout`,
    method: 'get',
  },
  // // admin api // //
  admin_AllUsers: {
    url: `${Base_Url}/api/admin/all-users`,
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
