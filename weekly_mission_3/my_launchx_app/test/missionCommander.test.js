const MissionCommander = require('./../app/missionCommander');

const myMissionCommander = new MissionCommander("Woopa")
/*describe("Esto es una suit de pruebas", ()=>{
    test('Caso de prueba 1:',()=>{*/
describe("Unit Tests for Mission Commander Class", () => {
test('1) Create a mission commander objet', () => {
      //  const result = 1+2
      //  expect(result).toBe(3);
      expect(myMissionCommander.name).toBe("Woopa");
    });
})

//const myMissionCommander = new MissionCommander("Woopa")