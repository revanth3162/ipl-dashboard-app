import { React } from 'react';
import { Link } from 'react-router-dom';
import "./MatchDetailCard.scss"


export const MatchDetailCard = ({teamName, match}) => {
  
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;

  if(!match) {
    return <h1> No Matches Played</h1>;
  }
  
  return (
    <div className={isMatchWon ? 'MatchDetailCard won-card':'MatchDetailCard lost-card'}>
      <div className="team-info">
        <span className="vs">vs </span> 
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1> 
      </div>
      <div className="match-details">
        <p>{match.description}</p>
        <p> Stadium: {match.venueName}</p>
        <p className="bold">{match.tossWinner} won the toss and decided to {match.tossDecision}</p>
      </div>

      <div className="match-statistics">
        <div>
          <p> {match.team1}</p>
          <p> {match.score1}</p>
          <p> Key Batsmen: {match.keyBatsmen1}</p>
          <p> Key Bowler: {match.keyBowler1}</p>
        </div>
        <div className={isMatchWon ? 'lost-card': 'won-card'}>
        </div>
        <div>
          <p> {match.team2}</p>
          <p> {match.score2}</p>
          <p> Key Batsmen: {match.keyBatsmen2}</p>
          <p> Key Bowler: {match.keyBowler2}</p>
        </div>
      </div>
      <div className="match-result-section">
      <p className="bold"> {match.pom} is awarded with Man Of the Match</p>
      <p className="bold">{match.result}</p>
      </div>
    </div>
  );
}

export default MatchDetailCard;