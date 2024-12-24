namespace portfolio_server.Models.LastFM;
using System.Text.Json.Serialization;
using System.Collections.Generic;

public class TrackDTO
{
    public string Track { get; set; }
    public string Album { get; set; }
    public string AlbumImage { get; set; }
    public string Artist { get; set; }
    public DateTime? DatePlayed { get; set; }
    public bool IsNowPlaying { get; set; }
}