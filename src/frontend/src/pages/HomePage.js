import { useEffect, useState } from "react";
import "./HomePage.scss";
import {TeamTile} from "../component/TeamTile";

export const HomePage = () =>{
    const [teams, setTeams] = useState([])
    useEffect(
        () => {
            const fetchAllTeams = async () =>{
                const response = await fetch(`/ipl/team`);
                const data = await response.json();
                setTeams(data);
            };
            fetchAllTeams();
        }, []
    );
    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL DashBoard 2022</h1> 
        </div>
        <div className="teams-section"> 
            {teams.map(team => <TeamTile teamName={team.teamName}/>)}
        </div>
        </div> 
    )
}