import { Product } from '@api';
import { TableMaintenance } from '@templates'
import { GenericObject } from '@types';
import { useState } from 'react';

const dataSource = [
  { id: 1, name: 'Caneta azul', price: 5.20, description: 'Caneta azul da marca FaberCastell' },
  { id: 2, name: 'Borracha', price: 3.45, description: 'Borracha verde' },
  { id: 3, name: 'Tesoura', price: 12.50, description: 'Tesoura sem ponta' }
] as Array<Product>;

export const ProductPage = () => { 
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [products, setProducts] = useState<Array<Product>>(dataSource);

  const columns = [
    { key: 'name', label: 'Nome', },
    { key: 'price', label: 'Preço', currency: true },
    { key: 'description', label: 'Descrição', },
  ] as GenericObject;

  return (
    <TableMaintenance<Product>
      title="Produtos"
      columns={columns}
      dataSource={products}
      onEdit={(data) => setSelectedProduct(data)}
      onConfirmDelete={item => setProducts(products.filter(u => u.id !== item?.id))}
    />
  );
}