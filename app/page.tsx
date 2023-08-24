import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PopUp from "@/components/popup";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <PopUp />
      <Footer />
    </main>
  );
}
