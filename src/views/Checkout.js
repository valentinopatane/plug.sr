import React, {useState} from 'react';
//CSS
import '../components/style.css';
//IMG BACKGROUND
import image from '../background/descarga.jpg';
//COMPONENTS
import SuccessMsg from '../components/SuccessMsg';
//FIREBASE
import {db} from '../components/firebase/FirebaseConfig';
import {collection, addDoc} from 'firebase/firestore';
//CONTEXT
import { ItemsContext } from '../components/context/ItemsContext'
import { useContext} from "react";

const initialState ={
    name:'',
    phone: '',
    email:'',
    confirm:''
}

function Subscribe(){

    const {clearCart,products,total} = useContext(ItemsContext);
    const [values,setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');

    const orderDetail = products.map((product)=>{
        let order = {
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        }
        return(
            order
        )
    });
    const onChange = (e) =>{
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    }
    const onSubmit =async(e)=>{
        if(values.email !== values.confirm){
            alert('Error, emails are not matching');
        }else{
            e.preventDefault();
            const docRef = await addDoc(collection(db,"buyers"),{
                values, orderDetail, total
            });
            setPurchaseID(docRef.id);
            setValues(initialState);
            clearCart();
        }
    }
    return(
        <>
            <div className='form'>
                
                {purchaseID && <SuccessMsg purchaseID={purchaseID}></SuccessMsg>}

                <form onSubmit={onSubmit}>
                    <input 
                    className='form_textfield' 
                    placeholder='Name and Surname' 
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    required
                    />
                    <input 
                    className='form_textfield' 
                    placeholder='Phone' 
                    name='phone'
                    value={values.phone}
                    onChange={onChange}
                    required
                    />
                    <input 
                    className='form_textfield' 
                    placeholder='Email' 
                    name='email' 
                    type='email'
                    value={values.email}
                    onChange={onChange}
                    required
                    />
                    <input 
                    className='form_textfield' 
                    placeholder='Confirm Email' 
                    name='confirm' 
                    type='email'
                    value={values.confirm}
                    onChange={onChange}
                    required
                    />
                    <button className='form_submit'><b>C H E C K O U T</b></button>
                </form>
            </div>
            <img src={image}alt="background" className='backSub'></img>
        </>
    )
}
export default Subscribe