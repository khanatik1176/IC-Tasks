const BioData = (props) =>
{
    const {username,age,email,skills,interests,socialMedia} = props;
    return (
        <div className="bio">
        <div className="personal-details">
            <h1>Personal Details of {username}</h1>
            <p><strong>Age: {age}</strong></p>
            <p><strong>Email: {email}</strong></p>

        </div>

        <div className="skills">
            <h1>Skills of {username}</h1>
            <ul>
                {
                skills.map((skill) =>
                (
                    <li key={skill}>{skill}</li>
                )
                )
                }
            </ul>
        </div>
        <div className="interests">
            <h1>Interests of {username}</h1>
            <ul>
                {
                interests.map((interest) =>
                (
                    <li key={interest}>{interest}</li>
                )
                )
                }
            </ul>
        </div>
        <div className="socials">
            <h1>Social Media of {username}</h1>
            <ul>
                {
                socialMedia.map((socialMedia) =>
                (
                    <p key={socialMedia.socialName}><strong>Social Media Name : </strong>{socialMedia.socialName} 
                    
                    {" "} {socialMedia.socialLink}

                    </p>
                )
                )
                }
            </ul>
            <br />
            <hr />
       </div>
        </div>
    );
}; 

export default BioData;