import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function RestaurantIndex() {
  return (
    <Index className="navbar navbar-expand-md navbar-dark bg-nav fixed-top rounded-manual">
      <div className="product-details">
        <h1>St. Patrick</h1>
        <h2>Anenská 2641</h2>

        <p className="information">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <br />
          <br />
          <h2>Míst k sezení: 40</h2>
          <h2>Volných míst na zítra: 27</h2>
        </p>
      </div>

      <div className="product-image">
        <img src="/logo.jpg" alt="" />
      </div>
    </Index>
  );
}

const Index = styled.div`
  margin: 10%;
  margin-top: 15vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 80%;
  height: 200px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  h1 {
    font-size: 15px;
    width: 50%;
    color: red;
  }
  h2 {
    font-size: 13px;
    width: 100%;
  }
  .checked {
    color: orange;
  }
  .product-details {
    position: relative;
    text-align: left;
    overflow: hidden;
    padding: 7px 15px;
    height: 100%;
    float: left;
    width: 100%;
  }

  .product-image {
    transition: all 0.3s ease-out;
    display: inline-block;
    position: absolute;
    right: 5%;
    top: 5%;
    overflow: hidden;
    height: 100%;
    width: 45%;
    display: inline-block;
  }

  #container img {
    width: 100%;
    height: 100%;
  }

  .info {
    background: rgba(27, 26, 26, 0.9);
    font-family: "Bree Serif", serif;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: left;
    font-size: 105%;
    cursor: no-drop;
    color: #fff;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  .info h2 {
    text-align: center;
  }
  .product-image:hover .info {
    transform: translateX(0);
  }

  .info ul li {
    transition: 0.3s ease;
  }
  .info ul li:hover {
    transform: translateX(50px) scale(1.3);
  }

  .product-image:hover img {
    transition: all 0.3s ease-out;
  }
  .product-image:hover img {
    transform: scale(1.2, 1.2);
  }
`;
