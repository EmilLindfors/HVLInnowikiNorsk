const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://learn.hasura.io",
    gaTrackingId: null
  },
  header: {
    logo: "https://www.hvl.no/Static/internett/images/logo-no.svg",
    title: "Innovation Wikipedia",
    githubUrl: "",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "HVL Skape", link: "https://hvlskape.now.sh" }]
  },
  sidebar: {
    forcedNavOrder: ["/introduction"],
    links: [
      { text: "Mohnsenteret", link: "https://www.hvl.no/om/mohnsenteret/" }
    ]
  },
  siteMetadata: {
    title: "Innovation wikipedia | Mohnsenteret HVL",
    description: "Kompendium med innovasjonsteori",
    ogImage: null,
    docsLocation:
      "https://github.com/EmilLindfors/HVLInnoWiki/tree/master/content",
    favicon: "https://www.hvl.no/Static/internett/images/logo-no.svg"
  }
};

module.exports = config;
