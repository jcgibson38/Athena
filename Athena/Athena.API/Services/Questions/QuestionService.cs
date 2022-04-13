using Athena.API.Repositories.Question;

namespace Athena.API.Services.Questions;

public class QuestionService : IQuestionService
{
    private readonly IQuestionRepository _questionRepository;

    public QuestionService(IQuestionRepository questionRepository)
    {
        _questionRepository = questionRepository;
    }

    public IEnumerable<Models.Question> Get()
    {
        return _questionRepository.Get();
    }
}