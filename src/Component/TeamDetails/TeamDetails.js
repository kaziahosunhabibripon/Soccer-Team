import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered, faFutbol, faMapMarker, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import Male from '../../Images/male.png';
import Female from '../../Images/female.png';
import './TeamDetails.css';
import twitter from '../../Images/twitter.png';
import youtube from '../../Images/youtube.png';
import facebook from '../../Images/facebook.png';
import instagram from '../../Images/instagram.png';
import website from '../../Images/website.png';
const TeamDetails = (props) => {
    
    const {
        strAlternate,
        strTeamBadge,
        strTwitter, strWebsite,
        strYoutube,
        strFacebook, strDescriptionEN,
        intFormedYear, strCountry, strGender, strInstagram, strLeague, strStadiumDescription
    } = props.team;
    
    let changeImage;
    if(strGender=== 'Male'){              
        changeImage =
        <img src={Male} alt="team-badge" />
    }
    else{
        changeImage =
        <img src={Female} alt="team-badge" />
        }
         
    return (
        <div className="row m-0 p-0">
            <img className="logo" src={strTeamBadge} alt="team-badge" />
            <div className="mid-part row">
                <div className="col-sm-6 left-side">
                    <h3> {strAlternate}</h3>
                    <p> <FontAwesomeIcon icon={faMapMarker} /> &nbsp; Founded: {intFormedYear}</p>
                    <p> <FontAwesomeIcon icon={faFlagCheckered} /> &nbsp; Country : {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> &nbsp;  Sport Type: {strLeague}</p>
                    <p> <FontAwesomeIcon icon={faMarsStroke} /> &nbsp; Gender: {strGender} </p>
                </div>
                <div className="col-sm-6 right-side">
                    {changeImage}
                </div>
            </div>
            <div className="content-part">
                <h4>Team Details:</h4>
                <p>
                    {strDescriptionEN}
                </p>

                <p>
                    {strStadiumDescription}
                </p>
            </div>
            <div className="footer-item">
                <a href={`https://${strTwitter}`} rel="noreferrer" target="_blank"> <img src={twitter} alt="stadium" className="header-img" /></a>
                <a href={`https://${strYoutube}`} rel="noreferrer" target="_blank"> <img src={youtube} alt="stadium" className="header-img" /></a>
                <a href={`https://${strFacebook}`} rel="noreferrer" target="_blank"> <img src={facebook} alt="stadium" className="header-img" /></a>
                <a href={`https://${strInstagram}`} rel="noreferrer" target="_blank"> <img src={instagram} alt="stadium" className="header-img" /></a>
                <a href={`https://${strWebsite}`} rel="noreferrer" target="_blank"><img src={ website} alt="stadium" className="header-img" /> </a>
            </div>
        </div>
    );
};

export default TeamDetails;