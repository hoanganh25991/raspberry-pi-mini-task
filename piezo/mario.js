/*
  Arduino Mario Bros Tunes
  With Piezo Buzzer and PWM
 
  Connect the positive side of the Buzzer to pin 3,
  then the negative side to a 1k ohm resistor. Connect
  the other side of the 1 k ohm resistor to
  ground(GND) pin on the Arduino.
 
  by: Dipto Pratyaksa
  last updated: 31/3/13
*/
 
/*************************************************
 * Public Constants
 *************************************************/
 
const NOTE_B0  = 31;
const NOTE_C1  = 33;
const NOTE_CS1 = 35;
const NOTE_D1  = 37;
const NOTE_DS1 = 39;
const NOTE_E1  = 41;
const NOTE_F1  = 44;
const NOTE_FS1 = 46;
const NOTE_G1  = 49;
const NOTE_GS1 = 52;
const NOTE_A1  = 55;
const NOTE_AS1 = 58;
const NOTE_B1  = 62;
const NOTE_C2  = 65;
const NOTE_CS2 = 69;
const NOTE_D2  = 73;
const NOTE_DS2 = 78;
const NOTE_E2  = 82;
const NOTE_F2  = 87;
const NOTE_FS2 = 93;
const NOTE_G2  = 98;
const NOTE_GS2 = 104;
const NOTE_A2  = 110;
const NOTE_AS2 = 117;
const NOTE_B2  = 123;
const NOTE_C3  = 131;
const NOTE_CS3 = 139;
const NOTE_D3  = 147;
const NOTE_DS3 = 156;
const NOTE_E3  = 165;
const NOTE_F3  = 175;
const NOTE_FS3 = 185;
const NOTE_G3  = 196;
const NOTE_GS3 = 208;
const NOTE_A3  = 220;
const NOTE_AS3 = 233;
const NOTE_B3  = 247;
const NOTE_C4  = 262;
const NOTE_CS4 = 277;
const NOTE_D4  = 294;
const NOTE_DS4 = 311;
const NOTE_E4  = 330;
const NOTE_F4  = 349;
const NOTE_FS4 = 370;
const NOTE_G4  = 392;
const NOTE_GS4 = 415;
const NOTE_A4  = 440;
const NOTE_AS4 = 466;
const NOTE_B4  = 494;
const NOTE_C5  = 523;
const NOTE_CS5 = 554;
const NOTE_D5  = 587;
const NOTE_DS5 = 622;
const NOTE_E5  = 659;
const NOTE_F5  = 698;
const NOTE_FS5 = 740;
const NOTE_G5  = 784;
const NOTE_GS5 = 831;
const NOTE_A5  = 880;
const NOTE_AS5 = 932;
const NOTE_B5  = 988;
const NOTE_C6  = 1047;
const NOTE_CS6 = 1109;
const NOTE_D6  = 1175;
const NOTE_DS6 = 1245;
const NOTE_E6  = 1319;
const NOTE_F6  = 1397;
const NOTE_FS6 = 1480;
const NOTE_G6  = 1568;
const NOTE_GS6 = 1661;
const NOTE_A6  = 1760;
const NOTE_AS6 = 1865;
const NOTE_B6  = 1976;
const NOTE_C7  = 2093;
const NOTE_CS7 = 2217;
const NOTE_D7  = 2349;
const NOTE_DS7 = 2489;
const NOTE_E7  = 2637;
const NOTE_F7  = 2794;
const NOTE_FS7 = 2960;
const NOTE_G7  = 3136;
const NOTE_GS7 = 3322;
const NOTE_A7  = 3520;
const NOTE_AS7 = 3729;
const NOTE_B7  = 3951;
const NOTE_C8  = 4186;
const NOTE_CS8 = 4435;
const NOTE_D8  = 4699;
const NOTE_DS8 = 4978;
 
//Mario main theme melody
var melody = [
  NOTE_E7, NOTE_E7, 0, NOTE_E7,
  0, NOTE_C7, NOTE_E7, 0,
  NOTE_G7, 0, 0,  0,
  NOTE_G6, 0, 0, 0,
 
  NOTE_C7, 0, 0, NOTE_G6,
  0, 0, NOTE_E6, 0,
  0, NOTE_A6, 0, NOTE_B6,
  0, NOTE_AS6, NOTE_A6, 0,
 
  NOTE_G6, NOTE_E7, NOTE_G7,
  NOTE_A7, 0, NOTE_F7, NOTE_G7,
  0, NOTE_E7, 0, NOTE_C7,
  NOTE_D7, NOTE_B6, 0, 0,
 
  NOTE_C7, 0, 0, NOTE_G6,
  0, 0, NOTE_E6, 0,
  0, NOTE_A6, 0, NOTE_B6,
  0, NOTE_AS6, NOTE_A6, 0,
 
  NOTE_G6, NOTE_E7, NOTE_G7,
  NOTE_A7, 0, NOTE_F7, NOTE_G7,
  0, NOTE_E7, 0, NOTE_C7,
  NOTE_D7, NOTE_B6, 0, 0
];

var briefMelody = [
  NOTE_E7, NOTE_E7, 0, NOTE_E7,
  0, NOTE_C7, NOTE_E7, 0,
  NOTE_G7, 0, 0,  0,
  NOTE_G6, 0, 0, 0,
 
  NOTE_C7, 0, 0, NOTE_G6,
  0, 0, NOTE_E6, 0,
  0, NOTE_A6, 0, NOTE_B6,
  0, NOTE_AS6, NOTE_A6, 0,

  NOTE_G6, NOTE_E7, NOTE_G7,
  NOTE_A7, 0, NOTE_F7, NOTE_G7,
  0, NOTE_E7, 0, NOTE_C7,
  NOTE_D7, NOTE_B6, 0, 0,
];



//Mario main them tempo
var tempo = [
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
 
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
 
  9, 9, 9,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
 
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
 
  9, 9, 9,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
];

//Mario main them tempo
var briefTempo = [
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
 
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,

  9, 9, 9,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
];
//Underworld melody
var underworld_melody = [
  NOTE_C4, NOTE_C5, NOTE_A3, NOTE_A4,
  NOTE_AS3, NOTE_AS4, 0,
  0,
  NOTE_C4, NOTE_C5, NOTE_A3, NOTE_A4,
  NOTE_AS3, NOTE_AS4, 0,
  0,
  NOTE_F3, NOTE_F4, NOTE_D3, NOTE_D4,
  NOTE_DS3, NOTE_DS4, 0,
  0,
  NOTE_F3, NOTE_F4, NOTE_D3, NOTE_D4,
  NOTE_DS3, NOTE_DS4, 0,
  0, NOTE_DS4, NOTE_CS4, NOTE_D4,
  NOTE_CS4, NOTE_DS4,
  NOTE_DS4, NOTE_GS3,
  NOTE_G3, NOTE_CS4,
  NOTE_C4, NOTE_FS4, NOTE_F4, NOTE_E3, NOTE_AS4, NOTE_A4,
  NOTE_GS4, NOTE_DS4, NOTE_B3,
  NOTE_AS3, NOTE_A3, NOTE_GS3,
  0, 0, 0
];
//Underwolrd tempo
var underworld_tempo = [
  12, 12, 12, 12,
  12, 12, 6,
  3,
  12, 12, 12, 12,
  12, 12, 6,
  3,
  12, 12, 12, 12,
  12, 12, 6,
  3,
  12, 12, 12, 12,
  12, 12, 6,
  6, 18, 18, 18,
  6, 6,
  6, 6,
  6, 6,
  18, 18, 18, 18, 18, 18,
  10, 10, 10,
  10, 10, 10,
  3, 3, 3
];

/* shutdown siganl */
var shutdown = [
  0, NOTE_E7, 0, NOTE_C7,
  NOTE_D7, NOTE_B6, 0, 0,
];

var shutdownTempo = [
  12, 12, 12, 12,
  12, 12, 12, 12,
];

/* build from node&howlong a beat */
var build = function(melody, temp){
  var soundArr = [];
  melody.forEach(function(node, pos){
    var duration = 1;
    var duration = 12 / tempo[pos];
    soundArr[pos] = [node, duration];
  });
  return soundArr;
};

var mario = build(melody, tempo);

var marioUnderworld = build(underworld_melody, underworld_tempo);

var marioBrief = build(briefMelody, briefTempo);

var shutdown = build(shutdown, shutdownTempo);

module.exports = {
  mario: mario,
  marioUnderworld: marioUnderworld,
  marioBrief: marioBrief,
  shutdown: shutdown
};