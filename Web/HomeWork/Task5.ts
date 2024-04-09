
interface WeatherData {
    dt: number;
}
fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=59ebaaf8a2b2cf1dc3acae7de6023d84")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Request failed. Returned status of ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const currentData = data.list.find((item: WeatherData) => {
            const itemDate = new Date(item.dt * 1000).toISOString().split('T')[0]; // Convert item's timestamp to date format
            return itemDate === currentDate;
        });
        console.log(currentData);
    })
    .catch((error) => {
        console.error(error);
    });
