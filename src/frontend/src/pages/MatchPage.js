
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { YearSelector } from '../component/YearSelector';
import "./MatchPage.scss"
export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    useEffect(
      () => {
        const fetchMatches = async () =>{
          const response = await fetch(`/ipl/team/${teamName}/matches?year=${year}`);
          const data = await response.json();
          setMatches(data);
        };
        fetchMatches();
      }, [teamName, year]
    );

  return (
    <div className="MatchPage">
      <div className="year-selector">
          <h2>Select Year</h2>
          <YearSelector teamName = {teamName}/>
      </div>
      <div className="year-content">
      <h1>{teamName} matches in {year}</h1>
      <div className="year-detail-match">
       {matches.map(match => <MatchDetailCard teamName = {teamName} match={match}/>)}
      </div>
       
      </div>
    </div>
  );
}

export default MatchPage;
