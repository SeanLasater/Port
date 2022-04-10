var bashInput = document.getElementById('bash-text');
var bashOutput = document.getElementById('bash-output');
var list = "cats";

document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        bashOutput.innerHTML += '<br>' + '~ ' + bashInput.value;
        bashInput.value = '';
        bashOutput.innerHTML += '<br>' + list;
        }
});
