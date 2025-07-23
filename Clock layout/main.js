dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

document.addEventListener("DOMContentLoaded", function() {
    MicroModal.init();
    let Time = document.getElementById("Time");
    let Date = document.getElementById("Date");
    let timezoneSelect = document.getElementById("ZoneChange");
    let saveTimezoneButton = document.getElementById("saveTimezone");

    let currentTimezone = 'UTC';

    Time.innerHTML = dayjs().format('hh:mm:ss');
    Date.innerHTML = dayjs().format('dddd, DD MMMM, YYYY');    

    function updateTimezone(currentTimezone){
        const now = dayjs().tz(currentTimezone);
        Time.innerHTML = now.format('hh:mm:ss').toLocaleString('en-IN',currentTimezone);
        Date.innerHTML = now.format('dddd, DD MMMM, YYYY').toLocaleString('en-IN',currentTimezone);  
    }

    

    saveTimezoneButton.addEventListener('click', () => {
        currentTimezone = timezoneSelect.value;
        updateTimezone(currentTimezone);
        MicroModal.close('modal-1');
    });
});

// 
    // 
    // function updateTime(timezone){
    //     /*if(timezone == 'UTC'){
    //         Time.innerHTML = dayjs().format('hh:mm:ss).toLocaleString();
    //     };*/
    // }

    // document.getElementById("Submit").addEventListener("click", function(){
        
    // });
    /*const updateClock = () => {
        const now = new Date();
        const options = { timeZone: currentTimezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const time = now.toLocaleTimeString('en-US', options);
        const date = now.toLocaleDateString('en-US', options);
        clockElement.textContent = time;
        dateElement.textContent = date;
    };

    setInterval(updateClock, 1000);*/