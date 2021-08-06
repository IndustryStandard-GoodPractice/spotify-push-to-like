const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();
class spotifyWebUtility{
    constructor(access_token = null, refresh_token = null){
        this.access_token = access_token
        this.refresh_token = refresh_token
        if(access_token && refresh_token){
          spotifyApi.setAccessToken(this.access_token);
          spotifyApi.setRefreshToken(this.refresh_token);
        }
    }

    updateTokens(at, rt) {
      spotifyApi.setAccessToken(at)
      spotifyApi.setRefreshToken(rt)
      console.log("Access Token and Refresh Token Updated!!!")
    }

    async me(){
      const me = await spotifyApi.getMe();
      return me.body.id
    }

    async track(user){
      const track = await spotifyApi.getMyCurrentPlayingTrack(user);
      console.log("currently listening to " + track.body.item.name + " by: " + track.body.item.album.artists[0].name)
      return track.body.item.id
    }

    async like(id){
      const isLiked = await spotifyApi.containsMySavedTracks([id])
      if(isLiked.body[0]){
        await spotifyApi.removeFromMySavedTracks([id])
        console.log("track is already liked... removing it")
        console.log("removed track from liked with id: " + id)
        return
      }
      const response = await spotifyApi.addToMySavedTracks([id])
      console.log("added track to liked with id: " + id)
      console.log("response status: " + response.statusCode)
    }

    likeCurrentTrack() {
      (async () => {
          const u = await this.me()
          console.log("user is " + u)
          const t = await this.track(u)
          console.log("track is " + t)
          await this.like(t)
      })().catch(e => {
          console.error(e);
      });
  }
}
module.exports = spotifyWebUtility