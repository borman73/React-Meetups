import { useHistory } from 'react-router';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage () {

  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch('https://react-meetups-9141e-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(() => {
        history.replace('/');
    });
  }

  return <div>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </div>
}
  
export default NewMeetupPage;
