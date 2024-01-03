class IService
{
    async connect()
    {
      throw new Error('Method not implemented');
    }
  
    async disconnect()
    {
      throw new Error('Method not implemented');
    }
  
    async sendMessage(message)
    {
      throw new Error('Method not implemented');
    }
  
    // Optional methods

    async createNotification(message)
    {
        // Default implementation
    }
    async createEventInCalendar(eventDetails)
    {
      // Default implementation
    }
  
    async createEntryInTally(entryDetails)
    {
      // Default implementation
    }
  
    async closeGithubIssue(issueDetails)
    {
      // Default implementation
    }
  
    async createPageInNotion(pageDetails)
    {
      // Default implementation
    }
  
    async addEventToGoogleCalendar(calendarEvent)
    {
      // Default implementation
    }
  
    async updateGithubIssue(issueDetails)
    {
      // Default implementation
    }
}

module.exports = IService;