'use client'

import React, { useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
  Tooltip,
} from '@heroui/react'
import { GoDotFill } from 'react-icons/go'
import { RiEyeFill } from 'react-icons/ri'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import Link from 'next/link'
import ViewImage from '@/components/UI/ViewImage'
import EditProduct from './EditProduct'
import { IoClose } from 'react-icons/io5'
import { toast } from 'sonner'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'
import Axios from '@/utils/axios'


export const columns = [
  { name: 'ID', uid: '_id', sortable: true },
  { name: 'Image', uid: 'image' },
  { name: 'NAME', uid: 'name', sortable: true },
  { name: 'Price', uid: 'price', sortable: true },
  { name: 'Category', uid: 'category' },
  { name: 'Sub_Category', uid: 'subCategory' },
  { name: 'Publish', uid: 'publish' },
  { name: 'Discount', uid: 'discount', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
]

export const publishOptions = [
  { name: 'true', uid: 'true' },
  { name: 'false', uid: 'false' },
]
export function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : ''
}

export const PlusIcon = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      focusable='false'
      height={size || height}
      role='presentation'
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      >
        <path d='M6 12h12' />
        <path d='M12 18V6' />
      </g>
    </svg>
  )
}

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      focusable='false'
      height={size || height}
      role='presentation'
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
        fill='currentColor'
      />
    </svg>
  )
}

export const SearchIcon = (props) => {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      focusable='false'
      height='1em'
      role='presentation'
      viewBox='0 0 24 24'
      width='1em'
      {...props}
    >
      <path
        d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path
        d='M22 22L20 20'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

export const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      focusable='false'
      height='1em'
      role='presentation'
      viewBox='0 0 24 24'
      width='1em'
      {...otherProps}
    >
      <path
        d='m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

const publishColorMap = {
  true: 'success',
  false: 'danger',
}

const INITIAL_VISIBLE_COLUMNS = [
  'image',
  'name',
  'price',
  'discount',
  'publish',
  'actions',
]

const AllProducts = ({ products, productCount,fetchProduct }) => {
  const [imageURL, setImageURL] = useState('')
  const [filterValue, setFilterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
  const [editOpen,setEditOpen]= useState(false)
  const [openDelete,setOpenDelete] = useState(false)
  const [data , setData]=useState()

  const handleDeleteCancel  = ()=>{
      setOpenDelete(false)
  }

  const handleDelete = async()=>{
    try {
      const response = await Axios({
        ...BackendApi.delete_Product,
        data : {
          _id : data._id
        }
      })

      const { data : responseData } = response

      if(responseData?.success){
          toast.success(responseData?.message)
          if(fetchProduct){
            fetchProduct()
          }
          setOpenDelete(false)
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  )
  const [publishFilter, setpublishFilter] = React.useState('all')
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: '_id',
    direction: 'ascending',
  })
  const [page, setPage] = React.useState(1)

  const pages = Math.ceil(productCount / rowsPerPage)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns])

  const filteredItems = React.useMemo(() => {
    let filteredproducts = [...products]

    if (hasSearchFilter) {
      filteredproducts = filteredproducts.filter((product) =>
        product.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    if (
      publishFilter !== 'all' &&
      Array.from(publishFilter)?.length !== publishOptions?.length
    ) {
      filteredproducts = filteredproducts.filter((product) =>
        Array.from(publishFilter).includes(product?.publish)
      )
    }

    return filteredproducts
  }, [products, filterValue, publishFilter])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column]
      const second = b[sortDescriptor.column]
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  const renderCell = React.useCallback((product, columnKey) => {
    const cellValue = product[columnKey]

    switch (columnKey) {
      case 'image':
        return (
          <div className='w-full grid grid-cols-2 gap-2 justify-center items-center '>

                <img
                src={product?.image[0]}
                alt={product?.name}
                className='w-12 h-12 cursor-pointer rounded'
                onClick={() => {
                  setImageURL(product?.image[0])
                }}
              />
              {
                product?.image[1] && (
                  <img
                  src={product?.image[1]}
                  alt={product?.name}
                  className='w-12 h-12 cursor-pointer rounded'
                  onClick={() => {
                    setImageURL(product?.image[1])
                  }}
                />
                )
              }
       
    
          </div>
        )
      case 'name':
        return <h1 className='text-xl font-bold truncate text-ellipsis'>{product?.name}</h1>
      case 'price':
        return (
          <div key={product?._id} className='flex flex-col'>
            <p className='text-bold text-small capitalize'>{product?.price}{' '}$</p>
          </div>
        )
      case 'publish':
        return (
          <Chip
            key={product?._id}
            className='capitalize border-none gap-1 text-default-600'
            color={publishColorMap[product?.publish]}
            size='sm'
            startContent={<GoDotFill size={18} />}
            variant='flat'
          >
            {product?.publish === true ? "true" : "false"}
          </Chip>
        )
      case 'discount':
        return (
          <Chip
            key={product?._id}
            classNames={{
              base: 'bg-linear-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
              content: 'drop-shadow-xs shadow-black text-white',
            }}
            size='md'
            variant='shadow'
          >
            {product?.discount}%
          </Chip>
        )
      case 'actions':
        return (
          <div key={product?._id} className='relative flex items-center gap-2'>
            <Tooltip color='primary' content='Details'>
              <span className='text-[22px] text-sky-600 cursor-pointer active:opacity-50'>
                <RiEyeFill />
              </span>
            </Tooltip>
            <Tooltip color='success' content='Edit product'>
              <span onClick={()=>{
                setData(product)
                setEditOpen(true)}}  className='text-[25px] text-success cursor-pointer active:opacity-50'>
                <CiEdit />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete product'>
              <span  onClick={()=>{
                setData(product)
                setOpenDelete(true)}}  className='text-[22px] text-danger cursor-pointer active:opacity-50'>
                <MdDeleteOutline />
              </span>
            </Tooltip>
          </div>
        )
      case 'category':
        return (
          <div className='grid grid-cols-2 items-center gap-1'>
            {product?.category?.map((p, index) => (
            <Chip
            key={index}
            className='capitalize border-none gap-1 text-default-600'
            color="primary"
            size='sm'
            variant='dot'
          >
            {p?.name}
          </Chip>
            ))}
          </div>
        )
      case 'subCategory':
        return (
          <div className='grid grid-cols-2 items-center gap-1'>
            {product?.subCategory?.map((p, index) => (
                      <Chip
                      key={index}
                      className='capitalize border-none gap-1 text-default-600'
                      color="warning"
                      size='sm'
                      variant='dot'
                    >
                      {p?.name}
                    </Chip>
            ))}
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value))
    setPage(1)
  }, [])

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value)
      setPage(1)
    } else {
      setFilterValue('')
    }
  }, [])

  const topContent = React.useMemo(() => {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between gap-3 items-end'>
          <Input
            isClearable
            classNames={{
              base: 'w-full sm:max-w-[44%]',
              inputWrapper: 'border-1',
            }}
            placeholder='Search by name...'
            size='sm'
            startContent={<SearchIcon className='text-default-300' />}
            value={filterValue}
            variant='bordered'
            onClear={() => setFilterValue('')}
            onValueChange={onSearchChange}
          />
          <div className='flex gap-3'>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button
                  endContent={<ChevronDownIcon className='text-small' />}
                  size='sm'
                  variant='flat'
                >
                  Publish
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={publishFilter}
                selectionMode='multiple'
                onSelectionChange={setpublishFilter}
              >
                {publishOptions.map((pub) => (
                  <DropdownItem key={pub.uid} className='capitalize'>
                    {capitalize(pub.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button
                  endContent={<ChevronDownIcon className='text-small' />}
                  size='sm'
                  variant='flat'
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode='multiple'
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className='capitalize'>
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className='bg-foreground text-background'
              endContent={<PlusIcon />}
              size='sm'
            >
              <Link href="/admin/upload-product" >

              Add New
              </Link>
            </Button>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-default-400 text-small'>
            Total {products.length} products
          </span>
          <label className='flex items-center text-default-400 text-small'>
            Rows per page:
            <select
              className='bg-transparent outline-hidden text-default-400 text-small'
              onChange={onRowsPerPageChange}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </label>
        </div>
      </div>
    )
  }, [
    filterValue,
    publishFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    productCount,
    hasSearchFilter,
  ])

  const bottomContent = React.useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-primary text-background',
          }}
          color='primary'
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant='light'
          onChange={setPage}
        />
        <span className='text-small text-default-400'>
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${items?.length} selected`}
        </span>
      </div>
    )
  }, [selectedKeys, items.length, page, pages, hasSearchFilter])

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'max-w-3xl'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        // changing the rows border radius
        // first
        'first:group-data-[first=true]/tr:before:rounded-none',
        'last:group-data-[first=true]/tr:before:rounded-none',
        // middle
        'group-data-[middle=true]/tr:before:rounded-none',
        // last
        'first:group-data-[last=true]/tr:before:rounded-none',
        'last:group-data-[last=true]/tr:before:rounded-none',
      ],
    }),
    []
  )
  return (
    <section className='pt-2 border-t-1 border-s-slate-100 '>
      <div className='p-2   bg-white shadow-md flex items-center justify-between'>
        <h2 className='font-semibold text-[1.2rem] text-[#2a2185]'>
          All Product
        </h2>
      </div>
      <div className='w-full p-8'>
        <Table
          isStriped
          // isCompact
          removeWrapper
          bottomContent={bottomContent}
          bottomContentPlacement='outside'
          classNames={classNames}
          className='p-2 rounded shadow-xl'
          //       selectedKeys={selectedKeys}
          //       selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          topContent={topContent}
          topContentPlacement='outside'
          //       onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={headerColumns}>
            {headerColumns?.map((col, index) => (
              <TableColumn
                key={col.uid}
                align={'start'}
                allowsSorting={col.sortable}
                className='text-[1.15rem] font-semibold'
              >
                {col.name}
              </TableColumn>
            ))}
          </TableHeader>

          <TableBody emptyContent={'No products found'} items={sortedItems}>
            {(item) => (
              <TableRow key={item._id}>
                {(colKey) => <TableCell>{renderCell(item, colKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {
        imageURL && (
          <ViewImage url={imageURL}  close={() => setImageURL('')} />
        )
      }

{
          editOpen && (
            <EditProduct fetchProductData={fetchProduct} data={data} close={()=>setEditOpen(false)}/>
          )
        }

        {
          openDelete && (
            <section className='fixed top-0 left-0 right-0 bottom-0 bg-neutral-600 z-50 bg-opacity-70 p-4 flex justify-center items-center '>
                <div className='bg-white p-4 w-full max-w-md rounded-md'>
                    <div className='flex items-center justify-between gap-4'>
                        <h3 className='font-semibold'>Permanent Delete</h3>
                        <button onClick={()=>setOpenDelete(false)}>
                          <IoClose size={25}/>
                        </button>
                    </div>
                    <p className='my-2'>Are you sure want to delete permanent ?</p>
                    <div className='flex justify-end gap-5 py-4'>
                      <button onClick={handleDeleteCancel} className='border px-3 py-1 rounded bg-red-100 border-red-500 text-red-500 hover:bg-red-200'>Cancel</button>
                      <button onClick={handleDelete} className='border px-3 py-1 rounded bg-green-100 border-green-500 text-green-500 hover:bg-green-200'>Delete</button>
                    </div>
                </div>
            </section>
          )
}
    </section>
  )
}

export default AllProducts
