document.addEventListener("DOMContentLoaded", () => {
  const discordLink = document.getElementById("github-link");

  if (discordLink && typeof SITE_CONFIG !== "undefined") {
    discordLink.href = SITE_CONFIG.githublink;
    discordLink.style.textDecoration = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const discord = document.getElementById("discordd");

  if (discord && typeof SITE_CONFIG !== "undefined") {
    discord.href = SITE_CONFIG.discord;
    discord.style.textDecoration = "none";
  }
});
