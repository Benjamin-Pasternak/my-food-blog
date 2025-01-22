import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
