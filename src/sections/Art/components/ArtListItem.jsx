
import PublicationHistoryList from "./PublicationHistoryList"


export default function ArtListItem(props) {

    const title = props.title;
    const imageURL = props.imageURL;
    const artist = props.artist;
    const publicationHistoryList = props.publicationHistoryList;


    return (
        <li>
        <div className="frame">
          <img
            src={`https://boolean-api-server.fly.dev${imageURL}`}
          />
        </div>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList publicationHistoryList = {publicationHistoryList}/>
      </li>
      
    )
    
}