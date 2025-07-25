'use client'

import Axios from '@/utils/axios'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  ModalFooter,
} from '@heroui/react'
import { toast } from 'sonner'

const ConfirmBox = ({ deleteData ,fetchCategory}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const handleDeleteData= async()=>{
        try {
            const response = await Axios({
                ...BackendApi.delete_Category,
                data : deleteData?._id
            })
    
            const { data : responseData } = response
    
            if(responseData?.success){
                toast.success(responseData.message)
                fetchCategory()
                onClose()
            }
        } catch (error) {
          toast.error('error')
        }
    }
  return (
    <>
      <button
        onClick={onOpen}
        className='flex-1 bg-red-100 hover:bg-red-200 text-red-600 font-medium py-1 rounded'
      >
        Delete
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Permanent Delete
              </ModalHeader>
              <ModalBody>
                <h1 className='my-4'>Are you sure permanent delete ?</h1>
              </ModalBody>
              <ModalFooter>
                <Button color='secondry' variant='light' onPress={onClose}>
                  Cancel
                </Button>
                <Button color='danger' onPress={handleDeleteData}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConfirmBox
