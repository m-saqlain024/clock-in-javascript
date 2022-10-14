
setInterval(() => {
    d = new Date()
    ghrs = d.getHours()
    gmint = d.getMinutes()
    gsec = d.getSeconds()


    
    hrota = 30*ghrs + gmint/2;
    mrota = 6*gmint;
    srota = 6*gsec;

    hours.style.transform = `rotate(${hrota}deg)`;
    minutes.style.transform = `rotate(${mrota}deg)`;
    seconds.style.transform = `rotate(${srota}deg)`;
}, 1000);