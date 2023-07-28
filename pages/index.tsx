import Filters from "../Components/HomePage/Filters";
import Layout from "../Components/Layout";
import React from "react";
import SearchResult from "../Components/HomePage/SearchResult";

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
