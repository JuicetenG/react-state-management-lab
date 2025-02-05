import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  function handleAddFighter(newFighter) {
    if(money >= newFighter.price) {
      const newTeamArray = [...team, newFighter];
      console.log(newTeamArray);
      setTeam(newTeamArray);

      const newZombieFightersArray = zombieFighters.filter(fighter => fighter.id !== newFighter.id);
      console.log(newZombieFightersArray);
      setZombieFighters(newZombieFightersArray); 

      const newMoneyTotal = money - newFighter.price;
      console.log(newMoneyTotal);
      setMoney(newMoneyTotal);
    
    } else alert('insufficient funds');
  }

  function handleRemoveFighter(removedFighter) {
    const newTeamArray = team.filter(fighter => fighter.id !== removedFighter.id);
    console.log(newTeamArray);
    setTeam(newTeamArray);

    const newZombieFightersArray = [...zombieFighters, removedFighter]
    console.log(newZombieFightersArray);
    setZombieFighters(newZombieFightersArray); 

    const newMoneyTotal = money + removedFighter.price;
    console.log(newMoneyTotal);
    setMoney(newMoneyTotal);
  }

  let totalStrength = team.reduce((accumulator, current) => {
    return accumulator + current.strength;
  }, 0);

  let totalAgility = team.reduce((accumulator, current) => {
    return accumulator + current.agility;
  }, 0);

  return (
    <div>    
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members</p>
      ) : (
        <ul>
          {team.map((teamFighter) => (
            <li key={teamFighter.id}>
                <p><img src={teamFighter.img} alt="teamFighter" /></p>
                <p>{teamFighter.name}</p>
                <p>price: {teamFighter.price}</p>
                <p>Strength: {teamFighter.strength}</p>
                <p>Agility: {teamFighter.agility}</p>
                <button onClick={() => handleRemoveFighter(teamFighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <p><img src={fighter.img} alt="fighter" /></p>
            <p>{fighter.name}</p>
            <p>price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;