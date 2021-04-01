import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const Data = [
  /* *************
  NEW CATEGORY
************** */
  {
    title: "New",
    path: "/new",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "New Arrivals",
        path: "/new/newarrivals",
      },
      {
        title: "Featured",
        path: "/new/featured",
      },
    ],
  },

  /* *************
  WOMEN CATEGORY
************** */

  {
    title: "Women",
    path: "/women",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Shop All",
        path: "/women/shopall",
      },
      {
        title: "New Arrivals",
        path: "/women/newarrivals",
      },
      {
        title: "Swimwear",
        path: "/women/swimwear",
      },
      {
        title: "Tops",
        path: "/women/tops",
      },
      {
        title: "Jeans",
        path: "/women/jeans",
      },
      {
        title: "Hoodies & Sweatshirts",
        path: "/women/hoodiesandsweatshirts",
      },
      {
        title: "Pants",
        path: "/women/pants",
      },
      {
        title: "Graphic Tees",
        path: "/women/graphictees",
      },
      {
        title: "Shorts",
        path: "/women/shorts",
      },
      {
        title: "Basic Tees & Tanks",
        path: "/women/teesandtanks",
      },
      {
        title: "Dresses",
        path: "/women/dresses",
      },
      {
        title: "Sweaters",
        path: "/women/sweaters",
      },
      {
        title: "Jackets",
        path: "/women/jackets",
      },
      {
        title: "Skirts",
        path: "/women/skirts",
      },
      {
        title: "Loungewear",
        path: "/women/loungewear",
      },
      {
        title: "Activewear",
        path: "/women/activewear",
      },
      {
        title: "Initimates",
        path: "/women/intimates",
      },
      {
        title: "Two-Piece Sets",
        path: "/women/twopiecesets",
      },
      {
        title: "Accessories",
        path: "/women/accessories",
      },
      {
        title: "Shoes",
        path: "/women/shoes",
      },
      {
        title: "Swimwear",
        path: "/women/swimwear",
      },
      {
        title: "Beauty & Wellness",
        path: "/women/beauty",
      },
      {
        title: "Health & Liefstyle",
        path: "/women/health",
      },
    ],
  },

  /* *************
 MEN CATEGORY
************** */

  {
    title: "Men",
    path: "/men",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Shop All",
        path: "/men/shopall",
      },
      {
        title: "New Arrivals",
        path: "/men/newarrivals",
      },
      {
        title: "Graphic Tees",
        path: "/men/graphictees",
      },
      {
        title: "Hoodies & Sweatshirts",
        path: "/men/hoodiesandsweatshirts",
      },
      {
        title: "Basic Tees",
        path: "/men/tees",
      },
      {
        title: "Shorts",
        path: "/men/shorts",
      },
      {
        title: "Swim",
        path: "/men/swim",
      },
      {
        title: "Pants",
        path: "/men/pants",
      },
      {
        title: "Jeans",
        path: "/men/jeans",
      },
      {
        title: "Jackets",
        path: "/men/jackets",
      },
      {
        title: "Shirts",
        path: "/men/shirts",
      },
      {
        title: "Matching Sets",
        path: "/men/matchingsets",
      },
      {
        title: "Tank Tops",
        path: "/men/tanktops",
      },

      {
        title: "Shoes",
        path: "/men/shoes",
      },
      {
        title: "Accessories",
        path: "/men/accessories",
      },
    ],
  },

  /* *************
  UNISEX CATEGORY
  ************** */
  {
    title: "Unisex",
    path: "/unisex",
  },

  /* *************
  JEANS CATEGORY
  ************** */
  {
    title: "Jeans",
    path: "/jeans",

    subNav: [
      {
        title: "Mens",
        path: "/men/jeans",
      },
      {
        title: "Womens",
        path: "/women/jeans",
      },
    ],
  },

  /* *************
  SWIM CATEGORY
  ************** */
  {
    title: "Swim",
    path: "/swim",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Mens Swim",
        path: "/men/swim",
      },
      {
        title: "Womens Swim",
        path: "/women/swim",
      },
    ],
  },

  /* *************
  BRANDS CATEGORY
  ************** */
  {
    title: "Brands",
    path: "/brands",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Mens",
        path: "/men/brands",
      },
      {
        title: "Womens",
        path: "/women/brands",
      },
    ],
  },

  /* *************
  SALE CATEGORY
  ************** */
  {
    title: "Sale",
    path: "/sale",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Men's Sale",
        path: "/men/sale",
      },
      {
        title: "Women's Sale",
        path: "/women/sale",
      },
    ],
  },

  /* *************
  HOME CATEGORY
  ************** */
  {
    title: "Home",
    path: "/home",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Shop All",
        path: "/home/shopall",
      },
      {
        title: "Room Decor",
        path: "/home/roomdecor",
      },
      {
        title: "Bed & Bath",
        path: "/home/bedandbath",
      },
      {
        title: "Kitchen",
        path: "/home/kitchen",
      },
      {
        title: "Organization",
        path: "/home/organization",
      },
      {
        title: "Outdoor",
        path: "/home/outdoor",
      },
      {
        title: "Lifestyle",
        path: "/home/lifestyle",
      },
    ],
  },
];
