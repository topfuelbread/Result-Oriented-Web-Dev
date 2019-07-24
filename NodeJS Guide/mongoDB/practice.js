let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikipedia')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch((msg)=>console.log(msg));

// let Schema = mongoose.Schema;
let countrySchema = new mongoose.Schema({
    country:String,
    capital:String,
    area:Number,
    population:Number,
    currency:String
});

let Country = mongoose.model('Country', countrySchema);

// let countries = [
// 	{country: 'USA', capital: 'Washington', area: 9833520, population: 327167434, currency: 'USD'},
// 	{country: 'Italy', capital: 'Rome', area: 301340, population: 60483973, currency: 'EUR'},
// 	{country: 'Germany', capital: 'Berlin', area: 357386, population: 83000000, currency: 'EUR'},
// 	{country: 'Canada', capital: 'Ottawa', area: 3855100, population: 37242571, currency: 'CAD'},
// 	{country: 'China', capital: 'Beijing', area: 9596961, population: 1403500365, currency: 'CNY'},
// 	{country: 'Sweden', capital: 'Stockholm', area: 450295, population: 10223505, currency: 'SEK'},
// 	{country: 'India', capital: 'New Delhi', area: 3287263, population: 1324171354, currency: 'INR'},
// 	{country: 'Netherlands', capital: 'Amsterdam', area: 41543, population: 17302139, currency: 'EUR'}
// ];

// countries.forEach((elem)=>{
//     let country = new Country(elem);
//     country.save();
//     console.log('a country was saved');
// });

//TASK 1: select area>100000 and currency=EUR, sort by alphabet
async function task1(){
    let result = await Country
        .find()
        .where('area').gt(100000)
        .where('currency').equals('EUR')
        .sort({country:1})
        .select({country:true});
    console.log(result);
}
task1();

//TASK 2: replace eur with euro
async function task2(){
    await Country.updateMany({currency: 'EUR'}, {currency: 'EURO'});
}
task2();

//TASK 3 : remove countries with population > 100000000
async function task3(){
    await Country.deleteMany({population: {$gt:100000000}});
}
task3();