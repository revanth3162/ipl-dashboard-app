
import { React, useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'
import { MatchDetailCard } from '../component/MatchDetailCard';
import { MatchSmallCard } from '../component/MatchSmallCard';
import './TeamPage.scss';
export const TeamPage = () => {
    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`/ipl/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();

        }, [teamName]
        
    );
  if(!team || !team.teamName){
    return <h1>Team Not found</h1> 
  }
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{ team.teamName }</h1>
        <h3>Latest Matches</h3>
      </div>
      <div className="match-detail-section">
        <MatchDetailCard  teamName = {team.teamName} match={team.matches[0]}/>
      </div>
      <div className="match-small-section">
        <div className="small-cards">
          {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match} />)}
        </div>
      </div>
      <div className='more-link-section'>
      <Link to={`/team/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>
            Click Here to View More
      </Link>
      </div>
    </div>
  );
}

export default TeamPage;
