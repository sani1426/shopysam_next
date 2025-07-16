// "use client"
// import { useEffect } from 'react'

// import { MdArrowBackIos } from 'react-icons/md'
// import { MdArrowForwardIos } from 'react-icons/md'



// const ProductCarousel = ({data}) => {
//   useEffect(() => {
//     let nextBtn = document.getElementById('next')
//     let prevBtn = document.getElementById('prev')
//     let backBtn = document.getElementById('back')
//     let seeMoreBtn = document.querySelectorAll('.see-more')
//     let carousel = document.querySelector('.carousel')
//     let carouselList = document.querySelector('.carousel .list')

//     nextBtn.onclick = function () {
//       showSlider('next')
//     }

//     prevBtn.onclick = function () {
//       showSlider('prev')
//     }

//     let unAcceptedClick
//     const showSlider = (type) => {
//       nextBtn.style.pointerEvents = 'none'
//       prevBtn.style.pointerEvents = 'none'
//       carousel.classList.remove('prev', 'next')
//       let items = document.querySelectorAll('.carousel .list .item')
//       if (type === 'next') {
//         carouselList.appendChild(items[0])
//         carousel.classList.add('next')
//       } else {
//         let positionLast = items.length - 1
//         carouselList.prepend(items[positionLast])
//         carousel.classList.add('prev')
//       }
//       clearTimeout(unAcceptedClick)
//       unAcceptedClick = setTimeout(() => {
//         nextBtn.style.pointerEvents = 'auto'
//         prevBtn.style.pointerEvents = 'auto'
//       }, 2000)
//     }

//     seeMoreBtn.forEach((button) => {
//       button.onclick = function () {
//         carousel.classList.add('show-details')
//       }
//     })
//     backBtn.onclick = function () {
//       carousel.classList.remove('show-details')
//     }
//   }, [])

//   return (
//     <div className='carousel h-[630px]  overflow-hidden relative mt-[-50px] '>
//       <div className='list absolute top-10 left-[45%] w-[1140px] max-w-[90%] transform translate-x-[-50%] h-[80%] '>
//         {data?.map((_, index) => {
//           return (
//             <div
//               key={index}
//               className='item absolute left-0 pl-2 top-0 w-[70%] h-[100%] text-[15px]'
//             >
//               <img
//                 className={`w-[45%] absolute right-0 top-[50%] transform translate-y-[-40%]  object-fit-cover h-[90%] `}
//                 src={_?.images[0]}
//                 alt=''
//               />
//               <div className='intro absolute top-[50%] transform translate-y-[-50%] w-[400px] opacity-0 pointer-events-none'>
//                 <div className='title text-2xl font-bold'>{_?.category}</div>
//                 <div className='topic text-4xl mt-4 '>{_?.name}</div>
//                 <div className='des text-sm my-3'>{_?.description}</div>
//                 <button className='see-more bg-transparent py-2 px-4  border-b-2 font-bold mt-3'>
//                   see more
//                 </button>
//               </div>
//               <div className='detail opacity-0 pointer-events-none'>
//                 <div className='title'>{_?.name}</div>
//                 <div className='des'>{_?.description}</div>
//                 <div className='specification'>
//                   <div>
//                     <p>Brand</p>
//                     <p>{_?.brand}</p>
//                   </div>
//                   <div>
//                     <p>charging port</p>
//                     <p>type-c</p>
//                   </div>
//                   <div>
//                     <p>compatible</p>
//                     <p>android</p>
//                   </div>
//                   <div>
//                     <p>bluetooth</p>
//                     <p>5.3</p>
//                   </div>
//                   <div>
//                     <p>Price</p>
//                     <p>{_?.price}</p>
//                   </div>
//                 </div>
//                 <div className='checkout'>
//                   <button>add to cart</button>
//                   <button>checkout</button>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>

//       <div className='arrows absolute bottom-[10px] w-[1140px] max-w-[90%] left-[50%] transform translate-x-[-50%] flex justify-between items-center'>
//         <button
//           className='w-[40px] h-[40px] rounded-[50%] text-xl border-1 text-center flex items-center justify-center'
//           id='prev'
//         >
//           <MdArrowBackIos />
//         </button>
//         <button
//           className='border-none border-b-1 tracking-[3px] bg-transparent opacity-0 pointer-events-none'
//           id='back'
//         >
//           go back
//         </button>
//         <button
//           className='w-[40px] h-[40px] rounded-[50%] text-xl border-1 text-center flex items-center justify-center'
//           id='next'
//         >
//           <MdArrowForwardIos />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ProductCarousel
