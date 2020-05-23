import React, { useState } from "react";
import products from "../data/product";

const Home = () => {
  console.log(products);
  const [keyword, setkeyword] = useState("All");
  const setAll = () => {
    setkeyword("All");
  };

  const setTech = () => {
    setkeyword("tech");
  };

  const setCosmetic = () => {
    setkeyword("cosmetics");
  };
  const filteredProduct = products.filter((item) =>
    item.category.includes(keyword)
  );
  console.log(filteredProduct);
  return (
    <div>
      <h1>Display product</h1>
      <nav>
        <button onClick={setAll}>All</button>
        <button onClick={setTech}>Tech</button>
        <button onClick={setCosmetic}>Cosmetic</button>
      </nav>

      <div className="item">
          {filteredProduct.map(item => (
            <div key={item.id}>
                <img src={item.src} alt={item.name}/>
              <br/> {item.name}
              <br/> {item.about}
              <br/> ${item.price}
            </div> 
          ))}
      </div>
    </div>
  );
};

export default Home;
