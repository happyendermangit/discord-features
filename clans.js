if (typeof post === "undefined") {
  window.post = findByProps("HTTP", "getAPIBaseURL").HTTP.post;
}
findByProps("HTTP", "getAPIBaseURL").HTTP.post = (...data) => {
  if (data[0].url.includes("clan")) {
    console.log(data[0].url.replace("/clan/",""))
    const guildId = data[0].url.replace("/clan/","")
    findByProps("_dispatch").dispatch({ type: "CLAN_SETUP_SUCCESS", guildId})
    return data;
  }
  return window.post(...data);
};

// run this to get the rep up ui
/**
    findByProps("getGuildCount").getGuild("<guild_id>").clan = true 
    findByProps("getGuildCount").getGuild("<guild_id>").features.add("CLAN") // enable clans
*/
