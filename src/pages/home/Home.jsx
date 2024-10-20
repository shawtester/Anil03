import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import Herosection from '../../components/herosection/Herosection' 
import SmallBoxes from '../../components/SmallBoxes/Smallboxes';
import TableSection from '../../components/tablesection/TableSection';
import ProductCart from '../../components/productcart/ProductCart';

function Home() {
  const context = useContext(myContext)
  console.log(context) 
  
  const {name} = context
  console.log(name) 
  return (
    <Layout>
       
         <SmallBoxes/>
      <Herosection/>
      <ProductCart/>
      <TableSection/>
    </Layout>
  )
}

export default Home