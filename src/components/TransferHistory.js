import { 
    Typography,
    Box,
    Checkbox,
    Grid,
    TablePagination,
    makeStyles,
 } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { mockHistoryArray } from "../mockdata/mockHistory";
import {TransactionHistory} from "../models/History"
import HistoryGraph from "./graph/BarGraph"



const TransferHistory = (props) => {
    const [content, setContent] = useState("");
//   const [history, setHistory] = React.useState<TransactionHistory[]>(null);
    const [history, setHistory] = useState([]);
    const [data, setData] = useState([]);
    const [balance, setBalance] = useState();
    const classes = makeStyles({
        text: {
        textAlign: 'center',
        fontSize: '12px',
        },
        text: {
            textAlign: 'center',
            fontSize: '12px',
        }
    });

  useEffect(() => {
    let temp_history = mockHistoryArray;
    let tmp_data = [0,0,0,0,0,0,0,0,0,0,0,0];
    temp_history.map((tmp) => {
        tmp.date = new Date(tmp.date);
    //   setHistory([...history, ...tmp]);
    //   setHistory({history: tmp})
        tmp_data[tmp.date.getMonth()] += parseInt(tmp.amount);
    });
    setData(tmp_data);
    setHistory(temp_history);
  }, []);

  return (
    <div>
        <HistoryGraph data = {data} />
    <div className="container">
      <header className="jumbotron">
        <Typography>
            <h2>Transaction History</h2>
            <Box my="24px" width="100%" className={classes.text}>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={3}>
                        DATE
                    </Grid>
                    <Grid item md={4} xs={4}>
                        NAME
                    </Grid>
                    <Grid item md={3} xs={3}>
                        AMOUNT ($SGD)
                    </Grid>
                    <Grid item md={1} xs={1}>
                        Type
                    </Grid>
                </Grid> 
            </Box>
            {history.map((history) => {
                //const real_date = new Date(history.date);
                {/* console.log(history.date, " to ", real_date); */}
                return (
                    <Box py="12px" my="8px" >
                    <Grid container spacing={1} alignItems="center" className={classes.text}>
                        <Grid item md={3} xs={3}>
                            {history.date.toLocaleDateString()}
                        </Grid>
                        <Grid item md={4} xs={4}>
                            {history.name}
                        </Grid>
                        <Grid item md={3} xs={3}>
                            {history.amount}
                        </Grid>
                        <Grid item md={1} xs={1}>
                            Transaction
                        </Grid>
                    </Grid>
                    </Box>
                );
                })}
        </Typography>
      </header>
    </div>
    </div>
  );
};

export default TransferHistory;