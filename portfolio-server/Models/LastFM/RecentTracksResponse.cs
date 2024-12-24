using System.Text.Json.Serialization;
using System.Collections.Generic;
namespace portfolio_server.Models.LastFM;

public class RecentTracksResponse
{
    [JsonPropertyName("recenttracks")]
    public RecentTracks RecentTracks { get; set; }
}

public class RecentTracks
{
    [JsonPropertyName("track")]
    public List<Track> Tracks { get; set; }
    
    [JsonPropertyName("@attr")]
    public RecentTracksAttributes RecentTracksAttr { get; set; }
}

public class RecentTracksAttributes
{
    [JsonPropertyName("user")]
    public string User { get; set; }
    
    [JsonPropertyName("totalPages")]
    public int TotalPages { get; set; }
    
    [JsonPropertyName("page")]
    public string Page { get; set; }
    
    [JsonPropertyName("perPage")]
    public int PerPage { get; set; }
    
    [JsonPropertyName("total")]
    public string Total { get; set; }
}

public class Track
{
    [JsonPropertyName("artist")]
    public Artist Artist { get; set; }
    
    [JsonPropertyName("streamable")]
    public bool Streamable { get; set; }
    
    [JsonPropertyName("image")]
    public List<Image> Images { get; set; }
    
    [JsonPropertyName("mbid")]
    public string Mbid { get; set; }
    
    [JsonPropertyName("album")]
    public Album Album { get; set; }
    
    [JsonPropertyName("name")]
    public string Name { get; set; }
    
    // Holds date of play if it is not currently being played
    [JsonPropertyName("@attr")]
    public NowPlayingAttribute NowPlayingAttr { get; set; }
    
    [JsonPropertyName("url")]
    public string URL { get; set; }
    
    // Holds play time if it is currently being played
    [JsonPropertyName("date")]
    public Date Date { get; set; }
}

public class Artist 
{
    [JsonPropertyName("mbid")]
    public string Mbid { get; set; }
    
    [JsonPropertyName("#text")]
    public string Name { get; set; }
}

public class Album
{
    [JsonPropertyName("#text")]
    public string Name { get; set; }
}

public class Image
{
    [JsonPropertyName("size")]
    public string Size { get; set; }
    
    [JsonPropertyName("#text")]
    public string Url { get; set; }
}

public class Date
{
    [JsonPropertyName("uts")]
    public string Uts { get; set; }
    
    [JsonPropertyName("#text")]
    public string Text { get; set; }
}

public class NowPlayingAttribute
{
    [JsonPropertyName("nowplaying")]
    public bool NowPlaying { get; set; }
}

