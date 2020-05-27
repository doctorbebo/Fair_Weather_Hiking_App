
export default {
    getBestDay: function(day){
        let firstBestTemp = [];
        let secondBestTemp = [];
        let thirdBestTemp = [];
        let fourthBestTemp = [];
        let tooHot = [];
        let tooCold = [];
        
        for(let i = 0; i < day.length; i++){
            let x = day[i].main.feels_like

            switch(true){
                case x >= 65 && x <= 75:
                    firstBestTemp.push(day[i]);
                    
                    break;
                case (x >= 55 && x < 65 ):
                case (x > 75 && x <= 85):
                    secondBestTemp.push(day[i]);
                    
                    break;
                case (x >= 45 && x < 55):
                case (x > 85 && x <= 95):
                    thirdBestTemp.push(day[i]);
                    
                    break;
                case (x >= 30 && x < 45 ):
                    fourthBestTemp.push(day[i]);
                    
                    break;
                case(x < 30):
                    tooCold.push(day[i]);
                    
                    break;
                case(x > 95):
                    tooHot.push(day[i])
                    
                    break;
                default:
                    break;
            }
        }

        if(firstBestTemp.length !== 0){
            return firstBestTemp;
        }
        else if(secondBestTemp.length !== 0){
            return secondBestTemp;
        }
        else if(thirdBestTemp.length !== 0){
            return thirdBestTemp;
        }
        else if(fourthBestTemp.length !== 0){
            return fourthBestTemp;
        }
        else if(tooCold.length !== 0){
            return tooCold;
        }
        else if(tooHot.length !== 0){
            return tooHot;
        };
    },
        
    bestWeather: function(day){
        // console.log(day)
        let rain = [];
        let clear = [];
        let clouds = [];
        let drizzle = [];
        let atm = [];
        let thunderstorms = [];
        let snow = [];
        let hazardous = [];

        for(let i = 0; i < day.length; i++){
            let x = day[i].weather[0].id
            // console.log(x)
            switch(true){

                case x >= 800:
                    clouds.push(day[i]);
                    break;
                case (x >= 200 && x < 300 ):
                    thunderstorms.push(day[i]);
                    break;
                case (x >= 300 && x < 400 ):
                    drizzle.push(day[i]);
                    break;

                case (x >= 600 && x < 700 ):
                    snow.push(day[i]);
                    break;
                case (x >= 500 && x < 600 ):
                    rain.push(day[i]);
                    break;
                case  x = 701:
                case x = 721:
                case x = 741:
                case x = 771:
                    atm.push(day[i]);
                    break;
                case x = 711:
                case x = 731: 
                case x = 751:
                case x = 761:
                case x = 762:
                case x =  711:
                    hazardous.push(day[i]);
                    break;

                default:
                    break;

            }
            // console.log(clear)
            // console.log(clouds)
            // console.log(atm)
            // console.log(drizzle)
            // console.log(rain)
            // console.log(snow)
            // console.log(thunderstorms)
            // console.log(hazardous)
        }




        if(clear.length !== 0){
            return clear;
        }
        else if(clouds.length !== 0){
            return clouds;
        }
        else if(atm.length !== 0){
            return atm;
        }
        else if(drizzle.length !== 0){
            return drizzle;
        }
        else if(rain.length !== 0){
            return rain;
        }
        else if(snow.length !== 0){
            return snow;
        }
        else if(thunderstorms.length !== 0){
            return thunderstorms;
        }
        else if(hazardous.length !== 0){
            return hazardous;
        };
    },

    weatherSort: function(day){
        
        // console.log("this is pre sorted day")
        // console.log(day);
        if (day.length === 1){
            return day;
        }
        
        var i;
        // index into sorted section, moving left
        var j;

        for (i = 0; i < day.length; i++) {

            
            var value = day[i];
            for (j = i - 1; j > -1 && day[j].weather[0].id > value.weather[0].id; j--) {
            day[j + 1] = day[j];
            }

            // insert the value once you've reached the location where items[j] <= value
            day[j + 1] = value;
        }
        // console.log(day[1]);
        return day[1];
    }
    
}