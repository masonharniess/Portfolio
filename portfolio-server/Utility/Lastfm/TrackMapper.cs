using portfolio_server.Models.LastFM;
namespace portfolio_server.Utility.LastFM;

public static class TrackMapper
{
    public static TrackDto ToInternalModel(this Track externalTrack)
    {
        Image? image = externalTrack.Images?.FirstOrDefault(img => img.Size == "large") ?? externalTrack.Images?.FirstOrDefault();

        bool isNowPlaying = externalTrack.NowPlayingAttr?.NowPlaying == "true";

        DateTime? datePlayed = null;
        if (!isNowPlaying && externalTrack.Date != null && long.TryParse(externalTrack.Date.Uts, out var UtsTimeStamp))
        {
            datePlayed = DateTimeOffset.FromUnixTimeSeconds(UtsTimeStamp).DateTime;
        }

        return new TrackDto
        {
            Artist = externalTrack.Artist.Name,
            Track = externalTrack.Name,
            Album = externalTrack.Album.Name,
            AlbumImage = image.Url,
            DatePlayed = datePlayed,
            IsNowPlaying = isNowPlaying
        };
    }
}