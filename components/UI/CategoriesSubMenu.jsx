"use client"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
Accordion ,
AccordionItem ,
  useDisclosure,
  Button,
} from '@heroui/react'


import { TfiAngleDown } from "react-icons/tfi";

import { RiMenu2Fill } from "react-icons/ri";
import {FaRegSquarePlus} from 'react-icons/fa6'
import { useAppContext } from '@/context/appContext';
import Link from 'next/link';

const CategoryMenu = () => {
  const { digitals, clothes } = useAppContext()

  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button
        onPress={onOpen}
        className='flex items-center gap-1 text-gray-500 dark:text-gray-400'
        variant='bordered'
        id='drop_trigger'
        radius='none'
      >
        <RiMenu2Fill className='text-2xl ' />
        <span className='text-xl '>Shop By Categories</span>
        <TfiAngleDown className='text-lg' />
      </Button>

      <Drawer
      backdrop='opaque'
      size='xs'
      placement='left'
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              duration: 0.3,
            },
            exit: {
              x: -100,
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
               Shop By Categories
              </DrawerHeader>

              <DrawerBody className='relative'>
            <Accordion  variant='faded'>
            <AccordionItem key='1' title="Digitals" className='w-full ' >
<div className='flex flex-col gap-1'>
                {
                  digitals?.map(item => (
               <Link key={item?.id} className='category_link' href={`/digitals/${item}`}>{item}</Link>
                  ))
                }
        </div>
            </AccordionItem>

            <AccordionItem key='2' title="Fashion" className='w-full ' >
<div className='flex flex-col gap-1'>
                {
                  clothes?.map(item => (
               <Link key={item?.id} className='category_link' href={`/cloth/${item}`}>{item}</Link>
                  ))
                }
        </div>
            </AccordionItem>

            <AccordionItem key='3' title="Tools" className='w-full ' >
<div className='flex flex-col gap-1'>
       
        </div>
            </AccordionItem>
            </Accordion>

              </DrawerBody>
           
            </>
          )}
        </DrawerContent>
      </Drawer>
     
    </>
  )
}

export default CategoryMenu
