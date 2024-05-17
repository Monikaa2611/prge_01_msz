import React from "react";
import MediaCard from "./Card";

function Dashboard() {
    const input_list=[

        {
            name: "Janek", 
            surname: "Kowalski", 
            content: "jakiś opis Janka", 
            image: "https://geoforum.pl/upload3/news_pl/picture/main/328_geodeta_artykul6.jpg"
        },
        {
            name: "Monika", 
            surname: "Szczepaniuk", 
            content: "jakiś opis Moniki", 
            image: "https://geoforum.pl/upload3/news_pl/picture/main/328_geodeta_artykul6.jpg"
        },
        {
            name: "Ola", 
            surname: "Jaciubek", 
            content: "jakiś opis Oli", 
            image: "https://geoforum.pl/upload3/news_pl/picture/main/328_geodeta_artykul6.jpg"
        },
        {
            name: "Bartek", 
            surname: "Baran",
            content: "jakiś opis Bartka", 
            image: "https://geoforum.pl/upload3/news_pl/picture/main/328_geodeta_artykul6.jpg"
        },
    ];
  return (
    <div>
        {input_list.map((item) => {
        return <MediaCard name={item.name} surname={item.surname />;
    })}

      <MediaCard />
    </div>
  );
}

export default Dashboard;
