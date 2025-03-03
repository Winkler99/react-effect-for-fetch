import UsersList from "./components/UsersList"
function UsersSection(props) {
  const usersData = props.usersData;
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      <UsersList usersData = {usersData}/>
      </div>
      
    </section>
  )
}

export default UsersSection
