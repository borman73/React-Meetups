import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const MEETUPS_DATA = [
//   {
//     id: 'm1', 
//     title: 'First meetup',
//     image: 
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 1, 12345 Meetup City',
//     description: 'Bla-bla-bla 1',
//   },
//   {
//     id: 'm2', 
//     title: 'Second meetup',
//     image:
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 2, 12345 Meetup City',
//     description: 'Bla-bla-bla 2',
//   }
// ];

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-meetups-9141e-default-rtdb.firebaseio.com/meetups.json',
      )
      .then(response => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: 'key',
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  
  if (isLoading) {
    return (
      <section>
        Loading ...
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetup={loadedMeetups} />
    </div>
  );
}
  
export default AllMeetupsPage;
