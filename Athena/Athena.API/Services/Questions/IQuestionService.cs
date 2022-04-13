namespace Athena.API.Services.Questions;

public interface IQuestionService
{
    public IEnumerable<Models.Question> Get();
}