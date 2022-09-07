/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'


// new Set () used to get rid of duplicate element in array or any other list
const uniqueList =[...new Set(Menu.map((currElem)=> {
    return currElem.category
})
), "All",
]

const Resturent = () => {
  const  [menuData, setMenuDta]=  useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)


  const filterItem = (category) => {
    if(category === "All"){
      setMenuDta(Menu);
      return;
    }
    const updateList = Menu.filter((currElem) => {
      return currElem.category === category;
    })
    setMenuDta(updateList)
  }

  return (
    <>
    <Navbar filterItem = {filterItem} menuList={menuList}
    />
      <MenuCard  menuData = {menuData}/>
    </>
  )
}

export default Resturent
