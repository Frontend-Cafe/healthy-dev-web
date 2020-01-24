import React, { useState, useEffect } from "react";
// Material UI imports
import { StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box } from "@material-ui/core";
// styles imports
import "./styles.scss";

// main function
// eventualmente recibira props del parent, de donde sacaremos el ID para fetchear
export default function ItemDetail() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // fake api de prueba
  const API_URL = `https://swapi.co/api/people/`;
  const RANDOM_NUMBER = Math.floor(Math.random() * 6);

  // funcion que fetchea la data
  // falta el error handling
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const result = await fetch(`${API_URL}${RANDOM_NUMBER}`);
        const data = await result.json();
        setItem(data);
      } catch (error) {
        setIsError("Hubo alto error amigo");
      }
      setIsLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // error screen
  if (isError) {
    return (
      <div>
        <h1>Pantalla de error</h1>
        <p>El mensaje es el siguiente: {isError}</p>
      </div>
    );
  }

  // loading screen
  if (isLoading) {
    return <h1>Pantalla de cargando...</h1>;
  }

  // all ok, return main card
  return (
    <StylesProvider injectFirst>
      <Card className="card">
        <CardMedia
          className="media"
          image="https://unblast.com/wp-content/uploads/2019/09/Avocado-Healthy-Fruit-Illustration.jpg"
          title="Una palta chivando"
        />
        <CardContent>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            justifyContent="space-between"
          >
            <Typography className="title" component="h1" variant="h5">
              {item.name}
            </Typography>
            <IconButton aria-label="settings">
              <MoreVertIcon style={{ fill: "white" }} />
            </IconButton>
          </Box>
          <Typography className="paragraph" component="p" variant="body1">
            Lo de arriba es una palta healthy chivando. <br />
            <br /> Cada vez que se actualice la pagina, un nombre de algun
            personaje de Star Wars aparecera en el titulo. Y abajo, apareceran
            los datos de este <br />
            <br /> La altura de {item.name} es de {item.height}cms.
            <br /> El color de pelo es {item.hair_color}.
            <br /> Su año de nacimiento es {item.birth_year}. <br />
            <br /> Minima sapiente impedit dicta qui sunt magni alias quidem
            dolores deleniti numquam vero sed aspernatur saepe, repellat ea
            accusamus nemo ullam eius voluptatem!
          </Typography>
        </CardContent>
      </Card>
    </StylesProvider>
  );
}
