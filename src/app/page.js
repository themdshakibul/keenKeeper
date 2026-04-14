import Header from "@/Components/HomePage/Header";
import TotalDetails from "@/Components/HomePage/TotalDetails";
import YourFriends from "@/Components/HomePage/YourFriends";

export default function Home() {
  return (
    <section>
      <div>
        <Header />
        <TotalDetails />
        <YourFriends />
      </div>
    </section>
  );
}
