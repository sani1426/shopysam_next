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

      const formData = new FormData()
      formData.append('avatar',file)


          setLoading(true)
          const response = await axios.put(SummaryApi.uploadAvatar ,{
              formData
          }
          )}
  return (
    <>
      <Button onPress={onOpen}>Change Avatar</Button>
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
                    <div className='border border-primary-200 cursor-pointer hover:bg-primary-200 px-4 py-1 rounded text-sm my-3'>
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
