import React from "react";
//style
import "./TipsEdit.sass";
//components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const TipsEdit = ({}) => {
  return (
    <div className="container">
      <div />

      <form noValidate autoComplete="off">
        <TextField className="title" id="outlined-basic" label="Title" variant="outlined" />
        <TextField multiline className="description" label="Description" rows="5" variant="outlined" />
        <TextField className="url" label="URL" variant="outlined" />
      </form>

      <div>
        <Button className="button" color="primary" variant="contained">
          <div className="textButton">Guardar</div>
        </Button>
      </div>
    </div>
  );
};
