import React from 'react';

import './Product.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Product = () => {
  const appliances = [
    { id: 1, name: 'Washing Machine', description: 'LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine', imageLink: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcllUCjOu-eL1Q26TvMrPB-a6xsK_K5j3foF1xRGHGjEArlSD8Mv971iLEE0yOObiHVycbUGqXbnUfujAIc7Hbl62z6nzuA3Mx0JmopOyJ61gQ6CWn98Hx', cost: '800$',link:'https://www.lg.com/in/washing-machines/lg-p7010rraz' },
    { id: 2, name: 'chimmney', description: 'Faber 90 cm 1200 m³/hr Auto-clean Slant Chimney', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3ZK28Jzpgl_GfrcgKucY3CCWcVqlScz6HA&usqp=CAU', cost:'350$',link:'https://www.amazon.in/Faber-90-Filterless-Autoclean-BK/dp/B07JH33HDJ?th=1' },
    { id: 3, name: 'Oven', description: 'Lifelong 9 Litres 1100 W Oven, Toaster & Griller OTG Oven for Baking Cake, Pizza, Grilling and Toasting at Home', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_tZdLgiN8lWjeGVSQKfTDa9DFf1K-g1bzw&usqp=CAU',cost:'300$',link:'https://www.amazon.in/Lifelong-Grilling-Toasting-ManufacturerS-Warranty/dp/B0C1KQR5LD?th=1'},
    { id: 4, name: 'Refrigerator', description: 'Bosch MaxFlex Convert 332L Inverter Frost Free Triple Door Refrigerator', imageLink: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSN5OvmRZzpNuBmjvxytBQIj9cbfC1oxnpLpmuLFY0ZHbJenliPZMHrhpXxII0YlsRXmxsYCC0vv-00pG744-KLvL6p6DWqaIn7eSqV-m6XQaufA2Ow6k-xiA',cost:'400$',link:'https://www.amazon.in/Bosch-Inverter-Refrigerator-CMC33K05NI-Convertible/dp/B0B7JGVJ5T?th=1'},
    { id: 5, name: 'Dishwasher', description: 'Neptune VX 12 Place Setting Dishwasher', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefmGP0XOs6EtTaojJUwHchCURTQGbiB0ETw&usqp=CAU',cost:'249$',link:'https://www.ifbappliances.com/neptune-vx' },
    { id: 6, name: 'Iron Box', description: 'Impex Electric IronBox Heavy weight Fabrika', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QPa5jaq6QgW1EbhEsufeAvIp65UtCmdwAw&usqp=CAU',cost:'59$',link:'https://impexstore.com/products/impex-electric-iron-box-fabrika'},
  ];
  return (
    <>
          <div className="product-container">
        <section className="hero">
          <h1>Book Your Appliances Online</h1>
          <p>Convenient and hassle-free appliance booking at your fingertips.</p>
        </section>
        <h2 className="center">Available Appliances</h2>
        <section className="appliance-section">
          {appliances.map((appliance) => (
            <div className="appliance-card" key={appliance.id}>
              <h3 className="center"><u>{appliance.name}</u></h3>
              <p className="center">{appliance.description}</p>
              {appliance.imageLink && (
                <div className="center">
                 <img src={appliance.imageLink} alt={appliance.name} className="appliance-image" />
                </div>
              )}
              <Link to={appliance.link}><button>Buy <h4>{appliance.cost}</h4></button></Link>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Product;
