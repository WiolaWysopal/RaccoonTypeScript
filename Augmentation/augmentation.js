// window już istnieje, więc nie tworzymy new Window()
window.myAnalytics =
    {
        eventLog: [],
        trackEvent: function (event, data) {
            this.eventLog.push({ event: event, data: data });
            console.log("event tracked: ".concat(event, ", data"));
        },
        getStatistics: function () {
            return "Total events tracked: ".concat(this.eventLog.length);
        }
    };
//Przykład
window.myAnalytics.trackEvent("page_view", { page: "home" });
window.myAnalytics.trackEvent("click", { button: "signup" });
console.log(window.myAnalytics.getStatistics());
