import Axios from "./axios"
import BackendApi from '@/common/api'


const uploadImage = async(image)=>{
    try {
        const formData = new FormData()
        formData.append('image',image)

        const response = await Axios({
            ...BackendApi.upload_Image,
            data : formData
        })

        return response
    } catch (error) {
        return error
    }
}

export default uploadImage