using System.Text.Json;
using Microsoft.Extensions.Options;
using portfolio_server.Configuration;
using portfolio_server.Models.LastFM;
using portfolio_server.Utility.LastFM;

namespace portfolio_server.Services.LastFM;

public class LastfmService : ILastfmService
{
    private readonly HttpClient _httpClient;
    private readonly LastfmOptions _options;

    public LastfmService(HttpClient httpClient, IOptions<LastfmOptions> options)
    {
        _httpClient = httpClient;
        _options = options.Value;
    }

    public async Task<List<TrackDto>> GetRecentTracksAsync(string user, int limit = 5)
    {
        string requestUrl = $"{_options.BaseURL}?method=user.getRecentTracks"
                            + $"&user={user}"
                            + $"&api_key={_options.ApiKey}"
                            + $"&limit={limit}"
                            + $"&format=json";

        HttpResponseMessage response = await _httpClient.GetAsync(requestUrl);

        if (!response.IsSuccessStatusCode)
        {
            throw new HttpRequestException($"Failed to retrieve tracks: {response.StatusCode}");
        }

        string jsonString = await response.Content.ReadAsStringAsync();
        RecentTracksResponse? lastfmData = JsonSerializer.Deserialize<RecentTracksResponse>(jsonString,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        List<TrackDto> trackList = new List<TrackDto>();
        if (lastfmData?.RecentTracks?.Tracks != null)
        {
            foreach (var track in lastfmData.RecentTracks.Tracks)
            {
                trackList.Add(track.ToInternalModel());
            }
        }

        return trackList;
    }
}