namespace portfolio_server.Models.LastFM;
using System.Text.Json.Serialization;
using System.Collections.Generic;

public class RecentTracksResponse
{
    [JsonPropertyName("recenttracks")]
    public RecentTracksData RecentTracks { get; set; }
}

public class RecentTracksData
{
    [JsonPropertyName("track")]
    public List<Track> Tracks { get; set; }
    
    [JsonPropertyName("@attr")]
    public Attr Attributes { get; set; }
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
    public Attr Attr { get; set; }
    
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
    public string Text { get; set; }
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
    public string Text { get; set; }
}

public class Date
{
    [JsonPropertyName("uts")]
    public string UTS { get; set; }
    
    [JsonPropertyName("#text")]
    public string Text { get; set; }
}

public class Attr
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
