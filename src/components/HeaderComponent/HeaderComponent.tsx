import { Col, Input } from "antd";
import { WrapperHeader, WrapperTextHeader } from "./style";

const { Search } = Input;

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>Phuc Shop</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            // onSearch={onSearch}
            allowClear
            size="large"
          />
        </Col>
        <Col span={6}>col6</Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
