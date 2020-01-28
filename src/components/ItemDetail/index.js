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

// import components
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
// import styles
import "./styles.scss";

// main function
// eventualmente recibira props del parent, de donde sacaremos el ID para fetchear
export default function ItemDetail() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

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
        setHasError("Hubo alto error amigo");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StylesProvider injectFirst>
      <Card className="card">
        <CardMedia
          className="media"
          image="https://unblast.com/wp-content/uploads/2019/09/Avocado-Healthy-Fruit-Illustration.jpg"
          title="Una palta chivando"
        />
        <CardContent>
          <Box alignItems="center" display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="space-between">
            <Typography className="title" component="h1" variant="h5">
              {item.name}
            </Typography>
            <IconButton aria-label="settings">
              <MoreVertIcon style={{ fill: "white" }} />
            </IconButton>
          </Box>
          <Typography className="paragraph" component="p" variant="body1">
            <Loading />
          </Typography>
        </CardContent>
      </Card>
    </StylesProvider>
  );
}
