namespace Athena.API.Settings.DatabaseSettings;

public interface IDatabaseSettings
{
    string ConnectionString { get; set; }
    string DatabaseName { get; set; }
}