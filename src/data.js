export default [
  // array of subway lines
  {
    id: '3',
    name: 'Сырецко-Печерская',
    color: 'green',
    stations: [
      {
        id: '310',
        name: 'Сырец',
        'start-end': '05:55—00:00',
        timetable: {
          forward: ['22:00', '22:10', '22:20', '22:30'],
          back: ['22:08', '22:18', '22:26', '22:37'],
        },
      },
      {
        id: '327',
        name: 'Красный хутор',
        'start-end': '05:52—23:57',
        timetable: {
          forward: ['22:00', '22:10', '22:20', '22:30'],
          back: ['22:08', '22:18', '22:26', '22:37'],
        },
      },
    ],
  },
]
