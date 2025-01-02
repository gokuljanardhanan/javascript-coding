const trafficLight = (currentLight) => {
  const light = ["red", "green", "yellow"];
  const index = light.indexOf(currentLight);
  return light[(index + 1) % 3];
};

var trafficLightWithDuration = function () {
  const arr = [
    { color: "green", time: 5000 },
    { color: "orange", time: 2000 },
    { color: "red", time: 3000 },
  ];
  let currIndex = 0;
  const duration = 10000;
  const startTime = Date.now();

  const getColor = () => {
    const { color, time } = arr[currIndex];
    console.log(color);
    setTimeout(() => {
      if (Date.now() - startTime < duration) {
        currIndex = (currIndex + 1) % arr.length;
        getColor();
      } else {
        console.log("completed");
      }
    }, time);
  };
  getColor();
};

console.log(trafficLight());

const trafficLights = [
  { color: "red", duration: 3000 }, // 3 seconds
  { color: "green", duration: 5000 }, // 5 seconds
  { color: "yellow", duration: 2000 }, // 2 seconds
];

let currentIndex = 0;

const displayTrafficLight = () => {
  const currentLight = trafficLights[currentIndex];
  console.log(`The light is now ${currentLight.color}`);

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % trafficLights.length;
    displayTrafficLight();
  }, currentLight.duration);
};

// Start the traffic light sequence
displayTrafficLight();
