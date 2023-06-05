window.queryVersion = function()
{
    fetch('http://localhost:8080/JXbl-1.0-SNAPSHOT/api/info')
        .then(response =>
        {
            if (response.ok)
                return response.text();
            else
                throw new Error('Failed to fetch version');
        })
        .then(data =>
        {
            document.getElementById('versionLabel').textContent = 'Status: ' + data;
        })
        .catch(error =>
        {
            document.getElementById('versionLabel').textContent = error.message;
        });
};
