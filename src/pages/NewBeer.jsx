import React, { useState } from "react";

export default function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState();
  const [contributed_by, setContributedBy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    const payload = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.status === 200) {
        console.log("All good");
        const newBeer = await response.json();
        console.log(newBeer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="add-new-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label>
        Tagline
        <input
          type="text"
          value={tagline}
          onChange={(event) => {
            setTagline(event.target.value);
          }}
        />
      </label>
      <label>
        Description
        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
      </label>
      <label>
        First Brewed
        <input
          type="text"
          value={first_brewed}
          onChange={(event) => {
            setFirstBrewed(event.target.value);
          }}
        />
      </label>
      <label>
        Brewers Tips
        <input
          type="text"
          value={brewers_tips}
          onChange={(event) => {
            setBrewersTips(event.target.value);
          }}
        />
      </label>
      <label>
        Attenuation Level
        <input
          type="number"
          value={attenuation_level}
          onChange={(event) => {
            setAttenuationLevel(Number(event.target.value));
          }}
        />
      </label>
      <label>
        Contributed By
        <input
          type="text"
          value={contributed_by}
          onChange={(event) => {
            setContributedBy(event.target.value);
          }}
        />
      </label>
      <button type="submit">ADD NEW</button>
    </form>
  );
}
