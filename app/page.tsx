"use client";
import React, { useEffect, useMemo, useState } from "react";
import Categories from "@/components/Categories";
import CardList from "@/components/CardList";
import { nanoid } from "nanoid";
import useLocalStorage from "@/utils/useLocalStorage";
import { paymentType } from "@/constants/positions";
import Form from "@/components/Form";

export interface PositionsInterface {
  title: string;
  price: number;
  paymentType: paymentType;
  description: string;
  id: string;
  responsibilities: string[];
}

export default function Home() {
  const [positions, setPositions] = useLocalStorage<PositionsInterface[]>(
    "positionsData",
    []
  );
  const [activeTab, setActiveTab] = useState("Должности");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCardId(id);
  };
  function deleteCard(id: string) {
    setPositions(positions!.filter((item) => item.id !== id));
  }
  function saveData({ name, responsibilities }:any) {
    const newPostion = positions!.map((item) => {
      return item.id === activeCardId
        ? { ...item, title: name, responsibilities: responsibilities }
        : item;
    });
    setPositions(newPostion);
  }

  const currentPosition = useMemo(() => {
    return positions?.find((item) => item.id === activeCardId);
  }, [activeCardId, positions]);

  const addCard = () => {
    const newPostion = {
      id: nanoid(),
      title: "Новобранец",
      price: Math.round(Math.random() * 100),
      description: `от ${Math.round(Math.random() * 10)} lvl`,
      responsibilities: [],
      paymentType: paymentType.HOURLY,
    };
    setPositions((prevpositions) => [...prevpositions, newPostion]);
  };
  useEffect(() => {
    if (positions && positions.length > 0) {
      setActiveCardId(positions![0].id);
    }
  }, []);

  return (
    <div
      className="overflow-hidden relative flex items-center h-screen w-screen justify-center px-5 "
      style={{
        backgroundImage: "url('/images/backgroundImg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="p-6 border border-white/[.08] rounded-lg bg-dark-400">
        <div className="container">
          <Categories setActiveTab={setActiveTab} activeTab={activeTab} />
          <div className="p-10 pt-7 content overflow-hidden">
            {activeTab === "Должности" ? (
              <>
                {positions && (
                  <CardList
                    handleCardClick={handleCardClick}
                    activeCardId={activeCardId}
                    setPositions={setPositions}
                    addCard={addCard}
                    deleteCard={deleteCard}
                    positions={positions}
                  />
                )}
                <Form saveData={saveData} currentPosition={currentPosition} />
              </>
            ) : (
              <div className="flex justify-center text-3xl text-white">
                В разработке...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
