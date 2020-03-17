const express =  require('express');
var request = require('request');
var fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

const port = 5000;

//GET WEATHER
app.get('/weather', (req, rest)=>{
    request('http://api.openweathermap.org/data/2.5/weather?q=lefke&appid=fb49b23aa58d0ce50b11311d9d23ee0c', 
        function(err, res, body){
        var temp = Math.ceil(JSON.parse(body)['main'].temp - 273);
        var feel = Math.ceil(JSON.parse(body)['main'].feels_like - 273);
        var description = JSON.parse(body)['weather'][0].description;
        var max = Math.ceil(JSON.parse(body)['main'].temp_max - 273);
        var low= Math.ceil(JSON.parse(body)['main'].temp_min -273);

        rest.send( {feel, temp, max ,low ,description});
        rest.end();
    })
});

//GET THE NEWS
app.get('/news', (req, rest)=>{
    request('https://newsapi.org/v2/top-headlines?country=za&category=sport&apiKey=65b096fc05f84b5bb7e6ae5e38b5d96c', 
    function(err, res, body){ 
          
     var news = [];
     
        for(let index = 0; index < 20 ; ++index){
            var headline = JSON.parse(body)['articles'][index].title;
            var content = JSON.parse(body)['articles'][index].description;
            var linkTonews =JSON.parse(body)['articles'][index].url;
            var linkToimage = JSON.parse(body)['articles'][index].urlToImage;
            var Source = JSON.parse(body)['articles'][index]['source'].name; 
            var Id = JSON.parse(body)['articles'][index].title; 
         
            news.push({headline, content, linkToimage, linkTonews, Source, Id});
    
    }
    
        rest.send(news);
        rest.end();
    })
});

//GET MOVIES
app.get('/movies', (req, rest)=>{
    var page = Math.ceil((Math.random()*(10-1))+1);
    //console.log(page);
    request('https://api.themoviedb.org/3/discover/movie?api_key=bc96a52a6cb35498e2fe6f3e6dffeaec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+page, 
    function(err, res, body){
        var movies = [];
            for(let index = 0; index < 11 ; ++index){
                var popularity = (JSON.parse(body)['results'][index].popularity);
                var title = (JSON.parse(body)['results'][index].title);
                var description = JSON.parse(body)['results'][index].overview;
                var release = (JSON.parse(body)['results'][index].release_date);
                var poster= (JSON.parse(body)['results'][index].poster_path);
                var Id= (JSON.parse(body)['results'][index].id);

                movies.push({popularity, title, description, release, poster, Id})
        }
        rest.send(movies);
        rest.end();
    })

    app.get('/inde', (req,res)=>{
        //console.log('you did it');
        //res.render('!DOCTYPE html <html><head><title>TEST</title></head><body><h1>HEYY YOU</h1></body></html>');
        res.send('wow!!');
        res.end();
    })
});
  
app.listen(port, () => {console.log(`Listening on port ${port}`)});