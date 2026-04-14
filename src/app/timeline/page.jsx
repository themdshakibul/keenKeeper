import Image from "next/image";
import handImage from "../../Assets/Images/hand.png";

const TimelinePage = () => {
  return (
    <section>
      <div className="container mx-auto px-2 pt-5 pb-10">
        <header className="space-y-5">
          <h2 className="text-5xl font-bold">Timeline</h2>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn btn-lg border-2">
              Filter timeline ⬇
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
            </ul>
          </div>
        </header>

        <div className="flex items-center justify-between bg-base-300 p-5 border border-gray-200 rounded-xl mt-5">
          <div className="flex items-center gap-5">
            <Image width={60} height={60} src={handImage} alt="" />
            <div>
              <h4 className="text-2xl font-semibold">
                <span className="text-[#244d3f]">Meetup</span> with Tom Baker
              </h4>
              <p className="text-xl font-semibold">March 29, 2026</p>
            </div>
          </div>
          <h2>Time</h2>
        </div>
      </div>
    </section>
  );
};

export default TimelinePage;
