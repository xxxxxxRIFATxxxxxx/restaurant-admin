// For Chart
new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2008', value: 100 },
        { year: '2009', value: 50 },
        { year: '2010', value: 200 },
        { year: '2011', value: 100 },
        { year: '2012', value: 300 },
        { year: '2013', value: 0 },
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value'],

    lineColors: ["rgba(243, 171, 2, 1)"]
});