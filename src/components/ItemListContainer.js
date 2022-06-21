import React, { useState } from "react";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from './firebase/FirebaseConfig';

import Spinner from "./Spinner";
import ItemList from "./ItemList";

function ItemListContainer(){
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    React.useEffect(()=>{
        const getProducts = async ()=>{
            const q = query(collection(db, "products"));
            const docs = [];
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id})
            })
            setItems(docs);
            setIsLoading(false);
        }
        getProducts();

    }, []);
    return(
        <>
            {isLoading?(
                <Spinner/>
            ):(
                <ItemList items={items}></ItemList>
            )}
        </>
    )
}
export default ItemListContainer;
