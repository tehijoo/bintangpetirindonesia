import Hero from "@/components/home/Hero";
import UseCases from "@/components/home/UseCases";
import Systems from "@/components/home/Systems";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import Comparison from "@/components/Comparison";
import Advantages from "@/components/home/Advantages";
import Process from "@/components/Process";
import GalleryPreview from "@/components/home/GalleryPreview";
import LatestArticles from "@/components/home/LatestArticles";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <UseCases />
      <Systems />
      <FeaturedPackages />
      <Comparison />
      <Advantages />
      <Process />
      <GalleryPreview />
      <LatestArticles />
      <CtaBanner />
    </>
  );
}
