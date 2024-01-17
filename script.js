let currentlyVisibleTable = null;

function showCharacterTable(race) {
    hideCurrentTable();
    currentlyVisibleTable = document.getElementById(`${race.toLowerCase()}Table`);
    currentlyVisibleTable.style.display = 'block';
}

function showClassTable(className) {
    hideCurrentTable();
    currentlyVisibleTable = document.getElementById(`${className.toLowerCase()}Table`);
    currentlyVisibleTable.style.display = 'block';
}

function showBackgroundTable(background) {
    hideCurrentTable();
    currentlyVisibleTable = document.getElementById(`${background.toLowerCase()}Table`);
    currentlyVisibleTable.style.display = 'block';
}

function hideCurrentTable() {
    if (currentlyVisibleTable) {
        currentlyVisibleTable.style.display = 'none';
    }
}
