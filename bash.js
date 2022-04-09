var bashInput = document.getElementById('bash-text');
var bashOutput = document.getElementById('bash-output')

document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        bashOutput.innerHTML = bashInput.value;
        }
});
