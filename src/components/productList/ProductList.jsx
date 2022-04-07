import "./productList.css";
import wavingHand from "./../../img/waving-hand.svg";
import Product from "./../product/Product";
import { products } from "./../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <div className="pl-title">
          <p className="text">
            Creative,&nbsp;Passionate,&nbsp;Logical <span>&rarr;</span> Engineer
          </p>
        </div>
        <p className="pl-desc">
          Hey There <img className="hand" src={wavingHand} alt="waving hand" />
          ,&nbsp; I'm Anik,&nbsp; I primarily focus on Web Development and do
          Machine Learning on the side,&nbsp;Linux/Unix,&nbsp;Bash
          Scripting,&nbsp;NodeJS,&nbsp;Python Django,&nbsp;.NET
          Core,&nbsp;React... ,&nbsp;I know Them!,&nbsp;If want any help or even
          just want to talk,&nbsp;Hit me up.
        </p>
        <p className="pl-desc second">Let's have a Chat!</p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} /> // If we are using map in react we need to provide id
        ))}
      </div>
    </div>
  );
};

export default ProductList;
