import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() { 

  const [isLoading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => { 
    setLoading(true);
    fetch(
      "https://react-getting-started-2edcf-default-rtdb.firebaseio.com/meetups.json"
    ).then(response => {
      return response.json();
    }).then(data => { 

      const temps = [];
      
      for (const key in data) { 
        const meetup = {
          id: key,
          ...data[key]
        };
        temps.push(meetup)
      }

      setLoading(false);
      setMeetups(temps);
    });
  }, []);

  if (isLoading) { 
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
      <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={ meetups } />
      </section>
  );
}

export default AllMeetupsPage;