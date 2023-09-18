import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { LoadingContext } from "../../context/LoadingProvider";
import SpaceTravelApi from "../../services/SpaceTravelApi"; 

import styles from "./Spacecraft.module.css";

function Spacecraft() {

  const [spacecraft, setSpacecraft] = useState();
  const { id } = useParams();

  const { enableLoading, disableLoading } = useContext(LoadingContext);

  useEffect(() => {

    // DONE todo get spacecraft from the API using the ID from the route (very similar to what we did in Planets.js)

    async function fetchSpacecraft() {
      try {
        enableLoading();
        const spacecraft = await SpaceTravelApi.getSpacecraft(id);
        setSpacecraft(spacecraft);
      } catch (error) {
        
      } finally {
        disableLoading();  
      }
    }
    fetchSpacecraft();
  }, [id, enableLoading, disableLoading]);

  return (
    <div className={styles["spacecraft"]}>
      
      {spacecraft && 
        <>
          <div className={styles["spacecraft__imageContainer"]}>
            {spacecraft.pictureUrl ? (
              <img
                src={spacecraft.pictureUrl}
                alt={`The spacecraft ${spacecraft.name}`}
                className={styles["spacecraft__image"]}
              />
            ) : (
              <span className={styles["spacecraft__image--default"]}>🚀</span>
            )}
          </div>

          <div className={styles["spacecraft__infoContainer"]}>
            <div className={styles["spacecraft__infoHeader"]}>
              Name: {spacecraft.name}
            </div>

            <div className={styles["spacecraft__infoHeader"]}>
              Capacity: {spacecraft.capacity}
            </div>

            <div className={styles["spacecraft__infoText"]}>
              {spacecraft.description}
            </div>
          </div>
        </>
      }

    </div>
  );

}

export default Spacecraft;