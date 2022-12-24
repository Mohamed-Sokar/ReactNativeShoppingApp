import React, {useState} from 'react';

const Context = React.createContext();

const Provider = ({children}) => {
  const [Catagories, setCatagories] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);
  const [Total, setTotal] = useState(0);

  return (
    <Context.Provider
      value={{
        Catagories,
        setCatagories,
        Products,
        setProducts,
        Cart,
        setCart,
        Total,
        setTotal,
      }}>
      {children}
    </Context.Provider>
  );
};

export {Context, Provider};
