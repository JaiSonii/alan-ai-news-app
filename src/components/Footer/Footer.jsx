import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const Footer = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.footer}>
            <Typography variant="caption">&copy; 2024 Jai Soni. All rights reserved.</Typography>
        </div>
    )
}

export default Footer;