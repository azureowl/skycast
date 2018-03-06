window.addEventListener('load', () => {
    let skycons = new Skycons({"color": "#333333"});
    let icon = document.querySelector("#icon1").className;
    let skyconType = (icon) => {
        if (icon === 'rain') {
            return Skycons.RAIN;
        } 
        else if (icon === 'snow') {
            return Skycons.SNOW;
        }
        else if (icon === 'sleet') {
            return Skycons.SLEET;
        }
        else if (icon === 'hail') {
            return Skycons.SLEET;
        }
        else if (icon === 'wind') {
            return Skycons.WIND;
        }
        else if (icon === 'fog') {
            return Skycons.FOG;
        }
        else if (icon === 'cloudy') {
            return Skycons.CLOUDY;
        }
        else if (icon === 'partly-cloudy-day') {
            return Skycons.PARTLY_CLOUDY_DAY;
        }
        else if (icon === 'partly-cloudy-night') {
            return Skycons.PARTLY_CLOUDY_NIGHT;
        }
        else if (icon === 'clear-day') {
            return Skycons.CLEAR_DAY;
        }
        else if (icon === 'clear-night') {
            return Skycons.CLEAR_NIGHT;
        }
        return Skycons.CLOUDY;
    };
    
    let iconType = skyconType(icon);
    skycons.set("icon1", iconType);
    skycons.play();
    
  


    // var searchForm = document.getElementById('searchForm');

    // searchForm.addEventListener('keyup', (e) => {
    //     var query = document.getElementById('address').value;
        
    // });
});


    