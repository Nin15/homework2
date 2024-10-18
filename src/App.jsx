import Button from "./components/button/button";
import Header from "./components/header/header";
import Text from "./components/text/text";
import ProductCard from "./components/productcard/productcard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Header
          fontsize="20px"
          bg="purple"
          text1="Website"
          text2="List"
          text3="contact"
        ></Header>
      </div>
      <div className="Whole">
        <Text fontSize="50px" textLocation="center" textColor="aqua"></Text>
        <div className="cards">
          <ProductCard
            price="$15000"
            amount="9 left!"
            name="iPhone"
            desc="Latest Model"
            Color="purple"
          ></ProductCard>
          <ProductCard
            price="$19990"
            amount="12 left!"
            name="Samsung Galaxy"
            desc="Latest Model"
            Color="orange"
          ></ProductCard>
          <ProductCard
            price="$25000"
            amount="7 left!"
            name="Xiaomi"
            desc="Latest Model"
          ></ProductCard>
        </div>
        <Button
          width="125px"
          height="60px"
          textContent="Click me"
          bg="purple"
        ></Button>
      </div>
    </div>
  );
}

export default App;
