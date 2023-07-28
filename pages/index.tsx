import Filters from "../Componentss/HomePage/Filters";
import Layout from "../Componentss/Layout";
import React from "react";
import SearchResult from "../Componentss/HomePage/SearchResult";

export default function Home() {
  return (
    <Layout>
      <main className="sticky top-0 l-0 w-full py-[24px] px-[32px] grid grid-flow-col grid-cols-[30%_auto] gap-[32px]">
        <div>
          <Filters />
        </div>
        <SearchResult />
      </main>
    </Layout>
  );
}
