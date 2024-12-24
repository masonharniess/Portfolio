using Microsoft.AspNetCore.Mvc;
using portfolio_server.Models.LastFM;
using portfolio_server.Services.LastFM;

namespace portfolio_server.Controllers.Lastfm;

[ApiController]
[Route("api/lastfm")]
public class LastfmController : ControllerBase
{
    private readonly LastfmService _lastfmService;
    
    public LastfmController(LastfmService lastfmService)
    {
        _lastfmService = lastfmService;
    }

    [HttpGet("recent/{username}")]
    public async Task<ActionResult<List<TrackDto>>> GetRecentTracks(string username, [FromQuery] int limit = 5)
    {
        var tracks = await _lastfmService.GetRecentTracksAsync(username, limit);
        return Ok(tracks);
    }
}