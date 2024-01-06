import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(()=>({
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        color: 'black',
        width: '100%',
        height: '120px',
      },
      
      
}))

export default useStyles;