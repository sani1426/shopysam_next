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

const EditAvatarModal = ({ user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [file, setFile] = useState('')
  const [previewImage, setPreviewImage] = useState()
  const PreviewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewImage(reader.result)
    }
  }
  const handleOnChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
    PreviewFile(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!previewImage) return
    uploadImage(previewImage)
  }
  const uploadImage = async (image) => {
    try {
      const { data } = await axios.post(
        SummaryApi.uploadAvatar.url,
        {
          image : image
        },
        { withCredentials: true }
      )
      if (data?.success) {
        toast.success(data?.message)
        console.log(data)
      } else {
        toast.error(data.message)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }
  return (
    <>
      <Button variant='bordered' color='warning' onPress={onOpen}>
        Change Avatar
      </Button>
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
                      upload Avatar
                    </div>
                    <input
                      name='image'
                      value={file}
                      onChange={handleOnChange}
                      type='file'
                      id='uploadProfile'
                      className='hidden'
                    />
                  </label>
                  <button>Submit</button>
                </form>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt=''
                    className='w-36 h-36 rounded-full'
                  />
                )}
              </ModalBody>
              {/* <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditAvatarModal
