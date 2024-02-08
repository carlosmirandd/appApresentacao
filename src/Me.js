import Image from "react-bootstrap/Image";

function Me() {
  return (
    <Image
      style={{ borderRadius: "1000px" }}
      width={180}
      src={require("./bird150.jpg")}
    />
  );
}

export default Me;
