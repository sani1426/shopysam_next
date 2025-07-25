export const BASE_URL = 'https://shopysam-back.onrender.com'

const BackendApi = {
  registerUser: {
    url: '/api/auth/register',
    method: 'post',
  },

  verifyEmail: {
    url: '/api/auth/verify-email',
    method: 'post',
  },
  loginUser: {
    url: '/api/auth/login',
    method: 'post',
  },
  userDetails: {
    url: '/api/auth/details',
    method: 'get',
  },
  forgotPassword: {
    url: '/api/auth/forgot-password',
    method: 'put',
  },
  verifyOtp: {
    url: '/api/auth/verify-otp',
    method: 'put',
  },
  resetPassword: {
    url: '/api/auth/reset-password',
    method: 'put',
  },
  logoutUser: {
    url: '/api/auth/logout',
    method: 'get',
  },
  // // admin api // //
  admin_AllUsers: {
    url: '/api/admin/all-users',
    method: 'get',
  },
  upload_Category: {
    url: '/api/admin/upload-category',
    method: 'post',
  },
  update_Category: {
    url: '/api/admin/update-category',
    method: 'post',
  },
  delete_Category: {
    url: '/api/admin/delete-category',
    method: 'delete',
  },
  get_Categories: {
    url: '/api/category/all',
    method: 'get',
  },
  upload_Image: {
    url: '/api/file/upload',
    method: 'post',
  },

  //  // shop api // //
  getDigitalsCategory: {
    url: '/api/digitals/categories',
    method: 'get',
  },
  getClothCategory: {
    url: 'api/cloth/categories',
    method: 'get',
  },
  getDigitalsByFilter: {
    url: '/api/digitals/filtering',
    method: 'get',
  },
  getClothByFilter: {
    url: '/api/cloth/filtering',
    method: 'get',
  },
}

export default BackendApi
