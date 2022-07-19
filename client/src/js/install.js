const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    butInstall.dataset.event = event;
    // Update the install button to show a different message
    butInstall.innerHTML = 'Install';
    butInstall.classList.add('install');
    butInstall.classList.remove('hide');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Get the event that was stashed in the `butInstall` element
    const event = butInstall.dataset.event;
    // Trigger the event
    event.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await event.userChoice;
    // Reset the button to its default state
    butInstall.innerHTML = 'Install';
    butInstall.classList.remove('install');
    butInstall.classList.add('hide');
    // Remove the event listener so that the prompt won't show again
    butInstall.removeEventListener('click', installPWA);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Installed PWA');
});
