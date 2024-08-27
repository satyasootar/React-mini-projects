import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetails();
  }, [id]);

  let getProductDetails = async () => {
    let res = await fetch(`https://${import.meta.env.VITE_PRODUCTS}/products/${id}`);
    let data = await res.json();
    console.log("data: ", data);
    setProduct(data);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img style={styles.image} src={product.image} alt="ProductImg" />
      </div>
      <div style={styles.detailsContainer}>
        <dl style={styles.detailsList}>
          <dd style={styles.title}>{product.title}</dd>

          <dt style={styles.label}>Price</dt>
          <dd style={styles.price}>$ {product.price}</dd>

          <dt style={styles.label}>Description</dt>
          <dd style={styles.text}>{product.description}</dd>

          <dt style={styles.label}>Category</dt>
          <dd style={styles.text}>{product.category}</dd>

          <dt style={styles.label}>Ratings</dt>
          <dd style={styles.text}>{product.rating?.rate}</dd>
        </dl>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    maxWidth: "800px",
    margin: "20px auto",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "100%",
    objectFit: "contain",
  },
  detailsContainer: {
    flex: "1.5",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  detailsList: {
    margin: 0,
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  },
  text: {
    marginBottom: "15px",
    color: "#777",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#e60023",
  },
};
