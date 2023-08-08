import { useEffect, useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList/FoodList";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";

const API_URL = "http://localhost:8888";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/items`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setFoodData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        console.log(`<App /> useEffect error : ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <FoodList foodData={foodData} />;
    }
  };
  return (
    <div className="App">
      <h1 className="App__title">Our Menu</h1>
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
