
document.addEventListener("DOMContentLoaded", () => {
  const discordLink = document.getElementById("discord-link");

  if (discordLink && typeof SITE_CONFIG !== "undefined") {
    discordLink.href = SITE_CONFIG.discordInvite;
    discordLink.style.textDecoration = "none";
  }
});
