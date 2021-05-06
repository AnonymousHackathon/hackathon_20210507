import React, { useState, useEffect } from "react";
import { Typography } from '@material-ui/core';
import UserService from "../services/user-service";
import { useSelector } from "react-redux";


const user = JSON.parse(localStorage.getItem("user"));

const Home = (props) => {
  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("user is "+user);
    if(user == '' || user == null){
      props.history.push("/Login");
    }
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container" class="full-height">
      <header className="jumbotron">
        <Typography>Welcome {currentUser.username} to FatCatSwapExpress!!</Typography>
        <h3>{content}</h3>
        <h4>testing</h4>
      </header>
    </div>
  );
};

export default Home;