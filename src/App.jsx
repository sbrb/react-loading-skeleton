import "./App.css";
import CardSkeleton from "./components/CardSkeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#b0b0b0" highlightColor="#f5f5f5">
        <CardSkeleton cards={8} />
      </SkeletonTheme>
    </div>
  );
}

export default App;
