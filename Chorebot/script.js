let doorImage1 = document.querySelector("#door1");
let doorImage2 = document.querySelector("#door2");
let doorImage3 = document.querySelector("#door3");

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1){
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;

    } else if (choreDoor === 2) {
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
    }
    return choreDoor;
}

 randomChoreDoorGenerator();

document.addEventListener('DOMContentLoaded', () => {
  doorImage1.addEventListener('click', () => {
    if (!isClicked(doorImage1)){
      doorImage1.src = openDoor1;
      playDoor();
    }
  })
  doorImage2.addEventListener('click', () => {
    if (!isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor();
    }
  })
  doorImage3.addEventListener('click', () => {
    if (!isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    isClicked(doorImage3);
    playDoor();
    }
  })
});

const isClicked = (door) => {

if (door.src === closedDoorPath) {
  return false
} else{ return true}

}

const playDoor = () => {

  numClosedDoors--
  if (numClosedDoors === 0){

  /*   gameOver(); */
    console.log('game over')
  } else{

  }
}
