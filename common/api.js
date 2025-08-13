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
  upload_SubCategory: {
    url: '/api/admin/add-subcategory',
    method: 'post',
  },
  update_SubCategory: {
    url: '/api/admin/update-subcategory',
    method: 'put',
  },
  delete_SubCategory: {
    url: '/api/admin/delete-subcategory',
    method: 'delete',
  },
  get_SubCategories: {
    url: '/api/subcategory/all',
    method: 'get',
  },
  get_SubCategory_By_categoryId: {
    url: '/api/subcategory//by-category-id',
    method: 'post',
  },
  upload_Image: {
    url: '/api/file/upload',
    method: 'post',
  },
  create_Product: {
    url: '/api/product/create',
    method: 'post',
  },
  get_Products: {
    url: '/api/product/all',
    method: 'get',
  },
  update_Product: {
    url: '/api/product/update',
    method: 'put',
  },
  delete_Product: {
    url: '/api/product/delete',
    method: 'delete',
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
  get_Product_ByCategory: {
    url: '/api/product/by-category',
    method: 'post',
  },
  get_Product_Details: {
    url: '/api/product/details',
    method: 'get',
  },
}

export default BackendApi
