// client.test.js
import User from './User'

describe('Client class tests', () => {
  beforeEach(() => {
    // Set up any necessary configurations or mock functions before each test
    localStorage.clear();
  });

  afterEach(() => {
    // Clean up after each test
    jest.restoreAllMocks();
  });

  it('should set the logged-in status correctly', () => {
    expect(User.isLoggedIn).toBe(false);
  });

  it('should correctly fill request headers', () => {
    // Mock local storage token
    const authToken = localStorage.getItem('authToken');

    const headers = User.fillRequestHeaders();

    expect(headers['Content-Type']).toBe('application/json');
    expect(headers['Authorization']).toBe(`Bearer ${authToken}`);
  }); 

  it('should log in successfully', async () => {
    // Mock fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'yourAuthToken' }),
      })
    );

    await User.log('test@example.com', 'password');

    expect(User.isLoggedIn).toBe(true);
    expect(window.location.href).toBe('/home');
  });

  // it('should handle login error', async () => {
  //   // Mock fetch function to simulate an error
  //   global.fetch = jest.fn(() =>
  //     Promise.reject(new Error('Mocked fetch error'))
  //   );

  //   console.error = jest.fn();

  //   await User.log('test@example.com', 'password');

  //   expect(User.isLoggedIn).toBe(true); // Not changed due to the error
  //   expect(console.error).toHaveBeenCalledWith(
  //     'Erreur de connexion :',
  //     expect.any(Error)
  //   );
  // });

  // it('should get data about the user successfully', async () => {
  //   // Mock fetch function
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve({ userData: 'yourData' }),
  //     })
  //   );

  //   const result = await User.getAbout();

  //   expect(result.userData).toBe('yourData');
  // });

//   it('should handle error during getAbout', async () => {
//     // Mock fetch function to simulate an error
//     global.fetch = jest.fn(() =>
//       Promise.reject(new Error('Mocked fetch error'))
//     );

//     console.error = jest.fn();

//     await expect(User.getAbout()).rejects.toThrow('Mocked fetch error');
//     expect(console.error).toHaveBeenCalledWith(
//       'Error during fetch:',
//       expect.any(Error)
//     );
//   });
});
