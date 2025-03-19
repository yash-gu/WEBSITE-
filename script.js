document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventSelected = document.getElementById('event').value;

    const confirmationMessage = `Thank you, ${name}! You have registered for the event.`;
    
    document.getElementById('confirmation-message').textContent = confirmationMessage;
    document.getElementById('confirmation-message').classList.remove('hidden');
    this.reset();
});
