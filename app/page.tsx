import Footer from "@/components/footer";
import Form from "@/components/form";
import Navbar from "@/components/navbar";
import PopUp from "@/components/popup";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Form />
      <PopUp />
      <Footer />
    </main>
  );
}
