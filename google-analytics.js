// Replace with your own Tracking ID
const trackingId = 'G-1F5KRT';

gapi.analytics.ready(function() {
    gapi.analytics.auth.authorize({
        container: 'embed-api-auth-container',
        clientid: '106276925203293236264'
    });

    var dataChart1 = new gapi.analytics.googleCharts.DataChart({
        query: {
            ids: 'ga:' + trackingId,
            metrics: 'ga:pageviews',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
        },
        chart: {
            container: 'total-page-views',
            type: 'LINE',
        },
    });

    var dataChart2 = new gapi.analytics.googleCharts.DataChart({
        query: {
            ids: 'ga:' + trackingId,
            metrics: 'ga:uniquePageviews',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
        },
        chart: {
            container: 'unique-page-views',
            type: 'LINE',
        },
    });

    dataChart1.execute();
    dataChart2.execute();
});
