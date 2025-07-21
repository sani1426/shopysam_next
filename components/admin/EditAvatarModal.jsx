'use client'
import SummaryApi from '@/common'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@heroui/react'
import axios from 'axios'
import { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { toast } from 'sonner'

const EditAvatarModal = ({user}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [loading,setLoading] = useState(false)

  const handleSubmit = (e)=>{
      e.preventDefault()
  }

  const handleUploadAvatarImage = async(e)=>{
      const file = e.target.files[0]

      if(!file){
          return
      }
      console.log(file)
      let formData = new FormData()
      formData.append('avatar',file)
      console.log(formData)

      try {
        setLoading(true)
        const {data} = await axios.put(SummaryApi.uploadAvatar,{
        formData
        },{withCredentials:true})

    } catch (error) {
        toast.error(error)
    } finally{
        setLoading(false)
    }
          }
  return (
    <>
      <Button variant='bordered' color='warning' onPress={onOpen}>Change Avatar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Change Avatar
              </ModalHeader>
              <ModalBody>
                <div className='w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm'>
                  {user?.avatar ? (
                    <img
                      alt={user?.name}
                      src={user?.avatar}
                      className='w-full h-full'
                    />
                  ) : (
                    <FaRegUserCircle size={65} />
                  )}
                </div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor='uploadProfile'>
                    <div className='border border-orange-500 cursor-pointer hover:bg-orange-500 px-4 py-2 rounded-lg text-sm my-3'>
                      {loading ? 'Loading...' : 'Upload'}
                    </div>
                    <input
                      onChange={handleUploadAvatarImage}
                      type='file'
                      id='uploadProfile'
                      className='hidden'
                    />
                  </label>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditAvatarModal
