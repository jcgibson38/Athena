using Athena.API.Settings.DatabaseSettings;
using MongoDB.Driver;

namespace Athena.API.Repositories.Question;

public class QuestionRepository : IQuestionRepository
{
    private readonly IMongoCollection<Models.Question> _questions;

    public QuestionRepository(IDatabaseSettings databaseSettings)
    {
        var client = new MongoClient(databaseSettings.ConnectionString);
        var database = client.GetDatabase(databaseSettings.DatabaseName);

        _questions = database.GetCollection<Models.Question>("Questions");
    }
    
    public IEnumerable<Models.Question> Get()
    {
        return _questions.Find(question => true).ToEnumerable();
    }
}