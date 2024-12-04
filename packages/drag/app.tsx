import "./app.scss";
import { MultipleDecks } from "../../asset/dnd-kit/stories/3 - Examples/Games/PlayingCards/PlayingCards.story";
export const DragP = function () {
  return <MultipleDecks />;
};

export const App = function () {
  return <DragP />;
};
