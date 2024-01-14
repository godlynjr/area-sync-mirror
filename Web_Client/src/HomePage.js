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
    console.log(searchTerm);
    if (searchTerm.trim() === '') {
      setFilteredServices(jsonData.server.services);
    } else {
      const filtered = jsonData.server.services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered);
      setFilteredServices(filtered);
    }
  };

  const handleInputChange = (searchTerm) => {
    handleSearch(searchTerm);
  };

  const handleServiceClick = (serviceName) => {
    window.location.href = '/' + serviceName;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await User.getAbout();
        setJsonData(data);
        setFilteredServices(data.server.services);
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

      <div className='container mx-auto'>
      <hr style={{
        background: 'black',
        color: 'black',
        borderColor: 'black',
        height: '1px',
      }} className='my-1'/>
        <div className='flex flex-col justify-center items-center'>
          <Searchbar onSearch={handleInputChange} />
        </div>
        {jsonData && (
          <div className='grid grid-cols-2 gap-5 text-black sm:gap-10 md:grid-cols-3 lg:grid-cols-3 mt-5'>

          {filteredServices.map((service, index) => (
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
