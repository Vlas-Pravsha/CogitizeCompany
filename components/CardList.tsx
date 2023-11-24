import { PositionsInterface } from "@/app/page";
import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";

interface CardListProps {
  addCard: () => void;
  setPositions: React.Dispatch<React.SetStateAction<PositionsInterface[]>>;
  positions: PositionsInterface[];
  deleteCard: (id: string) => void;
  activeCardId: string | null;
  handleCardClick: (id: string) => void;
}

const CardList = ({
  deleteCard,
  positions,
  addCard,
  setPositions,
  activeCardId,
  handleCardClick,
}: CardListProps) => {
  const card = React.useRef<number>(0);
  const cardOver = React.useRef<number>(0);

  function handleSort() {
    const cardClone = [...positions];
    const temp = cardClone[card.current];
    cardClone[card.current] = cardClone[cardOver.current];
    cardClone[cardOver.current] = temp;
    setPositions(cardClone);
  }

  return (
    <div className="flex flex-col gap-2 mb-4 overflow-hidden">
      <div className="flex flex-col gap-2 h-full overflow-hidden">
        {positions.map((item, index) => (
          <div
            key={item.id}
            draggable={true}
            onDragStart={(e) => {
              card.current = index;
            }}
            onDragEnter={() => (cardOver.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <Card
              deleteCard={deleteCard}
              item={item}
              isActive={item.id === activeCardId}
              onClick={() => handleCardClick(item.id)}
            />
          </div>
        ))}
      </div>
      <Button onClick={() => addCard()}>Создать новую должность</Button>
    </div>
  );
};

export default CardList;
