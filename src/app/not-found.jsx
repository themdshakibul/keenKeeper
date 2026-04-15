import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-150 space-y-2">
        <h1 className="text-4xl font-bold">404</h1>
        <h3 className="text-2xl font-semibold">NOt Found Page</h3>
        <Link href={"/"}>
          <button className="btn btn-lg btn-error font-semibold text-white">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
