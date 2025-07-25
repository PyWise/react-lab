import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";

/* eslint-disable react/prop-types */
function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clickng oa a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
