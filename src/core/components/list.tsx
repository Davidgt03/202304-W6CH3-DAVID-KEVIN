import { CharacterCard } from "./character.card";
import { Communication } from "./communications";
import { useCharacter } from "../hooks/use.character";

export function List() {
  const { characters } = useCharacter();

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <CharacterCard item={item} key={item.id}></CharacterCard>
          ))}
        </ul>
      </div>
      <div className="comunications">
        <Communication></Communication>
      </div>
    </>
  );
}
