import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children,alertMe }) => {
  
  return (
    <div style={{display: "flex", justifyContent:"space-between" , gap: 30,}}>
       <div style={{}}>{children}</div>
      <div >
      <h1 style={{color:"white",textAlign: "center" }}>{fullName}</h1>
      <h1 style={{color:"white",textAlign: "center" }}>{profession}</h1>
      <p style={{color:"black",textAlign: "justify"  }}>{bio}</p>
      <button  style={{backgroundColor:"orange"}}  onClick={()=>alertMe()} >Click me</button>
      </div> 
    </div>
  );
};
Profile.defaultProps={
    fullName:"This a default name",
    bio:"This a default bio",
    profession:"This is a default profession"

}
Profile.propTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,
}
export default Profile;
