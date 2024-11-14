setInterval(() => {
    let date = new Date;

    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();

    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    document.getElementById('hour-hand').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${srotation}deg)`;
}, 1000);