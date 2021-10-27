import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const people = props.people;
  const person = people.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(person);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
      console.log(editForm)
    event.preventDefault();
    props.updatePeople(editForm, person._id);

    props.history.push("/");
  }

  const removePerson = () => {
    props.deletePeople(person._id);
    props.history.push("/");
  }

  return (
    
    <div className="person">
      <h1 className="h1">{person.name}</h1>
      <h2 className="h1">{person.title}</h2>
      <h1 className="h1">{person.iAmG}</h1>
      <button id="delete" onClick={removePerson}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.iAmG}
          name="iAmG"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.date}
          name="date"
          placeholder="date"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
    </div>
  )
}

export default Show;