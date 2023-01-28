import styles from "../../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
      id: 1,
      img: "/img/pizza.png",
      name: "CAMPAGNOLA",
      price: [19.9, 23.9, 27.9],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    };
  
  return (
      <div>
          
    </div>
  )
}

export default Product