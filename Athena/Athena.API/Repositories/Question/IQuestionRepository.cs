namespace Athena.API.Repositories.Question;

public interface IQuestionRepository
{
    public IEnumerable<Models.Question> Get();
}