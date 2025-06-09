const container = document.getElementById("dog-container");

const breeds = [
  { name: "chow", dogWikiTitle: "Chow_Chow" },
  { name: "terrier/border", dogWikiTitle: "Border_Terrier" },
  { name: "bulldog/french", dogWikiTitle: "French_Bulldog" },
  { name: "shiba", dogWikiTitle: "Shiba_Inu" },
  { name: "retriever/golden", dogWikiTitle: "Golden_Retriever" },
  { name: "chihuahua", dogWikiTitle: "Chihuahua_(dog)" },
  { name: "boxer", dogWikiTitle: "Boxer_(dog)" },
  { name: "poodle", dogWikiTitle: "Poodle" },
];

async function getImgDog(breed) {
  const urlDogsImg = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await urlDogsImg.json();
  return data.message;
}

async function getWiki(title) {
  const urlWiki = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
  );
  const data = await urlWiki.json();
  return data.extract;
}
async function createDogContainer(breed) {
  const imageurl = await getImgDog(breed.name);
  const wikiText = await getWiki(breed.dogWikiTitle);

  const itemWiki = document.createElement("div");
  itemWiki.className = "wiki-item";

  const headerWiki = document.createElement("h1");
  headerWiki.className = "wiki-header";
  headerWiki.textContent = breed.name;

  const contentWiki = document.createElement("div");
  contentWiki.className = "wiki-content";

  const textSummary = document.createElement("p");
  textSummary.className = "wiki-text";
  textSummary.textContent = wikiText;

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const img = document.createElement("img");
  img.className = "wiki-img";
  img.src = imageurl;
  img.alt = breeds.dogBreed;

  imgContainer.appendChild(img);
  contentWiki.appendChild(textSummary);
  contentWiki.appendChild(imgContainer);
  itemWiki.appendChild(headerWiki);
  itemWiki.appendChild(contentWiki);

  container.appendChild(itemWiki);
}
async function itemSow() {
  for (const breed of breeds) {
    await createDogContainer(breed);
  }
}
itemSow();
