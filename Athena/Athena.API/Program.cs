using Athena.API.Repositories.Question;
using Athena.API.Services.Questions;
using Athena.API.Settings.DatabaseSettings;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

#region Swagger

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#endregion

#region AutoMapper

builder.Services.AddAutoMapper(typeof(Program));

#endregion AutoMapper

#region Database Settings

builder.Services.Configure<DatabaseSettings>(builder.Configuration.GetSection(nameof(DatabaseSettings)));
builder.Services.AddSingleton<IDatabaseSettings>(prov => prov.GetRequiredService<IOptions<DatabaseSettings>>().Value);

#endregion Database Settings

#region Repositories

builder.Services.AddSingleton<IQuestionRepository, QuestionRepository>();

#endregion Repositories

#region Services

builder.Services.AddSingleton<IQuestionService, QuestionService>();

#endregion Services

#region CORS

var AllowAthenaWebOrigin = "_allowAthenaWebOrigin";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowAthenaWebOrigin,
        policy =>
        {
            policy.WithOrigins("http://localhost:6006")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(AllowAthenaWebOrigin);

app.UseAuthorization();

app.MapControllers();

app.Run();