const cachefileItems = require("./cachefileItems.json");
const fs = require("fs");
const fetch = require("node-fetch");

/** Given a Metaplex cachefile, fetches all collection data  */
const fetchCollection = async () => {
  const offchainContentPromises = cachefileItems.map(async (item) => {
    const { link } = item;

    try {
      const content = await (await fetch(link)).json();

      return content;
    } catch (e) {
      console.log(e);
      return null;
    }
  });

  const metadatas = await Promise.all(offchainContentPromises);
  console.log(metadatas);
  fs.writeFileSync("all.json", JSON.stringify(metadatas));
};

fetchCollection();
