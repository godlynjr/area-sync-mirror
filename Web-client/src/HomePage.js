import React, { useState, useEffect } from 'react';
import User from './User';

function HomePage() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await User.getAbout();
        setJsonData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    if (jsonData == null)
      fetchData(); // Call the function when the component mounts
  }, []);

  return (
    <div>
      {jsonData && (
        <div>
          {jsonData.server.services.map(service => (
            <div key={service.name}>
              <h3>Service: {service.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;

{/* <p>Service Description: {service.description}</p> */}

              {/* <h4>Actions:</h4>
              <ul>
                {service.actions && service.actions.map(action => (
                  <li key={action.name}>{action.description}</li>
                ))}
              </ul>

              <h4>Reactions:</h4>
              <ul>
                {service.reactions && service.reactions.map(reaction => (
                  <li key={reaction.name}>{reaction.description}</li>
                ))}
              </ul> */}