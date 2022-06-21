import React, {useEffect, useState } from "react";
//RRD
import {useParams} from 'react-router-dom';
//FIREBASE
import { collection, query, where, getDocs, documentId} from "firebase/firestore";
import { db } from "../components/firebase/FirebaseConfig";
//COMPONENTS
import Error404 from "./Error404";
import ItemDetail from '../components/ItemDetail';
import Spinner from "../components/Spinner";

const ItemDetailContainer= () =>{
    const [item, setItem] = useState([]);
    const [key, setKey] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { id }= useParams();

    useEffect(()=>{
        const getProduct = async ()=>{
            const q = query(collection(db, "products"), where(documentId(),"==", id));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
                setKey(doc.id);
            });
            setItem(docs);
            setIsLoading(false);
        }
        getProduct();
    }, [id]);

    return(
        <>
            {isLoading ? <Spinner/>
            :(
                (
                    key === id ? 
                    (<div className="item_detail_container">
                    {item.map((data)=><ItemDetail item={data} key={data.id}></ItemDetail>)}
                    </div>)
                    :(<Error404/>)
                )
            )}
        </>
    );
}
export default ItemDetailContainer;
