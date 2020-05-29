import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      paddingTop: theme.spacing(1)
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

}));

const theme = createMuiTheme({
  overrides: {
    MuiFab: {
      secondary: {
        backgroundColor: "#328CC1",
        "&:hover": {
          backgroundColor: "#696969"
        }
      }
    }
  }
})

const Icon = ({ changeImage, Imagevalue, ...rest }) => (
  <div>
    <label>
      <EditIcon style={{ color: "white", cursor: "pointer" }} />
      <input
        {...rest}
        style={{ display: "none" }}
        type="file"
        onChange={e => {
          changeImage([...e.target.files]);
        }}
      />
    </label>
  </div>
)


export default function Botao(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Fab size="small" color='secondary' aria-label="edit">
          <Icon changeImage={props.changeImage.bind(this)} className={classes.icone} />
        </Fab>
      </ThemeProvider>

    </div>
  );
}