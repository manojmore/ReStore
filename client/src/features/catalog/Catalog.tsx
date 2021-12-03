import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog(){
    const [products, setProducts]= useState<Product[]>([]);
    const [isLoading, setLoading]=useState<boolean>(true);

  useEffect(()=>{
    agent.Catalog.list()
    .then(products=>setProducts(products))
    .finally(()=>setLoading(false))
  },[])

  if(isLoading) return <LoadingComponent message={'Loading catalog...'}/>

    return(
      <>
        <ProductList products={products}/>
      </>
    )
}