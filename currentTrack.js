//import spotifyWebUtility from 'spotifyWebUtility';
const spotifyWebUtility = require('./spotifyWebUtility/spotifyWebUtility');
const access_token = 'BQDJdRoC8_BJ2IRrZPd6b5NtX72RoLSzgDz86h9hkQgFaQ_2f-pCqnDQe-u_9Ln-6gL-v_kGuDiBcqqWQQ5m5zaHU1SqO1LN6JcrPsdRfysWUVZT31-aw1A4Wb0xtUOVlddObpYkY-n80OyrJToUYqnKsxNR_qUTO6FDU4pb4F1SJWfnlBxry6eZHKZIiwDsu7ADwvNbAiqT-7l12FG681bmyubiuDDea5VNl_AyWDUIrCWc-6bcRiPVuhxBt0vH3s0dIW765pMPHdNNfL2On0pd4Zc'
const refresh_token = 'AQBxhvsoVcgU6C7MWKXgp-MpgwTdlu21MTjxFP4YTtIEGmEzOBPaCpsMSFCw-BHCwyEXpgzTPqbMxWA1Q_0T7jhRs71PKkfp4mXpJ46z6ZO-KR5FEmjy00tjIl-Cy_nbH9c'

/*class currentTrack{
    getCurrentTrack(){
        call = new spotifyWebUtility(token)
        const user = st.getMe()

        const track = spotifyWebUtility.getTrack(user) 
    }
}*/

const call = new spotifyWebUtility(access_token, refresh_token)
call.likeCurrentTrack()

/*function likeCurrentTrack() {
    (async () => {
        const u = await call.me()
        console.log("user is " + u)
        const t = await call.track(u)
        console.log("track is " + t)
        await call.like(t)
    })().catch(e => {
        console.error(e);
    });
}
likeCurrentTrack()*/