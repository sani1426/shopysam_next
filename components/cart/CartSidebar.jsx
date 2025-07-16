import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Button,
  Badge
} from '@heroui/react'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const CartSidebar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
    <Badge color='danger' content={3} shape='circle' showOutline={false}>

      <button onClick={onOpen} className='text-3xl'>
        <IoCartOutline />
      </button>
    </Badge>

      <Drawer
      backdrop='blur'
      size='sm'
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              duration: 0.3,
            },
            exit: {
              x: 100,
              opacity: 0,
              duration: 0.3,
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className='flex flex-col gap-1'>
                Cart Sidebar
              </DrawerHeader>

              <DrawerBody>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe eum, a incidunt ratione alias iure!
                </p>
              </DrawerBody>
              <DrawerFooter className='flex items-center'>
                <Button onPress={onClose} color='success' variant='light'>
                  <Link to='/cart'>Payment</Link>
                </Button>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartSidebar
