import Container from 'react-bootstrap/Container';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from "../data/products.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemListContainer = () => { 
    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState (true);

    const {id} = useParams


    useEffect (()=> {
        new Promise ((resolve,reject)=> setTimeout(resolve (data),2000)).then (
            (response)=> { 
                if (!id) {
                    setItems(response);
                } else {
                    const filtred = response.filtred ((i) =>i.category === id);
                    setItems(filtred)
                }   
            setItems (response);})  
            .finally(()=> setLoading(false))
         }, [id]);
         if(loading) return "Espere";

return <Container className= "mt-4 d-flex">{items.map(i =>   
  <Card key={i.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={i.pictureURL} />
    <Card.Body>
      <Card.Title>{i.title}</Card.Title>
      <Card.Text>
        {i.description}
      </Card.Text>
      <Card.Text>
        {i.category}
      </Card.Text>
      <Link to={`/item/${i.id}`}><Button variant="primary">Go somewhere</Button></Link>
    </Card.Body>
  </Card>)}</Container> 
} ;




 
