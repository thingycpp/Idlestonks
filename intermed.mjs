export let uname = null;
export let ores = null;

export function switchToGame(nuname) {
  uname = nuname;
  ores.redirect('/game');
}
