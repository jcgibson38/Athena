using AutoMapper;

namespace Athena.API.Mappers.v1;

public class QuestionMapper : Profile
{
     public QuestionMapper()
     {
          CreateMap<Models.Question, ViewModels.Responses.v1.Question>();
     }
}