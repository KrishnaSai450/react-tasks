import { Component } from "react";
import axios from "axios";

class FakeProducts extends Component {
  state = {
    products: [],
    selectedProduct: null, // Add this state to track the selected product
  };

  componentDidMount() {
    this.display();
  }

  display = async () => {
    const { status, data } = await axios.get("https://fakestoreapi.com/products");
    if (status === 200) {
      this.setState({
        products: data,
      });
    }
  };

  clickHandler = (product) => {
    // Set the selected product when an image is clicked
    this.setState({
      selectedProduct: product,
    });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <div style={{ display: "flex" }}>
        {/* Product list on the left */}
        <div style={{ flex: 1 }}>
          {this.state.products.map((each) => {
            return (
              <div
                style={{ textAlign: "left", width: 500, cursor: "pointer" }}
                key={each.id}
                onClick={() => this.clickHandler(each)} // Added click handler to the div
              >
                <h3>{each.id}</h3>
                <img
                  src={each.image}
                  width={100}
                  height={100}
                  alt={each.title}
                />
                <h3>{each.title}</h3>
                <p>{each.description}</p>
                <p>{each.price}</p>
              </div>
            );
          })}
        </div>

        {/* Selected product details on the right */}
        {selectedProduct && (
          <div style={{ flex: 1, padding: "0 20px" }}>
            {/* <h2>Product Details</h2> */}
            <img
              src={selectedProduct.image}
              width={200}
              height={200}
             
            />
            {/* <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price}</p> */}
          </div>
        )}
      </div>
    );
  }
}

export default FakeProducts;