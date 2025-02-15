
 document.querySelector('.dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const complaintSelect1 = document.getElementById('complaint1');
const complaintSelect2 = document.getElementById('complaint2');
const complaintSelect3 = document.getElementById('complaint3');
const complaintSelect4 = document.getElementById('complaint4');
const complaintSelect5 = document.getElementById('complaint5');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');


function showNotification(message) {
    notificationText.innerText = message;  
    notification.style.display = 'flex';   

    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}

function closeNotification() {
    notification.style.display = 'none';
}

complaintSelect1.addEventListener('change', function() {
    const selectedStatus1 = complaintSelect1.value;

    if (selectedStatus1 === 'resolved') {
        showNotification('Reclamația dumneavoastră a fost soluționată!');
    } else if (selectedStatus1 === 'in_process') {
        showNotification('Reclamația dumneavoastră este în procesare!');
    }
});

complaintSelect2.addEventListener('change', function() {
    const selectedStatus2 = complaintSelect2.value;

    if (selectedStatus2 === 'resolved') {
        showNotification('Reclamația dumneavoastră a fost soluționată!');
    } else if (selectedStatus2 === 'in_process') {
        showNotification('Reclamația dumneavoastră este în procesare!');
    }
});

complaintSelect3.addEventListener('change', function() {
    const selectedStatus3 = complaintSelect3.value;

    if (selectedStatus3 === 'resolved') {
        showNotification('Reclamația dumneavoastră a fost soluționată!');
    } else if (selectedStatus3 === 'in_process') {
        showNotification('Reclamația dumneavoastră este în procesare!');
    }
});

complaintSelect4.addEventListener('change', function() {
    const selectedStatus4 = complaintSelect4.value;

    if (selectedStatus4 === 'resolved') {
        showNotification('Reclamația dumneavoastră a fost soluționată!');
    } else if (selectedStatus4 === 'in_process') {
        showNotification('Reclamația dumneavoastră este în procesare!');
    }
});

complaintSelect5.addEventListener('change', function() {
    const selectedStatus5 = complaintSelect5.value;

    if (selectedStatus5 === 'resolved') {
        showNotification('Reclamația dumneavoastră a fost soluționată!');
    } else if (selectedStatus5 === 'in_process') {
        showNotification('Reclamația dumneavoastră este în procesare!');
    }
});