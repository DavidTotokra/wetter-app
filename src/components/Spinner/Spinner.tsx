import { Content } from "./style";

export function Spinner() {
  return (
    <Content>
    <div className="lds-spinner">
      <div></div><div></div><div></div>
      <div></div> <div></div><div></div>
      <div></div><div></div><div></div>
    </div>
    </Content>
  );
}