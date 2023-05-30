import { WrapperProducts, WrapperTypeProduct } from "./style";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Button } from "antd";

const HomePage = () => {
  const arr = ["TV", "Tu Lanh", "Lap Top"];
  return (
    <>
      <div style={{ padding: "0px 10%" }}>
        <WrapperTypeProduct>
          {arr.map((item, index) => {
            return <TypeProduct name={item} key={index} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          padding: "0px 10%",
          backgroundColor: "#efefef",
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <Button type="primary">Primary Button</Button>
      </div>
    </>
  );
};

export default HomePage;
