import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <RegistrationForm />
      </div>
      <Footer />
    </main>
  );
} 