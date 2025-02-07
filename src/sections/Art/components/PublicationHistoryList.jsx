
import PublicationHistoryItem from "./PublicationHistoryItem.jsx"
export default function PublicationstoryList(props){

    const publicationHistoryList = props.publicationHistoryList

    return(

        <ul className="publications">
            {publicationHistoryList?.map((publicationHistoryItem, index) => (
        <PublicationHistoryItem publicationHistoryItem = {publicationHistoryItem} key={index} />
      ))}
    </ul>

    );
}
