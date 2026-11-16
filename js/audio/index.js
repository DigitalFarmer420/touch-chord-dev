// Builds the one ChordAudio api (window.ChordAudio) and its Band.
// Load every audio part first so all ChordAudio/Band prototype methods exist before the api is built.
import "./engine.js?v=112.15-d789f3b";
import "./synths.js?v=112.15-d789f3b";
import "./effects.js?v=112.15-d789f3b";
import "./bass.js?v=112.15-d789f3b";
import "./band.js?v=112.15-d789f3b";
import { Band } from "./band.js?v=112.15-d789f3b";
import { ChordAudio } from "./engine.js?v=112.15-d789f3b";

var api = new ChordAudio();
export { api };
api.band = new Band(api);   // v75: off (level 0) until the Config Band slider is raised
if (typeof window !== "undefined") { window.ChordAudio = api; window.__tcAudioWake = function () { api.wake(); }; }
