import React from 'react'
import { useState } from 'react';

const countries_obj = [
    {
        "name": "United States",
        "shortName": "USA",
        "capital": "Washington, D.C.",
        "flag": "https://flagcdn.com/us.png",
        'image': 'https://static5.depositphotos.com/1030296/395/i/380/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg',
        'alt_img': 'United States image',
        "mapLink": "https://goo.gl/maps/5xn5E",
        "phoneCode": "+1",
        "isoCodes": {
            "alpha2": "US",
            "alpha3": "USA"
        },
        "topCities": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
        "gdp": 21433,  // In billions USD
        "languages": ["English"],
        "currency": {
            "name": "US Dollar",
            "symbol": "$"
        },
        "currentTime": "2024-10-18T12:00:00",

        "region": "Americas",
        "viewMap": "",
    },
    {
        "name": "India",
        "shortName": "IN",
        "capital": "New Delhi",
        "flag": "https://flagcdn.com/in.png",
        'image': 'https://st2.depositphotos.com/1002280/6554/i/380/depositphotos_65543389-stock-photo-gateway-of-india.jpg',
        'alt_img': 'india image',
        "mapLink": "https://goo.gl/maps/x7nn2",
        "phoneCode": "+91",
        "isoCodes": {
            "alpha2": "IN",
            "alpha3": "IND"
        },
        "topCities": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad"],
        "gdp": 2875,  // In billions USD
        "languages": ["Hindi", "English"],
        "currency": {
            "name": "Indian Rupee",
            "symbol": "₹"
        },
        "currentTime": "2024-10-18T18:30:00",

        "region": "Asia",
        "viewMap": "",
    },
    {
        "name": "Japan",
        "shortName": "JP",
        "capital": "Tokyo",
        "flag": "https://flagcdn.com/jp.png",
        'image': 'https://st3.depositphotos.com/9999814/16512/i/380/depositphotos_165124774-stock-photo-mount-fuji-chureito-pagoda-in.jpg',
        'alt_img': 'japan image',
        "mapLink": "https://goo.gl/maps/6T8n2",
        "phoneCode": "+81",
        "isoCodes": {
            "alpha2": "JP",
            "alpha3": "JPN"
        },
        "topCities": ["Tokyo", "Osaka", "Nagoya", "Sapporo", "Fukuoka"],
        "gdp": 5065,  // In billions USD
        "languages": ["Japanese"],
        "currency": {
            "name": "Yen",
            "symbol": "¥"
        },
        "currentTime": "2024-10-18T20:00:00",

        "region": "Asia",
        "viewMap": "",
    },
    {
        "name": "Germany",
        "shortName": "DE",
        "capital": "Berlin",
        "flag": "https://flagcdn.com/de.png",
        'image': 'https://st.depositphotos.com/1035350/3280/i/380/depositphotos_32802911-stock-photo-munich-skyline.jpg',
        'alt_img': 'Germany image',
        "mapLink": "https://goo.gl/maps/GwpC3",
        "phoneCode": "+49",
        "isoCodes": {
            "alpha2": "DE",
            "alpha3": "DEU"
        },
        "topCities": ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
        "gdp": 3846,  // In billions USD
        "languages": ["German"],
        "currency": {
            "name": "Euro",
            "symbol": "€"
        },
        "currentTime": "2024-10-18T14:00:00",

        "region": "Europe",
        "viewMap": "",
    },
    {
        "name": "Brazil",
        "shortName": "BR",
        "capital": "Brasilia",
        "flag": "https://flagcdn.com/br.png",
        'image': 'https://st2.depositphotos.com/6644020/11217/i/380/depositphotos_112172136-stock-photo-rio-de-janeiro-aerial.jpg',
        'alt_img': 'Brazil image',
        "mapLink": "https://goo.gl/maps/C5Bzz",
        "phoneCode": "+55",
        "isoCodes": {
            "alpha2": "BR",
            "alpha3": "BRA"
        },
        "topCities": ["São Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza"],
        "gdp": 2055,  // In billions USD
        "languages": ["Portuguese"],
        "currency": {
            "name": "Brazilian Real",
            "symbol": "R$"
        },
        "currentTime": "2024-10-18T11:00:00",

        "region": "Americas",
        "viewMap": "",
    },
    {
        "name": "United Kingdom",
        "shortName": "GB",
        "capital": "London",
        "flag": "https://flagcdn.com/gb.png",
        'image': 'https://st4.depositphotos.com/1076504/19886/i/380/depositphotos_198860200-stock-photo-london-tower-bridge-sunrise-sunny.jpg',
        'alt_img': 'United Kingdom image',
        "mapLink": "https://goo.gl/maps/8DbdG",
        "phoneCode": "+44",
        "isoCodes": {
            "alpha2": "GB",
            "alpha3": "GBR"
        },
        "topCities": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
        "gdp": 2827,  // In billions USD
        "languages": ["English"],
        "currency": {
            "name": "British Pound",
            "symbol": "£"
        },
        "currentTime": "2024-10-18T13:00:00",

        "region": "Europe",
        "viewMap": "",
    },
    {
        "name": "France",
        "shortName": "FR",
        "capital": " Paris",
        "flag": "https://flagcdn.com/fr.png",
        'image': 'https://st3.depositphotos.com/14847044/18813/i/380/depositphotos_188135570-stock-photo-paris.jpg',
        'alt_img': 'France image',
        "mapLink": "https://goo.gl/maps/L7ndZ",
        "phoneCode": "+33",
        "isoCodes": {
            "alpha2": "FR",
            "alpha3": "FRA"
        },
        "topCities": ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
        "gdp": 2715,  // In billions USD
        "languages": ["French"],
        "currency": {
            "name": "Euro",
            "symbol": "€"
        },
        "currentTime": "2024-10-18T14:00:00",

        "region": "Europe",
        "viewMap": "",
    },
    {
        "name": "China",
        "shortName": "CN",
        "capital": "Beijing",
        "flag": "https://flagcdn.com/cn.png",
        'image': 'https://st.depositphotos.com/1030808/2988/i/380/depositphotos_29885887-stock-photo-great-wall-sunset.jpg',
        'alt_img': 'China image',
        "mapLink": "https://goo.gl/maps/8Dnm3",
        "phoneCode": "+86",
        "isoCodes": {
            "alpha2": "CN",
            "alpha3": "CHN"
        },
        "topCities": ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chongqing"],
        "gdp": 14343,  // In billions USD
        "languages": ["Mandarin"],
        "currency": {
            "name": "Renminbi",
            "symbol": "¥"
        },
        "currentTime": "2024-10-18T20:00:00",

        "region": "Asia",

        "viewMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33656978.0939605!2d82.83479083838715!3d33.91651502248239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e1!3m2!1sen!2sin!4v1729314484983!5m2!1sen!2sin",

    },
    {
        "name": "Russia",
        "shortName": "RU",
        "capital": "Moscow",
        "flag": "https://flagcdn.com/ru.png",
        'image': 'https://st4.depositphotos.com/25469786/38432/i/380/depositphotos_384323536-stock-photo-morning-city-landscape-view-cathedral.jpg',
        'alt_img': 'Russia image',
        "mapLink": "https://goo.gl/maps/R5snz",
        "phoneCode": "+7",
        "isoCodes": {
            "alpha2": "RU",
            "alpha3": "RUS"
        },
        "topCities": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod"],
        "gdp": 1640,  // In billions USD
        "languages": ["Russian"],
        "currency": {
            "name": "Russian Ruble",
            "symbol": "₽"
        },
        "currentTime": "2024-10-18T18:00:00",

        "region": "Europe",
        "viewMap": "",
    },
    {
        "name": "Australia",
        "shortName": "AU",
        "capital": "Canberra",
        "flag": "https://flagcdn.com/au.png",
        'image': 'https://st2.depositphotos.com/6105212/43726/i/380/depositphotos_437260166-stock-photo-june-2020-sydney-australia-beautiful.jpg',
        'alt_img': 'Australia image',
        "mapLink": "https://goo.gl/maps/x4mm3",
        "phoneCode": "+61",
        "isoCodes": {
            "alpha2": "AU",
            "alpha3": "AUS"
        },
        "topCities": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
        "gdp": 1390,  // In billions USD
        "languages": ["English"],
        "currency": {
            "name": "Australian Dollar",
            "symbol": "$"
        },
        "currentTime": "2024-10-18T22:00:00",

        "region": "Oceania",
        "viewMap": "",
    },
    {
        "name": "Canada",
        "shortName": "CA",
        "officialName": "Canada",
        "capital": "Ottawa",
        "flag": "https://flagcdn.com/w320/ca.png",
        'image': 'https://st.depositphotos.com/1030808/2274/i/380/depositphotos_22749653-stock-photo-toronto-sunset-over-lake-panorama.jpg',
        'alt_img': 'Canada image',
        "mapLink": "https://goo.gl/maps/jGSBzZkRkfP6p9Rt8",
        "phoneCode": "+1",
        "isoCodes": {
            "alpha2": "CA",
            "alpha3": "CAN"
        },
        "countryCode": "CA",
        "topCities": ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa"],
        "gdp": 1740,  // in billion USD
        "mainLanguage": "English",
        "otherLanguages": ["French"],
        "currency": {
            "name": "Canadian Dollar",
            "code": "CAD",
            "symbol": "$",
            "exchangeRate": 0.74  // Example: CAD to USD
        },
        "currentTime": "2024-10-18T09:30:00-04:00",

        "region": 'British Columbia',
        "viewMap": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23711826.169871457!2d-116.75483103688838!3d54.22227356209138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e1!3m2!1sen!2sin!4v1729230956588!5m2!1sen!2sin',
    },
    {
        "name": "Finland",
        "shortName": "FI",
        "officialName": "Republic of Finland",
        "capital": "Helsinki",
        "flag": "https://flagcdn.com/w320/fi.png",
        'image': 'https://st2.depositphotos.com/1000128/9512/i/380/depositphotos_95129424-stock-photo-night-scenery-of-the-old.jpg',
        'alt_img': 'Finland image',
        "mapLink": "https://goo.gl/maps/HgZc4hG3ZsX9ZFEK7",
        "phoneCode": "+358",
        "isoCodes": {
            "alpha2": "FI",
            "alpha3": "FIN"
        },
        "countryCode": "FI",
        "topCities": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu"],
        "gdp": 278.6,  // in billion USD
        "mainLanguage": "Finnish",
        "otherLanguages": ["Swedish"],
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€",
            "exchangeRate": 1.09  // Example: EUR to USD
        },
        "currentTime": "2024-10-18T15:30:00+02:00",

        "region": 'maakunnat',
        "viewMap": "",
    },
]

const Country = () => {

    const [data, setData] = useState();

    const search_Data = () => {
        const country_data = document.getElementById('get_data').value.toLowerCase();
        setData(country_data);
        console.log(country_data);
    }

    return (
        <div>
            <div>
                <p className='font-serif text-4xl text-slate-800 '>COUNTRIES DETAIlS</p>
            </div>
            <input type="text" name="" id="get_data" placeholder='Search...' className='p-2 border my-10 w-[40%] shadow-black shadow-md rounded' onChange={search_Data} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    countries_obj.map((current, index) => {
                        return <Country_details details={current} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Country

function Country_details({ details }) {

    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap(prev => !prev); // Toggle the map visibility
    };
    return (
        <>
            <div className="container mx-auto">

                <div className="bg-white shadow-lg rounded-lg overflow-hidden text-left">
                    <img className="w-full h-48 object-cover" src={details.image} alt={details.alt_img} />

                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">{details.name}</h2>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Short Name:</span>{details.shortName} </p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Region:</span> {details.region} </p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Capital:</span> {details.capital} </p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Phone Code:</span> {details.phoneCode} </p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">GDP:</span> $ {details.gdp} billions</p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Languages:</span> {details.languages} </p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Currency:</span> {details.currency.name} ({details.currency.symbol})</p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">ISO Codes:</span> {details.isoCodes.alpha2} (alpha2), {details.isoCodes.alpha3} (alpha3)</p>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Current Time:</span> {details.currentTime} </p>

                        <button
                            onClick={toggleMap}
                            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                        >
                            {showMap ? "Hide Map" : "Show Map"}
                        </button>

                        {showMap && details.viewMap && (
                            <iframe
                                src={details.viewMap}
                                width='600'
                                height='450'
                                style={{ border: 0 }}
                                loading='lazy'
                                title={`Map of ${details.name}`}
                            >view map</iframe>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}