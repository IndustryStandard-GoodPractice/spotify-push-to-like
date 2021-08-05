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
      console.log(track.body.item.id)
      return track.body.item.id
    }

    async like(id){
      const response = await spotifyApi.addToMySavedTracks([id])
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