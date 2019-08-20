const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://hvlinnowikinorsk.now.sh",
    gaTrackingId: null
  },
  header: {
    logo: "https://www.hvl.no/Static/internett/images/logo-no.svg",
    title: "Innovasjonswikipedia",
    githubUrl: "",
    helpUrl: "",
    tweetText: "",
    links: [
      { text: "English Version", link: "https://hvlinnowiki.now.sh" },
      { text: "HVL Skape", link: "https://hvlskape.now.sh" }
    ]
  },
  sidebar: {
    forcedNavOrder: ["/introduksjon"],
    links: [
      { text: "Mohnsenteret", link: "https://www.hvl.no/om/mohnsenteret/" }
    ]
  },
  siteMetadata: {
    title: "Innovasjonswikipedia | Mohnsenteret HVL",
    description: "Kompendium med innovasjonsteori",
    ogImage: null,
    docsLocation:
      "https://github.com/EmilLindfors/HVLInnoWikiNorsk/tree/master/content",
    favicon: "https://www.hvl.no/Static/internett/images/logo-no.svg"
  }
};

module.exports = config;
