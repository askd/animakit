/* eslint global-require: "off" */

require('static/favicon/favicon.svg');
require('static/favicon/favicon.png');

const images = {
  good: require('static/good.jpg'),
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
