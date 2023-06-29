import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ onChange, onDecrement, onIncrement, product, onDelete }) => {


  return (
    <div className={styles.product}>
     <div>
     <p> name : {product.title} course</p>
      <p> price : {product.price} </p>
      <span className={styles.value}>{product.quantity}</span>
     </div>

  <div className={styles.btns}>
  <div>
   <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
   </div>
<div>
  
<button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
</div>
     <div>
     <button onClick={onDelete} className={styles.button}>
        delete
      </button>
     </div>
  </div>
    </div>
  );
};

export default Product;
