import React from 'react';

const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes, basil, and cheese.',
    image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$5.00',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&h=400&q=80'
  }
];

function Specials() {
  return (
    <section className="specials-section" id="menu" aria-label="Weekly Specials">
      <div className="specials-header">
        <h2 className="specials-title">This Week's Specials!</h2>
        <button className="cta-button" aria-label="View online menu">Online Menu</button>
      </div>
      <div className="columns-grid">
        {specialsData.map((item) => (
          <article className="highlight-card" key={item.id}>
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
            <div className="card-body">
              <div className="card-header-flex">
                <h3 className="card-title">{item.title}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p className="card-text">{item.description}</p>
              <a href="#order" className="card-link" aria-label={`Order ${item.title} for delivery`}>
                Order a delivery &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
