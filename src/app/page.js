import Image from "next/image";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Items from "./components/Items";
import TopProducts from "./components/TopProducts";
import Info from "./components/Info";
import NewProducts from "./components/NewProducts";
import Category from "./components/Category";
import ShopByGender from "./components/ShopByGender";
import StoreLocation from "./components/StoreLocation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <NavBar />
      <Hero />
      <Items />
      <TopProducts />
      <Info />
      <NewProducts />
      <Category />
      <ShopByGender />
      <StoreLocation />
      <Footer />
    </main>
  );
}
