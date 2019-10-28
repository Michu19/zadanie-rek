import React, { useState, useEffect } from 'react';
import { photos } from './Imgaes';
import styled from 'styled-components';

const Wrapper = styled.div`
    img {
        width: 250px;
        height: 300px;
    }
    > div {
        display: flex;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        flex-wrap: wrap;
            justify-content: center;
    div {
        display: block;
        margin: 15px;
        text-align: center;
        box-shadow: 0 0 1em black;
        transition: all 0.4s ease-in-out;
        background-color: white;
        :hover {
            transform: scale(1.1);
        }
    }
    }
`

const PhotoGalley = () => {

const [characters, setCharacters] = useState([])


  useEffect(() => {
          fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(json => setCharacters(json.results));
  },[]);

  const people = (characters.map((props) => (
          <p key={props.name}>
            {props.name}
          </p>
        )));
const items = [];

for(let i = 0; i < people.length; i++){
    items.push([<div key={i}>{photos[i]}{people[i]}</div>]);
}

  return (
    <Wrapper>
        <div>
            {
                items
            }
        </div>
    </Wrapper>
  );
}

export default PhotoGalley;
