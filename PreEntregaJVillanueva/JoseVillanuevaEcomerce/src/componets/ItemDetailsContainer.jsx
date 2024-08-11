import Container from 'react-bootstrap/Container';
import data from "../data/products.json";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';




export const ItemDetailsContainer = () => { 
    const [items, setItems] = useState ([]);
    const [loading, setLoading] = useState (true);

    const {id} = useParams;

    useEffect(()=> {
        new Promise ((resolve)=> setTimeout(()=>resolve(data),2000)).then((response) => {
                const finded = response.find(i => i.id === Number(id));
                setItems(finded);
        }). finally(()=> setLoading(false));
    }, [id])  ;
    
    if (loading) return "Espere"

return <Container className= "mt-4">
    <h2>{items.title}</h2>
    <h3>{items.category}</h3>
    <h4>{items.description}</h4>
    <img src={items.pictureURL}/>
    <h5>${items.price}</h5>
    </Container> 
} ;


