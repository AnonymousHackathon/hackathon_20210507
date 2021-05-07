import React, { useState, useEffect } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import mockUserListArray from "../mockdata/mockReceiverList"
import UserService from "../services/user-service";
import {mockAccountOptions} from "../mockdata/mockAccountOptions"
import { Checkbox, Button, makeStyles } from "@material-ui/core";
import "./components.css";


const TransferFunds = () => {
  const [content, setContent] = useState("");
  const [balance, setBalance] = useState();
  const [transferAmount, setTransferAmount] = useState();
  const [accountOptions, SetAccountOptions] = useState([]);
  const [defaultAccountOptions, SetDefaultAccountOptions] = useState();
  const [receiverNumber, setReceiverNumber] = useState();
  const [eGiftCheck, setEGiftCheck] =  useState();

  const buttonStyles = makeStyles({
 
    ButtonCenter: {
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center'
    }
 });

  useEffect(() => {
    //mockBalance, mockAccountOptions
    setBalance(10000)
    SetAccountOptions(mockAccountOptions);
    SetDefaultAccountOptions(SetAccountOptions[0]);
    setEGiftCheck(false);
  }, []);

  const handleChange = (event) => {
    setEGiftCheck(event.target.checked);
  };
  const onChangeNumber = (event) => {
    setReceiverNumber(event.target.value);
  };

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Fund Transfer</h3>
        <h5>Balance: ${balance}</h5>
        <div className="cards-grid">
          <div>
            <div className="form-label">From:
            {/* <TransferAccount account={} /> */}
              <ul className="card-mini">
                <Dropdown options={accountOptions} onChange={SetDefaultAccountOptions} value={defaultAccountOptions} />
              </ul>
              </div>
          </div>
          <div className="column-one-half">
            <div className="form-label">To:</div>
            {/* <TransferAccount account={transfer.accountTo} /> */}
            <input
              id = "textbox-medium"
              type="text"
              value={receiverNumber}
              onChange={onChangeNumber}
            />
          </div>
        </div>
        <div className="grid-row">
          <div className="column-one-half">
            <div className="form-group">
              <label className="form-label" htmlFor="balance">Amount:</label>
              <span className="input-group-prefix">$SGD</span>
              <input type="text"
                id="balance"
                name="account[balance]"
                className="form-control form-control__number"
                value={transferAmount}
              />
            </div>
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox
                checked={eGiftCheck}
                onChange={handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                      />}
              label="Send as EGift!!"
            />
            <p style = {buttonStyles.ButtonCenter}>
            <Button variant="contained" 
              color={eGiftCheck?"secondary":"primary"}
              // onClick={}>
              >
              {eGiftCheck?"Send as E-Gift":"Send Now"}
            </Button>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TransferFunds;