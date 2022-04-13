var bashInput = document.getElementById('bash-text');
var bashOutput = document.getElementById('bash-output');

const list = ["..."] ;

document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        bashOutput.innerHTML += '<br><br>User: ' + bashInput.value;
        bashInput.value = '';
        bashOutput.innerHTML += '<br><br>Computer: ' + list;
        }
});

// FEATURES

// Create a "clear" command.

// Add an AI ?
