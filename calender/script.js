const calendarDates = document.getElementById("calendarDates");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthElement.textContent = months[month];
  yearElement.textContent = year;

  calendarDates.innerHTML = "";

  // Add blank spaces for days before the first of the month
  for (let i = 0; i < firstDay; i++) {
    const blankDate = document.createElement("div");
    blankDate.classList.add("date", "inactive-date");
    calendarDates.appendChild(blankDate);
  }

  // Populate days of the month
  for (let day = 1; day <= lastDate; day++) {
    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    dateElement.textContent = day;

    // Highlight current date
    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dateElement.classList.add("current-date");
    }

    calendarDates.appendChild(dateElement);
  }
}

// Navigate to previous month
prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

// Navigate to next month
nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();
