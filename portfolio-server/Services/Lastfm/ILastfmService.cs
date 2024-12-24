using portfolio_server.Models.LastFM;
namespace portfolio_server.Services.LastFM;

public interface ILastfmService
{
    Task<List<TrackDto>> GetRecentTracksAsync(string user, int limit);
}
