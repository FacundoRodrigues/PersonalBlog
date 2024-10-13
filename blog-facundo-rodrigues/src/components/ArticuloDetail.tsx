import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from '../assets/data.ts';

const ArticuloDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articulo = mockData.find((item) => item.id === Number(id));

  if (!articulo) {
    return <p>Artículo no encontrado</p>;
  }

  return (
    <div>
      <h1>{articulo.title}</h1>

      <div className='img-container'>
        <img src={articulo.image} alt={articulo.title} />
      </div>
      
      <div className='article-date'>{articulo.date}</div>
      
      <p>{articulo.description}</p>
    </div>
  );
};

export default ArticuloDetail;