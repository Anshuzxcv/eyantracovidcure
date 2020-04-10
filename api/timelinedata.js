const timelinedata = require('../schema/timelineSchema');
var unirest = require("unirest");



exports.writedata =function(){
	
	var req = unirest("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline");

	req.headers({
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "get key from https://corona-virus-world-and-india-data.p.rapidapi.com/api"
	});
		
	
	req.end(async (res)=> {
		try{
			const data = res.body; 
			var timeline = await timelinedata.deleteMany();
	
			var newdata = data.map((async(el)=>{
				timeline = await timelinedata.create(el);
			}));
	
		}catch(err){
			throw new Error(err);
		}
	});
}