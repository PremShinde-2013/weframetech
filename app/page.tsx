/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable prettier/prettier */
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
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
