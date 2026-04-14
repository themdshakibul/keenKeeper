import { FadeLoader } from "react-spinners";

const loding = () => {
  return (
    <div className="container mx-auto px-2 flex flex-col items-center justify-center h-100 space-y-5">
      <FadeLoader color="#244d3f" />
      <h2 className="text-4xl font-bold">Your Friends Details loading ....</h2>
    </div>
  );
};

export default loding;
