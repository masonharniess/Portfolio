using Microsoft.AspNetCore.Mvc;
using portfolio_server.Models.LastFM;
using portfolio_server.Services.LastFM;

namespace portfolio_server.Controllers.Lastfm;

[ApiController]
[Route("api/lastfm")]
public class LastfmController : ControllerBase
{
    private readonly ILastfmService _lastfmService;
    
    public LastfmController(ILastfmService lastfmService)
    {
        _lastfmService = lastfmService;
    }

    [HttpGet("recent/{username}")]
    public async Task<ActionResult<List<TrackDto>>> GetRecentTracks(string username, [FromQuery] int limit = 5)
    {
        List<TrackDto> tracks = await _lastfmService.GetRecentTracksAsync(username, limit);
        return Ok(tracks);
    }
}