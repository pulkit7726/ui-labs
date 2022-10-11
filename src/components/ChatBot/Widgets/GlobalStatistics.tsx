import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  stats :{
    color: "white",
    fontSize: "0.9rem",
    backgroundColor: "rgba(45, 159, 253, 0.589)",
    display: "flex",
    background: "linear-gradient(to top right, rgb(15, 146, 221), #055991)",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"2rem"
  },
  columnLeft:{
    textAlign: "right"
  },
  columnRight:{
    textAlign: "left",
    padding: "8px"
  }
});

const GlobalStatistics = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const getStats = async () => {
      let data = await fetch(
        `https://www.hpb.health.gov.lk/api/get-current-statistical`
      );
      data = await data.json();
      // const filteredFlights = flights.filter((item) => item.Status === null);

      setStats(data["data"]);
      setLoading(false);
    };
    getStats();
  }, []);

  return (
    <div className={classes.stats}>
      <div className={classes.columnLeft}>
        <p> Total Cases :</p>
        <p> New Cases :</p>
        <p> Recovered :</p>
        <p> Deaths :</p>
      </div>

      <div className={classes.columnRight}>
        <ClipLoader color={"#fff"} loading={loading} />
        <p>{stats["global_total_cases"]}</p>
        <p>{stats["global_new_cases"]}</p>
        <p>{stats["global_recovered"]}</p>
        <p>{stats["global_deaths"]}</p>
      </div>
    </div>
  );
};

export default GlobalStatistics;
