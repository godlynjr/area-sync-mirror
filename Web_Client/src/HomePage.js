import React, { useState, useEffect } from 'react';
import User from './User';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import ServiceComponent from './ServiceComponent';

function HomePage() {
  const [jsonData, setJsonData] = useState(null);  
  const [filteredServices, setFilteredServices] = useState(jsonData);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      // If the search term is empty, display the default list
      setFilteredServices(jsonData);
    } else {
      // Filter the list based on the search term
      const filtered = jsonData.server.services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  };

  const handleInputChange = (searchTerm) => {
    handleSearch(searchTerm);
  };

  const handleServiceClick = (serviceName) => {
    window.location.href = '/' + serviceName;
    // You can perform other actions based on the clicked service if needed
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await User.getAbout();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    if (jsonData == null)
      fetchData(); // Call the function when the component mounts
  }, []);

  return (
    <div className='bg-figma-green h-full'>
      <Header />

      {/* <hr style={{
        background: 'black',
        color: 'black',
        borderColor: 'black',
        height: '1px',
      }} className='my-1'/> */}

      <div className='flex flex-col justify-center items-center'>
        <p className='lg:text-5xl'>Discover</p>
        <Searchbar onSearch={handleInputChange} />
      </div>
      <div className='container mx-auto'>
        {jsonData && (
          <div className='grid grid-cols-2 gap-5 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5'>

          {jsonData.server.services.map((service, index) => (
            <ServiceComponent key={index} service={service} onServiceClick={handleServiceClick}/>
            ))}

          </div>
          )}
      </div>
      <button onClick={logout}>Logout</button>
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