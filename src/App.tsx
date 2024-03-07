import { Route, Routes, useParams } from "react-router-dom";
import MainPage from "./pages/MainPage"
import NotFound from "./components/NotFound";

function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<MainPageWithId />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
function MainPageWithId(): JSX.Element {
  const { id } = useParams();
  return <MainPage id={id} />;
}

export default App
