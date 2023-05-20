import { Button, Grid, TextField } from "@mui/material";
import styles from "./FormCheckout.module.css"

const FormCheckout = ({handleSubmit, handleChange, errors}) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Confirmar Email"
              variant="outlined"
              fullWidth
              name="confirmarEmail"
              onChange={handleChange}
              error={errors.confirmarEmail ? true : false}
              helperText={errors.confirmarEmail}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Telefono"
              variant="outlined"
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid xs={6} className={styles.contButton}>
            <Button type="submit" className={styles.botonCard}>Comprar</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;