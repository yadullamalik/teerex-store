import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import { ADD_FILTERS, GET_DATA } from "../Context/reducer";

export const Filters = ({ setD }) => {
  const {
    state: { data },
  } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlColour = searchParams.getAll("colour");
  const urlGender = searchParams.getAll("gender");
  const urlPrice = searchParams.getAll("price");
  const urlType = searchParams.getAll("type");
  const [colour, setColour] = useState(urlColour || "");
  const [gender, setGender] = useState(urlGender || "");
  const [price, setPrice] = useState(urlPrice || "");
  const [type, setType] = useState(urlType || "");

  const handleColour = (e) => {
    const option = e.target.value;
    setColour(option);
  };
  useEffect(() => {
    if (colour) {
      let params = {
        colour,
        gender: searchParams.getAll("gender"),
        price: searchParams.getAll("price"),
        type: searchParams.getAll("type"),
      };
      setSearchParams(params);
    }
    let arr = data.filter(
      (e) =>
        (colour.length > 1 ? e.color == colour : true) &&
        (gender.length > 1 ? e.gender == gender : true) &&
        (price.length >= 1
          ? price === "0"
            ? e.price < 300
            : price === "300"
            ? e.price >= 300 && e.price < 450
            : e.price >= 450
          : true) &&
        (type.length > 1 ? e.type == type : true)
    );
    setD(arr);
  }, [colour, setSearchParams]);

  const handleGender = (e) => {
    const option = e.target.value;
    setGender(option);
  };
  useEffect(() => {
    if (gender) {
      let params = {
        colour: searchParams.getAll("colour"),
        gender,
        price: searchParams.getAll("price"),
        type: searchParams.getAll("type"),
      };
      setSearchParams(params);
    }
  }, [gender, setSearchParams]);

  const handlePrice = (e) => {
    const option = e.target.value;
    setPrice(option);
  };
  useEffect(() => {
    if (price) {
      let params = {
        colour: searchParams.getAll("colour"),
        gender: searchParams.getAll("gender"),
        price,
        type: searchParams.getAll("type"),
      };
      setSearchParams(params);
    }
  }, [price, setSearchParams]);

  const handleType = (e) => {
    const option = e.target.value;
    setType(option);
  };
  useEffect(() => {
    if (type) {
      let params = {
        colour: searchParams.getAll("colour"),
        gender: searchParams.getAll("gender"),
        price: searchParams.getAll("price"),
        type,
      };
      setSearchParams(params);
    }
  }, [type, setSearchParams]);

  return (
    <div className="filters-div">
      <div onChange={handleColour}>
        <h4>Colour</h4>
        <input type="radio" value="Red" name="colour" />
        <label>Red</label>
        <br />
        <input type="radio" value="Blue" name="colour" />
        <label>Blue</label>
        <br />
        <input type="radio" value="Green" name="colour" />
        <label>Green</label>
        <br />
        <input type="radio" value="Black" name="colour" />
        <label>Black</label>
        <br />
        <input type="radio" value="White" name="colour" />
        <label>White</label>
      </div>
      <div onChange={handleGender}>
        <h4>Gender</h4>
        <input type="radio" value="Men" name="gender" />
        <label>Men</label>
        <br />
        <input type="radio" value="Women" name="gender" />
        <label>Women</label>
      </div>
      <div onChange={handlePrice}>
        <h4>Price</h4>
        <input type="radio" value="0" name="price" />
        <label>0-Rs300</label>
        <br />
        <input type="radio" value="300" name="price" />
        <label>Rs300-450</label>
        <br />
        <input type="radio" value="450" name="price" />
        <label>Rs450</label>
      </div>
      <div onChange={handleType}>
        <h4>Type</h4>
        <input type="radio" value="Polo" name="type" />
        <label>Polo</label>
        <br />
        <input type="radio" value="Hoodie" name="type" />
        <label>Hoodie</label>
        <br />
        <input type="radio" value="Basic" name="type" />
        <label>Basic</label>
      </div>
    </div>
  );
};
