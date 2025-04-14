import Navbar from "../Components/NavBar";
import ModeSwitcher from "../Components/ModeSwitcher";
import WordDefinitionCard from "../Components/WordDefinitionCard";
import PictureCard from "../Components/PictureCard";
import CarouselControls from "../Components/CarouselControls";
import { useState, useEffect } from "react";

const Home = () => {
  const dummyImages = Array(12).fill("https://via.placeholder.com/150");

  const [getData, setGetData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://mxpertztestapi.onrender.com/api/sciencefiction`
    );
    if (!res.ok) throw new Error("NOT FOUND");
    const data = await res.json();
    setGetData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(getData);

  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] min-h-screen text-white font-sans">
      <Navbar />

      <div className="text-center py-8 text-4xl font-extrabold">
        <span className="text-purple-400">The Lost City</span> of{" "}
        <span className="text-white">Future Earth</span>
      </div>

      <div className="flex justify-center gap-6 pb-4">
        <ModeSwitcher label="Word Explorer" active />
        <ModeSwitcher label="Story Adventure" />
        <ModeSwitcher label="Brain Quest" />
      </div>

      <p className="text-center text-sm text-gray-300">
        Drag Pictures to the matching Words, light up correct pairs, shake for a
        retry
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-6 px-4 mt-8">
        <WordDefinitionCard
          word="Correction"
          partOfSpeech="Noun"
          definition="The story is about a city where we assume that a city known as somerville."
          synonyms={["hustle-free", "joy", "step forward"]}
          antonyms={["hustle-free", "joy", "step forward"]}
          imageUrl="https://images.pexels.com/photos/414422/pexels-photo-414422.jpeg"
        />

        {getData[0]?.Image && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {getData.map((item, index) => (
              <PictureCard key={index} data={item} />
            ))}
          </div>
        )}
      </div>

      <CarouselControls />
    </div>
  );
};

export default Home;
