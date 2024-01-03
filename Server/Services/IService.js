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
  
    // Optional M*ethods

    async createNotification(message)
    {
        // nothing
    }
    async createEventInCalendar(eventDetails)
    {
      // nothing
    }
  
    async createEntryInTally(entryDetails)
    {
      // nothing
    }
  
    async closeGithubIssue(issueDetails)
    {
      // nothing
    }
  
    async createPageInNotion(pageDetails)
    {
      // nothing
    }
  
    async addEventToGoogleCalendar(calendarEvent)
    {
      // nothing
    }
  
    async updateGithubIssue(issueDetails)
    {
      // nothing
    }
}

module.exports = IService;