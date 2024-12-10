
import ProductTabs from "@/components/productTabs";
import ProductDesc from "@/components/productDesc";
import { SimilarArticles } from "@/components/SimilarArticles";
import IntrestCards from "@/components/IntrestCards";
import Banner from "@/components/Banner";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <section className="">

      <ProductTabs />

      <ProductDesc />

      <SimilarArticles />

      <IntrestCards />

      <Banner />
      <Connect />

    </section>
  );
}
