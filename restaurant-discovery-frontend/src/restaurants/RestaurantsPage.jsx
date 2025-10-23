import { useState } from "react";
import InputTextBox from "../components/InputTextBox";
import RestaurantsTable from "./RestaurantsTable";
import usePlaces from "../hooks/usePlaces";

function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, loading, error } = usePlaces({
    query: searchQuery,
    radius: 1000,
    type: "restaurant",
  });

  return (
    <div className="RestaurantsPage">
      <InputTextBox
        hintText={"Search for a nearby restaurant ..."}
        onTextFieldUpdated={setSearchQuery}
        style={{ width: "70%", maxWidth: 900 }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      <RestaurantsTable data={data.results} />
    </div>
  );
}

export default RestaurantsPage;
