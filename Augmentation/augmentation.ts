interface Window
{
    myAnalytics: 
    {
    // Tablica przechowująca eventy
        eventLog: { event: string, data?: Record<string, any> } [];

    // Record<K, V> - wbudowany typ generyczny tworzący obiekt z określonymi kluczami (K) i wartościami (V)
        trackEvent: (event: string, data?: Record<string, any>) => void;

    // Wypisywanie statystyk:
        getStatistics: () => string;
    };
}

// window już istnieje, więc nie tworzymy new Window()
window.myAnalytics = 
{
    eventLog: [],

    trackEvent(event: string, data?: Record<string, any>)
    {
        this.eventLog.push({event, data});
        console.log(`event tracked: ${event}, data`)
    },

    getStatistics()
    {
        return `Total events tracked: ${this.eventLog.length}`;
    }
}

//Przykład
window.myAnalytics.trackEvent("page_view", { page: "home" });
window.myAnalytics.trackEvent("click", { button: "signup" });
console.log(window.myAnalytics.getStatistics());