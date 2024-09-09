import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 20, quantity: 1 },
    { id: 2, name: 'Item 2', price: 30, quantity: 2 },
    // Add more items as needed
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="ml-4 w-16 text-center border rounded"
                  />
                </div>
              </div>
              <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right">
        <h2 className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
