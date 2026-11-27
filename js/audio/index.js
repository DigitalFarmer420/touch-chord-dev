// Builds the one ChordAudio api (window.ChordAudio) and its Band.
// Load every audio part first so all ChordAudio/Band prototype methods exist before the api is built.
import "./engine.js?v=2026.11.27.18-39ade9c";
import "./synths.js?v=2026.11.27.18-39ade9c";
import "./effects.js?v=2026.11.27.18-39ade9c";
import "./bass.js?v=2026.11.27.18-39ade9c";
import "./band.js?v=2026.11.27.18-39ade9c";
import { Band } from "./band.js?v=2026.11.27.18-39ade9c";
import { ChordAudio } from "./engine.js?v=2026.11.27.18-39ade9c";

var api = new ChordAudio();
export { api };
api.band = new Band(api);   // v75: off (level 0) until the Config Band slider is raised
if (typeof window !== "undefined") { window.ChordAudio = api; window.__tcAudioWake = function () { api.wake(); }; }
