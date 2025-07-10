document.getElementById('patient-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (name && dob) {
        const patient = { name, dob };
        let patients = JSON.parse(localStorage.getItem('patients')) || [];
        patients.push(patient);
        localStorage.setItem('patients', JSON.stringify(patients));
        updateList();
        this.reset();
    }
});

function updateList() {
    const list = document.getElementById('patient-list');
    list.innerHTML = '';
    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    patients.forEach((patient) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${patient.name} - ${patient.dob}`;
        list.appendChild(li);
    });
}

window.onload = updateList;
