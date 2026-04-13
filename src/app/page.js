import Card from "@/Components/HomePage/Card";
import Header from "@/Components/HomePage/Header";
import TotalDetails from "@/Components/HomePage/TotalDetails";

export default function Home() {
  return (
    <section>
      <div>
        <Header />
        <TotalDetails />
        <Card />
      </div>
    </section>
  );
}
