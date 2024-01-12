const GithubService = require('../Services/Github/index');

const githubService = new GithubService();

async function testConnect() {
    try {
        await githubService.connect();
        console.log('Successfully connected to GitHub.');
    } catch (error) {
        console.error('Failed to connect to GitHub:', error.message);
    }
}

async function runTests() {
    await testConnect();
//   await githubService.disconnect();
}

runTests();
