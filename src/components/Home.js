import React from 'react';
import Hello from './Hello';
import Greet from './Greet';
import Message from './Message';
import Counter from './Counter';
import ProductList from './ProductList';
import TodoList from './TodoList';
import DataFetch from './DataFetch';
import FetchRegistrations from './FetchRegistrations';

const Home = () => {
  const products = [
    { id: 1, name: 'Pencil', price: 10 },
    { id: 2, name: 'Marker', price: 20 },
    { id: 3, name: 'Eraser', price: 5 },
    { id: 4, name: 'Pen', price: 10 },
    { id: 5, name: 'Book', price: 35 },
  ];

  const todoItems = [
    { title: 'Complete Home Assignment', completed: false },
    { title: 'Read for Exam', completed: true },
  ];

  return (
    <div>
      <FetchRegistration/>
      <DataFetch/>
      <Hello />
      <Greet />
      <Message />
      <Counter />
      <TodoList todos={todoItems} />
      <ProductList products={products} />
      {/* Add other components as needed */}
    </div>
  );
};

export default Home;