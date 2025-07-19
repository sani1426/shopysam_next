





export const Nav_Link = [
        {
                id:1 , label:"Home", href:"/"
        },
        {
                id:2 , label:"Fashion", href:"/fashion"
        },
        {
                id:3 , label:"New Arrivals", href:"/new-arrivals"
        },
        {
                id:4 , label:"All Brands", href:"/all-brand"
        },
    
]

import { LuBadgeCheck, LuLayoutDashboard, LuShoppingBasket } from "react-icons/lu";

export const adminSidebarMenuItems = [
        {
          id: "dashboard",
          label: "Dashboard",
          path: "/admin",
          icon: <LuLayoutDashboard />,
        },
        {
          id: "products",
          label: "Products",
          path: "/admin/products",
          icon: <LuShoppingBasket />,
        },
        {
          id: "orders",
          label: "Orders",
          path: "/admin/orders",
          icon: <LuBadgeCheck  />,
        },
      ];


export const Carousel_items = [
        {
                id:1 , src:"/banners/banner-1.webp"
        },
        {
                id:2 , src:"/banners/banner-2.webp"
        },
        {
                id:3 , src:"/banners/banner-3.webp"
        },
        {
                id:4 , src:"/banners/banner_1.jpg"
        },
        {
                id:5 , src:"/banners/banner_2.jpg"
        },

]



export const Product_shop = [
        {
                name: 'Nike Mens Slim-fit Long-Sleeve T-Shirt',
            
                category: 'T-Shirts',
                images: ['/images/product_1/p11-1.jpg', '/images/product_1/p11-2.jpg'],
                tags: ['new-arrival'],
                isPublished: true,
                price: 21.8,
                listPrice: 0,
                brand: 'Nike',
                avgRating: 4.71,
                numReviews: 7,
            
                numSales: 9,
                countInStock: 11,
                description:
                  'Made with chemicals safer for human health and the environment',
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Green', 'Red', 'Black'],
            
                reviews: [],
              },
              {
                name: 'Jerzees Long-Sleeve Heavyweight Blend T-Shirt',
            
                category: 'T-Shirts',
                images: [
                  '/images/product_1/p12-1.jpg',
                  '/images/product_1/p12-2.jpg',
                  '/images/product_1/p12-3.jpg',
                  '/images/product_1/p12-4.jpg',
                ],
                tags: ['featured'],
                isPublished: true,
                price: 23.78,
                listPrice: 0,
                brand: 'Jerzees',
                avgRating: 4.2,
                numReviews: 10,
            
                numSales: 29,
                countInStock: 12,
                description:
                  'Made with sustainably sourced USA grown cotton; Shoulder-to-shoulder tape; double-needle coverstitched front neck; Set-in sleeves; Rib cuffs with concealed seams; Seamless body for a wide printing area',
            
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Yellow', 'Red', 'Black'],
            
                reviews: [],
              },
              {
                name: "Jerzees Men's Long-Sleeve T-Shirt",
            
                category: 'T-Shirts',
                brand: 'Jerzees',
                images: ['/images/product_1/p13-1.jpg', '/images/product_1/p13-2.jpg'],
                tags: ['best-seller'],
                isPublished: true,
                price: 13.86,
                listPrice: 16.03,
                avgRating: 4,
                numReviews: 12,
            
                numSales: 55,
                countInStock: 13,
                description:
                  'The Jerzees long sleeve t-shirt is made with dri-power technology that wicks away moisture to keep you cool and dry throughout your day. We also included a rib collar and cuffs for added durability, and a lay-flat collar for comfort. If you are looking for a versatile shirt that you can wear throughout the transitioning seasons, then look no further.',
                sizes: ['XL', 'XXL'],
                colors: ['Green', 'White'],
            
                reviews: [],
              },
              {
                name: 'Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts',
            
                category: 'T-Shirts',
                brand: 'Jerzees',
                images: ['/images/product_1/p14-1.jpg', '/images/product_1/p14-2.jpg'],
                tags: ['todays-deal'],
                isPublished: true,
                price: 26.95,
                listPrice: 46.03,
                avgRating: 3.85,
                numReviews: 14,
            
                numSales: 54,
                countInStock: 14,
                description:
                  'Elevate your outfit with this soft long sleeve t shirt men. This full sleeves tee is the ultimate upgrade from your regular cotton t-shirt. ',
                sizes: ['XL', 'XXL'],
                colors: ['Yellow', 'White'],
            
                reviews: [],
              },
              {
                name: "Muscle Cmdr Men's Slim Fit Henley Shirt Long&Short Business Sleeve Casual 3 Metal Buton Placket Casual Stylish T-Shirt",
            
                category: 'T-Shirts',
                brand: ' Muscle Cmdr',
                images: ['/images/product_1/p15-1.jpg', '/images/product_1/p15-2.jpg'],
                tags: ['new-arrival', 'featured'],
                isPublished: true,
                price: 29.99,
                listPrice: 35.99,
                avgRating: 3.66,
                numReviews: 15,
            
                numSales: 54,
                countInStock: 15,
                description:
                  "Slim Fit Design:Men's Muscle Slim Fit Button Henley Shirts are designed to fit snugly against your body, accentuating your muscles and creating a sleek silhouette that's perfect for any occasion. ",
                sizes: ['XL', 'XXL'],
                colors: ['Green', 'Yellow'],
            
                reviews: [],
              },
]