function prayerTimes(latitude, longitude) {
    fetch('http://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=4')
        .then(response => response.json())
        .then(function (response) {
            let date = new Date();
            let today = date.getDate() - 1;
            let data = response.data[0].timings;

            let app = document.getElementById('app');
            let table = document.createElement('table');
            let tableTbody = document.createElement('tbody');
            for (i in data) {
                let row = table.insertRow();
                let name = row.insertCell(0);
                let time = row.insertCell(1);
                name.innerHTML = i;
                time.innerHTML = data[i];
                tableTbody.appendChild(row);
            }
            table.appendChild(tableTbody);
            app.appendChild(table);
        });
}

function success(position) {
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
    prayerTimes('-6.200000', '106.816666');
}


function anuLocation() {
    if (!navigator.geolocation) {
        alert("GEOLOKASI TIDAK DI DUKUNG DI DALAM BROWSER ANDA, SILAHKAN GUNAKAN BROWSER LAIN");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index() {
    let app = document.getElementById('app');
    anuLocation();
}
index();