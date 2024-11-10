// Parse the museum data using PapaParse
Papa.parse(museumData, {
    header: true,
    complete: function(results) {
        const museums = results.data;
        const museumList = document.querySelector('.museum-list');

        museums.forEach(museum => {
            const museumEntry = document.createElement('div');
            museumEntry.classList.add('museum-entry');
            museumEntry.innerHTML = `
                <h2>${museum.NAME}</h2>
                <p>Telephone: ${museum.TEL}</p>
                <p>Website: <a href="${museum.URL}">${museum.URL}</a></p>
                <p>Address: ${museum.ADRESS1}, ${museum.CITY}, ${museum.ZIP}</p>
            `;
            museumList.appendChild(museumEntry);
        });
    }
});
