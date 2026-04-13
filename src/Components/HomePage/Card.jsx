import Image from "next/image";
import DamiImage from "../../Assets/Images/Ellipse.png";

const Card = () => {
  return (
    <section>
      <div className="container mx-auto px-2 mb-20">
        <h2 className="text-3xl font-bold mb-5">Your Friends</h2>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-base-200 p-10 flex flex-col items-center justify-center space-y-3 rounded-2xl shadow-xl border border-gray-300">
            <Image
              width={180}
              height={180}
              src={DamiImage}
              alt="the"
              className="rounded-full"
            />
            <h3 className="text-2xl font-bold">David Kim</h3>
            <p className="text-xl font-semibold ">62d ago</p>
            <span className="btn rounded-full text-[#244d3f] uppercase px-5">
              work
            </span>
            <span className="btn rounded-full uppercase px-5">Almost Due</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
