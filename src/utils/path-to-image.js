/* eslint global-require: "off" */

const images = {
  favicon: require('static/favicon.png'),
  good:    require('static/good.jpg'),
};

['mercury', 'venus', 'earth', 'mars'].forEach(name => {
  images[name] = require(`static/${name}.jpg`);
});

for (let i = 0; i < 11; i += 1) {
  const name = (i < 10) ? `0${i}` : i;
  images[`nasa${name}`] = require(`static/nasa/${name}.jpg`);
}

export default function pathToImage(name) {
  return images[name];
}
