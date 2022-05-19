const MissionCommander = require('./app/missionCommander')
const carlo = new MissionCommander("Carlo")
const fer = new MissionCommander("Fernanda")
const romar = new MissionCommander("Rodrigo")

console.log("Los nombres de los Missions Commanders son: "+carlo.name+","+fer.name+","+romar.name)