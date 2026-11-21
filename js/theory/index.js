// The Theory object (window.Theory) built from the theory modules.
import { normalizeExt, chordIntervals, tones, chordSymbol, bassMidi, buildChord } from "./chords.js?v=112.17-c2d19ce";
import { scaleDegrees, degreeChord } from "./keys.js?v=112.17-c2d19ce";
import { spellRoot, noteName, spellInterval, chordToneNames, NOTE_NAMES } from "./spelling.js?v=112.17-c2d19ce";
import { VOICINGS, voicedMidis, pitchClasses } from "./voicing.js?v=112.17-c2d19ce";

var Theory = {
  VOICINGS: VOICINGS,
  NOTE_NAMES: NOTE_NAMES,
  spellRoot: spellRoot,
  noteName: noteName,
  chordIntervals: chordIntervals,
  chordToneNames: chordToneNames,
  tones: tones,
  spellInterval: spellInterval,
  voicedMidis: voicedMidis,
  pitchClasses: pitchClasses,
  chordSymbol: chordSymbol,
  scaleDegrees: scaleDegrees,
  degreeChord: degreeChord,
  bassMidi: bassMidi,
  buildChord: buildChord,
  normalizeExt: normalizeExt
};
export { Theory };
if (typeof window !== "undefined") window.Theory = Theory;
