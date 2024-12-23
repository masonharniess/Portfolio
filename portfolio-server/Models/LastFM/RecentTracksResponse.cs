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
}

public class Track
{
    [JsonPropertyName("name")]
    public string Name { get; set; }
    
    [JsonPropertyName("artist")]
    public Artist Artist { get; set; }
    
    [JsonPropertyName("album")]
    public Album Album { get; set; }
    
    [JsonPropertyName("image")]
    public List<Image> Images { get; set; }
    
    [JsonPropertyName("date")]
    public TrackDate Date { get; set; }
    
    [JsonPropertyName("@attr")]
    public TrackAttr Attr { get; set; }
}

public class Artist 
{
    [JsonPropertyName("#artist")]
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

public class TrackDate
{
    [JsonPropertyName("uts")]
    public string UTS { get; set; }
    
    [JsonPropertyName("#text")]
    public string Text { get; set; }
}

public class TrackAttr
{
    [JsonPropertyName("nowplaying")]
    public string IsNowPlaying { get; set; }
}
