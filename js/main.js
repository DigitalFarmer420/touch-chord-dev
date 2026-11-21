// Entry point. Loads every module, then runs the boot steps in the v112.3 order.
import { APP_VERSION } from "./version.js?v=112.17-c2d19ce";
import { accSym } from "./theory/spelling.js?v=112.17-c2d19ce";
import "./version.js?v=112.17-c2d19ce";
import "./theory/chords.js?v=112.17-c2d19ce";
import "./theory/index.js?v=112.17-c2d19ce";
import "./theory/keys.js?v=112.17-c2d19ce";
import "./theory/names.js?v=112.17-c2d19ce";
import "./theory/quality.js?v=112.17-c2d19ce";
import "./theory/spelling.js?v=112.17-c2d19ce";
import "./theory/voicing.js?v=112.17-c2d19ce";
import "./audio/band.js?v=112.17-c2d19ce";
import "./audio/bass.js?v=112.17-c2d19ce";
import "./audio/effects.js?v=112.17-c2d19ce";
import "./audio/engine.js?v=112.17-c2d19ce";
import "./audio/index.js?v=112.17-c2d19ce";
import "./audio/synths.js?v=112.17-c2d19ce";
import "./keys.js?v=112.17-c2d19ce";
import "./kids.js?v=112.17-c2d19ce";
import "./loop.js?v=112.17-c2d19ce";
import "./songs/kids-songs.js?v=112.17-c2d19ce";
import "./songs/magic.js?v=112.17-c2d19ce";
import "./styles.js?v=112.17-c2d19ce";
import "./ui/gear.js?v=112.17-c2d19ce";
import "./ui/lyrics.js?v=112.17-c2d19ce";
import "./ui/palette.js?v=112.17-c2d19ce";
import { paintProg, placeProg } from "./ui/progbar.js?v=112.17-c2d19ce";
import "./ui/pulse.js?v=112.17-c2d19ce";
import { paintSongBar } from "./ui/songbar.js?v=112.17-c2d19ce";
import "./ui/upload-dialog.js?v=112.17-c2d19ce";
import "./ui/wire.js?v=112.17-c2d19ce";
import * as state from "./state.js?v=112.17-c2d19ce";
import * as audioUnlock from "./audio/unlock.js?v=112.17-c2d19ce";
import * as uiPads from "./ui/pads.js?v=112.17-c2d19ce";
import * as uiSustain from "./ui/sustain.js?v=112.17-c2d19ce";
import * as uiKeyboard from "./ui/keyboard.js?v=112.17-c2d19ce";
import * as uiStrip from "./ui/strip.js?v=112.17-c2d19ce";
import * as songsPresets from "./songs/presets.js?v=112.17-c2d19ce";
import * as songsPlayback from "./songs/playback.js?v=112.17-c2d19ce";
import * as uiNext from "./ui/next.js?v=112.17-c2d19ce";
import * as songsPlayalong from "./songs/playalong.js?v=112.17-c2d19ce";
import * as uiHints from "./ui/hints.js?v=112.17-c2d19ce";
import * as uiTour from "./ui/tour.js?v=112.17-c2d19ce";
import * as songsUpload from "./songs/upload.js?v=112.17-c2d19ce";
import * as songsLibrary from "./songs/library.js?v=112.17-c2d19ce";
import * as songsSong from "./songs/song.js?v=112.17-c2d19ce";
import * as uiNowbox from "./ui/nowbox.js?v=112.17-c2d19ce";
import * as uiKeychip from "./ui/keychip.js?v=112.17-c2d19ce";
import * as settings from "./settings.js?v=112.17-c2d19ce";
import * as uiLayout from "./ui/layout.js?v=112.17-c2d19ce";
import * as kidsView from "./kids/view.js?v=112.17-c2d19ce";
import * as expertUi from "./expert/ui.js?v=112.17-c2d19ce";   // Expert redesign (html.expert screen set)
import * as offline from "./offline.js?v=112.17-c2d19ce";
import { bootSimpleSrc, setSimpleSrcAfter } from "./ui/simplesrc.js?v=112.17-c2d19ce";
// Entry point: loads every module, runs the boot steps in the v112.3 order, final boot (saved settings, first song, tour), deliberate globals, test hooks with ?test=1.
import { wireKidKey } from "./kids.js?v=112.17-c2d19ce";
import { applySettings } from "./settings.js?v=112.17-c2d19ce";
import { PROG_TEST } from "./songs/playback.js?v=112.17-c2d19ce";
import { factoryDefaults, loadSettings, collectSettings, shared } from "./state.js?v=112.17-c2d19ce";
import { wireConfig } from "./ui/gear.js?v=112.17-c2d19ce";
import { wireKeyPick } from "./ui/keychip.js?v=112.17-c2d19ce";
import { wireLayoutUi } from "./ui/layout.js?v=112.17-c2d19ce";
import { updateSymbol } from "./ui/nowbox.js?v=112.17-c2d19ce";
import { renderPads } from "./ui/pads.js?v=112.17-c2d19ce";
import { wireProg } from "./ui/progbar.js?v=112.17-c2d19ce";
import { tourDone, tourStart } from "./ui/tour.js?v=112.17-c2d19ce";
import { wireUpload } from "./ui/upload-dialog.js?v=112.17-c2d19ce";
import { wire } from "./ui/wire.js?v=112.17-c2d19ce";

var startBanner;

// Boot step (runs once, in the original v112.3 order, from main.js)
export function boot() {
startBanner = document.getElementById("unlock");
  if (startBanner) startBanner.textContent = "Tap anywhere to enable sound";

  try {
    wire();
    wireConfig();
    wireKeyPick();
    wireKidKey();
    wireProg();
    wireUpload();
    wireLayoutUi();
    // v52: fade the style row's right edge while more styles are scrolled out of view.
    (function () {
      var row = document.getElementById("styles");
      function fade() { row.classList.toggle("more", row.scrollWidth - row.clientWidth - row.scrollLeft > 2); }
      // v53: full mode, phone landscape: step the buttons tighter until all of them show.
      function fitStyles() {
        var root = document.documentElement;
        row.classList.remove("fit-1", "fit-2", "fit-3", "fit-4");
        if (root.classList.contains("lay-phone-land")) {
          var over = function () {
            var last = row.lastElementChild.getBoundingClientRect(), rr = row.getBoundingClientRect();
            return row.scrollWidth > row.clientWidth || last.right > rr.right - 1;
          };
          for (var i = 1; i <= 4 && over(); i++) {
            row.classList.remove("fit-" + (i - 1));
            row.classList.add("fit-" + i);
          }
        }
        fade();
      }
      row.addEventListener("scroll", fade, { passive: true });
      window.addEventListener("resize", fitStyles);
      if (window.MutationObserver) new MutationObserver(fitStyles).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      setTimeout(fitStyles, 0); setTimeout(fitStyles, 400);
    })();
    var initial;
    try { initial = loadSettings(); } catch (err) { initial = factoryDefaults(); }
    try { applySettings(initial); } catch (err2) { applySettings(factoryDefaults()); }
    renderPads();
    updateSymbol();
    shared.lastSaved = JSON.stringify(collectSettings());
    shared.persistReady = true;
    kidsView.boot();   // Kids redesign: the Kids view (Simple) opens over the full app; Expert = the full app as before
    // v3.2 test.5: the first-launch tour runs in whatever mode a fresh install opens in (Kids, so the Kids tour). It used to
    // require expert !== false, so a real first visit (the Kids view, expert false) never got it. Still once: only with no
    // saved settings (shared.firstFresh, so existing users never get it) and no saved "done" (touchChord.tour.v1).
    if (shared.firstFresh && !tourDone() && (!PROG_TEST || /[?&]tour=1(&|$)/.test(location.search))) setTimeout(function () { tourStart(false); }, 700);   // tests: only with tour=1
  } finally {
    document.documentElement.classList.remove("tc-boot");
  }
}

// Deliberate globals kept from v112.3 (console and tests). Theory, ChordAudio and __tcAudioWake are set in theory/index.js and audio/index.js.
window.APP_VERSION = APP_VERSION;
window.accSym = accSym;

// Test hooks: only with ?test=1 (window.__* helpers used by the Playwright suites).
if (/[?&]test=1(&|$)/.test(location.search)) import("./test-hooks.js?v=112.17-c2d19ce").then(function (m) { m.install(); });

state.boot();
audioUnlock.boot();
uiPads.boot1();
uiSustain.boot();
uiPads.boot2();
uiKeyboard.boot();
uiStrip.boot1();
songsPresets.boot();
songsPlayback.boot();
uiNext.boot();
songsPlayalong.boot();
uiHints.boot();
uiTour.boot();
songsUpload.boot();
songsLibrary.boot();
songsSong.boot();
uiStrip.boot2();
uiNowbox.boot();
uiKeychip.boot();
settings.boot();
uiLayout.boot();
boot();
expertUi.boot();   // Expert redesign: after the app boot (saved settings applied)
setSimpleSrcAfter(function () {
  paintSongBar();
  paintProg();
  placeProg();
  uiStrip.fitStrip();
  songsPlayback.placeBadges();
  updateSymbol();
});
bootSimpleSrc();
offline.boot();
