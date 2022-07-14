import React, { useState } from "react";
import "./style.css";

// props: the dgod.json file passed from index.js
export default function App(props) {
  // abstrct the breeds and store in an array
  let sampleDog = props.pets; // abstract the pets val in proprs obj
  let breedsArr = sampleDog.map((item) => {
    if (!sampleDog.includes(item.breed)) {
      return item.breed;
    }
  });
  const [pet, setPet] = useState(props.pets);
  // takes in the name of a pet (a String)
  const handleAdopt = function (petName) {
    let petsCopy = pet.map((obj) => {
      if (obj.name == petName) {
        obj.adopted = true;
      } else {
        obj.adopted = false;
      }
      return obj;
    });
    setPet(petsCopy);
  };
  return (
    <div>
      <Headers />
      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <BreedNav breeds={breedsArr} />
            <ABoutNav />
          </div>
          <div id="petList" className="col-9">
            <PetList pets={props.pets} adoptCallback={handleAdopt} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
function Headers() {
  return (
    <header className="jumbotron jumbotron-fluid py-4">
      <div className="container">
        <h1>Adopt a Pet</h1>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="container">
      <small>
        Images from{" "}
        <a href="http://www.seattlehumane.org/adoption/dogs">
          Seattle Humane Society
        </a>
      </small>
    </footer>
  );
}
function ABoutNav() {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li>
          <a href="#/">How to Adopt</a>
        </li>
        <li>
          <a href="#/">Volunteering</a>
        </li>
        <li>
          <a href="#/">Events</a>
        </li>
        <li>
          <a href="#/">Donate</a>
        </li>
        <li>
          <a href="#/">About Us</a>
        </li>
      </ul>
    </nav>
  );
}
// props: called breeds that is an array of strings (pet breeds)
function BreedNav(props) {
  let result = props.breeds.map((item) => {
    return (
      <li key={item}>
        <a href="">{item}</a>
      </li>
    );
  });
  return (
    <div>
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">{result}</ul>
      </nav>
    </div>
  );
}
// prop: an Object like those in the dogs.json array
function PetCard(prop) {
  let petName = prop.petObj.name;
  let petPic = prop.petObj.img;
  let petBreed = prop.petObj.breed;
  let isAdopted = prop.petObj.adopted;
  const handleAdopt = ()=>{prop.adoptCallback(petName)}
  return (
    <div className="card" onClick={handleAdopt}>
      <img className="card-img-top" src={petPic} alt={petName} />
      <div className="card-body">
        <h3 className="card-title">
          {petName}
          <b>{isAdopted ? " (Adopted) " : ""}</b>
        </h3>
        <p className="card-text">{petBreed}</p>
      </div>
    </div>
  );
}
//props:called pets, which shuld be an array of pet objects
// (similar to the dogs.json array)
function PetList(props) {
  let cardArr = props.pets.map((petObj) => {
    return(
    <PetCard
      key={petObj.name}
      petObj={petObj}
      adoptCallback={props.adoptCallback}
    />
    )
  });

  return (
    <div id="petList" className="col-9">
      <h2>Dogs for Adoption</h2>
      {cardArr}
    </div>
  );
}
