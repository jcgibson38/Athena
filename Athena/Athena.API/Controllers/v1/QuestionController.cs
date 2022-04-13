using Athena.API.Repositories.Question;
using AutoMapper;
using Athena.API.Services.Questions;
using Microsoft.AspNetCore.Mvc;

namespace Athena.API.Controllers.v1;

[ApiController]
[Route("[controller]")]
public class QuestionController : ControllerBase
{
    private readonly IQuestionService _questionService;
    private readonly IMapper _mapper;

    public QuestionController(IQuestionService questionService, IMapper mapper)
    {
        _questionService = questionService;
        _mapper = mapper;
    }

    [HttpGet]
    [Route("")]
    public IEnumerable<ViewModels.Responses.v1.Question> Get()
    {
        return _mapper.Map<IEnumerable<ViewModels.Responses.v1.Question>>(_questionService.Get());
    }
}