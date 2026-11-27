// The Theory object (window.Theory) built from the theory modules.
import { normalizeExt, chordIntervals, tones, chordSymbol, bassMidi, buildChord } from "./chords.js?v=2026.11.27.9-d1fa72e";
import { scaleDegrees, degreeChord } from "./keys.js?v=2026.11.27.9-d1fa72e";
import { spellRoot, noteName, spellInterval, chordToneNames, NOTE_NAMES } from "./spelling.js?v=2026.11.27.9-d1fa72e";
import { VOICINGS, voicedMidis, pitchClasses } from "./voicing.js?v=2026.11.27.9-d1fa72e";

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
