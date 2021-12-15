document.addEventListener('DOMContentLoaded', function() {
  
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridDay',
      initialDate: '2021-11-07',
      locale: 'fr',
      events: [
        {
          title: 'Birthday Party',
          start: '2021-11-13T07:00:00'
        },

      ]
    });
  
    calendar.render();
  });