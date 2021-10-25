import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [ newForm, setNewForm ] = useState({
    name: "",
    iAmG: "",
    date: "",
  });

  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault();
    props.createPeople(newForm);
    setNewForm({
      name: "",
      iAmG: "",
      date: "",
    });
  }

  // loaded function
  const loaded = () => {
    return props.people.map(person => (
      <div key={person._id} className="person">
        {/* <Link to={`/people/${person._id}`}> */}
          <h1>{person.name}</h1>
        {/* </Link> */}
        <h2>{person.iAmG}</h2>
        <h3>{person.date}</h3>
      </div>
    ));
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return (
    <container>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="              Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.iAmG}
          name="iAmG"
          placeholder="      I Am Grateful For ?"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.date}
          name="date"
          placeholder="      Date: MM/DD/YY"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <div className="peoples">{props.people ? loaded() : loading()}</div>
    </container>
  );
}

export default Index;