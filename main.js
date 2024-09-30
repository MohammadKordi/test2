function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

let eventId = 10; // تعديل بناءً على عدد الأحداث الحالية

// فتح نافذة إضافة الحدث
function openAddEventModal() {
    document.getElementById("addEventModal").style.display = "block";
}

// إغلاق نافذة إضافة الحدث
function closeAddEventModal() {
    document.getElementById("addEventModal").style.display = "none";
}

// إضافة حدث جديد إلى الجدول
function addEvent() {
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventLocation = document.getElementById("eventLocation").value;

    if (eventName && eventDate && eventLocation) {
        const table = document.getElementById("eventTable").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        // إضافة البيانات إلى الصفوف الجديدة
        cell1.innerHTML = eventId++;
        cell2.innerHTML = eventName;
        cell3.innerHTML = eventDate;
        cell4.innerHTML = eventLocation;
        cell5.innerHTML = `
            <button onclick="editEvent(this)">Edit</button>
            <button onclick="deleteEvent(this)">Delete</button>
        `;

        // إعادة تعيين النموذج بعد الإضافة
        document.getElementById("addEventForm").reset();
        closeAddEventModal(); // إغلاق النافذة بعد إضافة الحدث
    } else {
        alert("Please fill out all fields.");
    }
}

// حذف الحدث
function deleteEvent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// تعديل الحدث (كمثال بسيط هنا، يمكنك تطويره لتحديث بيانات الحدث)
function editEvent(button) {
    const row = button.parentNode.parentNode;
    const eventName = row.cells[1].innerHTML;
    const eventDate = row.cells[2].innerHTML;
    const eventLocation = row.cells[3].innerHTML;

    document.getElementById("eventName").value = eventName;
    document.getElementById("eventDate").value = eventDate;
    document.getElementById("eventLocation").value = eventLocation;

    // حذف الصف القديم
    row.parentNode.removeChild(row);

    // إعادة فتح النافذة مع البيانات المعدلة
    openAddEventModal();
}