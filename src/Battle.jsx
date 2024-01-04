/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Card = ({ cardId, onDelete }) => {
  const [name, setName] = useState(JSON.parse(localStorage.getItem(`name_${cardId}`)) || "");
  const [initiative, setInitiative] = useState(JSON.parse(localStorage.getItem(`initiative_${cardId}`)) || "");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem(`name_${cardId}`, JSON.stringify(name));
    localStorage.setItem(`initiative_${cardId}`, JSON.stringify(initiative));
  }, [name, initiative, cardId]);

  const handleSave = () => {
    console.log(`Card ${cardId} - Name:`, name);
    console.log(`Card ${cardId} - Initiative:`, initiative);
    setIsSaved(true);
  };

  return (
    <div className="block">
      {isSaved ? (
        <>
          <p>
            Name: {name}
            <br />
            Initiative: {initiative}
          </p>
        </>
      ) : (
        <>
          <div className="input-wrapper">
            <input
              className="name-input"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="initiative-input"
              type="text"
              placeholder="initiative roll"
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => onDelete(cardId)}>Delete</button>
        </>
      )}
    </div>
  );
};

export function Battle() {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    const newCardId = Date.now();
    setCards([...cards, newCardId]);
  };

  const handleDeleteCard = (cardId) => {
    const updatedCards = cards.filter((id) => id !== cardId);
    setCards(updatedCards);
  };

  return (
    <div id="battle-wrapper">
      {cards.map((cardId) => (
        <Card key={cardId} cardId={cardId} onDelete={handleDeleteCard} />
      ))}
      <button className="add-block-button" onClick={handleAddCard}>
        Add Card
      </button>
    </div>
  );
}
