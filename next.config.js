/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MARVEL_URL:
      "https://gateway.marvel.com/v1/public/characters?nameStartsWith=",
    MARVEL_URL_END:
      "&ts=1&apikey=3419834767a7456bd3d268e60add5925&hash=87250b5a5ef521323dbd02f13ff2622b",
    ALL_HERO:
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3419834767a7456bd3d268e60add5925&hash=87250b5a5ef521323dbd02f13ff2622b",
    MARVEL_DETAIL_HERO: "https://gateway.marvel.com/v1/public/characters/",
    MARVEL_DETAIL_HERO_END:
      "?ts=1&apikey=3419834767a7456bd3d268e60add5925&hash=87250b5a5ef521323dbd02f13ff2622b",
  },
  images: {
    domains: ["i.annihil.us"],
  },
};

module.exports = nextConfig;
