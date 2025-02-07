
export default function ArtListItem(props) {

    const firstName = props.firstName;
    const lastName = props.lastName;
    const email = props.email;
    const profileImage = props.profileImage;


    return (
        <>
        <li style={{background: props.favouriteColour}}>
        <img
          src="https://www.gravatar.com/avatar/ritthy.ryan@example.com?s=120&d=identicon"
          alt="Ritthy Ryan"
        />
        <h3>Mr Ritthy Ryan</h3>
        <p>Email: ritthy.ryan@example.com</p>
      </li>
      </>
    )
    
}