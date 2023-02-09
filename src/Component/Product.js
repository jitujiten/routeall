import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h2>the Product page</h2>
      <ul>
        <li>
          <Link to="/product/p1">Product1</Link>
        </li>
        <li>
          <Link to="/product/p2">Product2</Link>
        </li>
        <li>
          <Link to="/product/p3">Product3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
