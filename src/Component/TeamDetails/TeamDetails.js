import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered, faFutbol, faMapMarker, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import Male from '../../Images/male.png';
import './TeamDetails.css';
const TeamDetails = (props) => {
    console.log(props.team);
    const {
        strTeam, strAlternate, idTeam,
        strTeamBadge, strTeamBanner,
        strTwitter, strWebsite,
        strYoutube, strStadium,
        strFacebook, strDescriptionEN,
        intFormedYear, strCountry, strGender, strInstagram, strLeague, strStadiumThumb
    } = props.team;
    return (
        <div className="row m-0 p-0">
            <img className="logo" src={strTeamBadge} alt="team-badge" />
            <div className="mid-part row">
                <div className="col-sm-6 left-side">
                    <h3> {strAlternate}</h3>
                    <p> <FontAwesomeIcon icon={faMapMarker} /> &nbsp; Founded: {intFormedYear}</p>

                    <p> <FontAwesomeIcon icon={faFlagCheckered} /> &nbsp; Country : {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> &nbsp;  Sport Type: {strLeague}</p>
                    <p> <FontAwesomeIcon icon={faMarsStroke} /> &nbsp; Gender: {strGender}</p>
                </div>
                <div className="col-sm-6 right-side">
                    <img src={Male} alt="team-badge" />
                </div>
            </div>
            <div className="content-part ">
                <h4>Team Details:</h4>
                <p>  
                    {strDescriptionEN}</p>
            </div>
            <p> {strAlternate}</p>
            <p> {strTwitter}</p>
            <p> {strWebsite}</p>
            <p> {strYoutube}</p>
            <p> {strStadium}</p>
            <p> {strFacebook}</p>
            <p> {strInstagram}</p>


            <p> {intFormedYear}</p>

        </div>
    );
};

export default TeamDetails;