import React, { useState, useEffect } from "react";
import { GetPublicContent } from "../services/endpoints";
const Home: React.FC = () => {
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    GetPublicContent().then(
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
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
export default Home;