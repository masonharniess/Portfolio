
using portfolio_server.Models.LastFM;
namespace portfolio_server.Services.LastFM;

public class TrackMapper
{
    public static TrackDTO ToInternalModel(Track externalTrack)
    {
        Image? image = externalTrack.Images?.FirstOrDefault(img => img.Size == "small") ?? externalTrack.Images?.FirstOrDefault();

        bool isNowPlaying = externalTrack.NowPlayingAttr?.NowPlaying == true;

        DateTime? datePlayed = null;
        if (!isNowPlaying && externalTrack.Date != null && long.TryParse(externalTrack.Date.Uts, out var UtsTimeStamp))
        {
            datePlayed = DateTimeOffset.FromUnixTimeSeconds(UtsTimeStamp).DateTime;
        }

        return new TrackDTO
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