import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from './main.module.css'
import Messages from "./Messages/Messages";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ padding: "0" }}>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <div className={styles.container}>
            <Messages/>
           
            <div className={styles.inputs}>
              <textarea />
              <div className={styles.typeName}>
                Отправить как: <input />
              </div>
              <button>Отправить</button>
            </div>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
