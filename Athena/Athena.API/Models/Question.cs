namespace Athena.API.Models;

using MongoDB.Bson.Serialization.Attributes;

public class Question
{
    [BsonId]
    public string Id { get; set; }
    public string Title { get; set; }
    public string Body { get; set; }
    public int Rating { get; set; }
}