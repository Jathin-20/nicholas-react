import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./Profile";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
      <div className="mb-3">
        <h1 className="text-2xl font-semibold text-dark-700 ">Home</h1>
      </div>

      <div class="max-w-xxl p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <Tabs defaultValue="profile" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Profile />
          </TabsContent>
          <TabsContent value="portfolio">
            <Portfolio />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
