window.queryVersion = function () {
    fetch('http://localhost:8080/JXbl-1.0-SNAPSHOT/api/info')
        .then(function (response) {
        if (response.ok) {
            return response.text();
        }
        else {
            throw new Error('Failed to fetch version');
        }
    })
        .then(function (data) {
        document.getElementById('versionLabel').textContent = 'Version: ' + data;
    })
        .catch(function (error) {
        document.getElementById('versionLabel').textContent = error.message;
    });
};
