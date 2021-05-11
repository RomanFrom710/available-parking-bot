const NodeWebcam = require('node-webcam');

const camera = NodeWebcam.create({
  width: 1280,
  height: 1024,
  output: 'jpeg',
  callbackReturn: 'buffer',
  delay: 2,
})

module.exports = function takeSnapshot() {
  return new Promise((resolve, reject) => {
    camera.capture('test', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
};
