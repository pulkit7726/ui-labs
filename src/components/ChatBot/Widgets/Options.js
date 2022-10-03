import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  options: {
    paddingBottom: "15px"
  },
  optionsHeader :{
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "normal"
  },
  optionsContainer: {
    display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
  },
  optionItem: {
    padding: "8px 15px",
    border: "1px solid #2898ec",
    borderRadius: "25px",
    color: "#1f91e7",
    fontSize: "0.9rem",
    margin: "3px",
    boxShadow: "inset 0px 0px 0px #2273c4",
    transition: "all 0.5s",
    cursor: "pointer",
    '&:hover':{
      boxShadow: "inset 195px 0px 0px #2273c4",
      color: "#ffffff"
    }
  }
});

const Options = (props) => {
  const classes = useStyles();
    return (
      <div className={classes.options}>
        <h1 className={classes.optionsHeader}>{props.title}</h1>
        <div className={classes.optionsContainer}>
          {props.options.map((option) => {
            return (
              <div
                className={classes.optionItem}
                onClick={option.handler}
                key={option.id}
              >
                {option.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Options;
  