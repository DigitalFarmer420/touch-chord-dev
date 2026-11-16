// Builds the one ChordAudio api (window.ChordAudio) and its Band.
// Load every audio part first so all ChordAudio/Band prototype methods exist before the api is built.
import "./engine.js?v=112.15-a4525ed";
import "./synths.js?v=112.15-a4525ed";
import "./effects.js?v=112.15-a4525ed";
import "./bass.js?v=112.15-a4525ed";
import "./band.js?v=112.15-a4525ed";
import { Band } from "./band.js?v=112.15-a4525ed";
import { ChordAudio } from "./engine.js?v=112.15-a4525ed";

var api = new ChordAudio();
export { api };
api.band = new Band(api);   // v75: off (level 0) until the Config Band slider is raised
if (typeof window !== "undefined") { window.ChordAudio = api; window.__tcAudioWake = function () { api.wake(); }; }
