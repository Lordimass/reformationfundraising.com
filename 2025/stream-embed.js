async function create_embed() {
    var options = {
        width: "101%",
        height: "101%",
        channel: "lordimass",
    };
    var player = new Twitch.Player("stream-embed", options);
    player.setVolume(0.5);
}

document.addEventListener('DOMContentLoaded', create_embed);