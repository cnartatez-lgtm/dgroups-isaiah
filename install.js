// Keep installation a user action. Android also offers installation in Chrome's menu.
const button = document.getElementById('install-app');
const help = document.getElementById('install-help');
const standalone = window.matchMedia('(display-mode: standalone)');
const android = navigator.userAgentData?.platform === 'Android' || /Android/i.test(navigator.userAgent);
let installEvent = null;
let installed = false;

function setHelp(open) {
  help.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
}

function refreshButton() {
  button.hidden = installed || standalone.matches || (!android && !installEvent);
  if (button.hidden || installEvent) help.hidden = true;
  if (installEvent) button.removeAttribute('aria-expanded');
  else button.setAttribute('aria-expanded', String(!help.hidden));
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installEvent = event;
  refreshButton();
});

button.addEventListener('click', async () => {
  if (!installEvent) {
    setHelp(help.hidden);
    return;
  }

  const prompt = installEvent;
  installEvent = null;
  button.disabled = true;
  try {
    await prompt.prompt();
    const choice = await prompt.userChoice;
    if (choice.outcome === 'accepted') installed = true;
  } catch {
    if (android) setHelp(true);
  } finally {
    button.disabled = false;
    refreshButton();
  }
});

window.addEventListener('appinstalled', () => {
  installed = true;
  installEvent = null;
  refreshButton();
});
standalone.addEventListener('change', refreshButton);
refreshButton();
