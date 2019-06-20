
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['timeGrid'],
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        defaultView: 'timeGrid',
        timeZone: 'Asia/Tokyo',
        defaultDate: '2019-05-01',
        validRange: {
            start: '2019-05-01',
            end: '2019-05-04'
        },
        //height: 1350,
        allDaySlot: true,
        nowIndicator: true,
        locale: 'ja',
        aspectRatio: 0.6,
        themeSystem: 'bootstrap',
        titleFormat: {
            month: 'short',
            day: 'numeric'
        },
        events: [
            {
                title: '朝食',
                start: '2019-05-01T07:00:00',
                end: '2019-05-01T08:30:00'
            },
            {
                title: '移動',
                start: '2019-05-01T09:00:00',
                end: '2019-05-01T09:20:00'
            },
            {
                title: 'TestPlace1',
                start: '2019-05-01T09:30:00',
                end: '2019-05-01T12:30:00'
            },
            {
                title: '昼食',
                start: '2019-05-01T12:00:00',
                end: '2019-05-01T12:30:00'
            },
            {
                title: '買い物',
                start: '2019-05-01T12:40:00',
                end: '2019-05-01T13:00:00'
            },
            {
                title: '移動',
                start: '2019-05-01T13:20:00',
                end: '2019-05-01T14:30:00'
            },
            {
                title: 'TestPlace2',
                start: '2019-05-01T14:40:00',
                end: '2019-05-01T16:30:00'
            }
        ]
    });

    calendar.render();
});
