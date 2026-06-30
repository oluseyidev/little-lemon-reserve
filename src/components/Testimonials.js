import React from 'react';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    name: 'Sarah M.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"The atmosphere was warm and inviting, and the Greek Salad was simply fresh and divine!"'
  },
  {
    id: 2,
    rating: 5,
    name: 'Alex K.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"Best Bruschetta in town. Highly recommend reservation because it gets busy quickly!"'
  },
  {
    id: 3,
    rating: 4,
    name: 'Elena R.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"Traditional taste with a lovely twist. Service was exceptional and the staff was friendly."'
  },
  {
    id: 4,
    rating: 5,
    name: 'John D.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"Grandma\'s Lemon Dessert blew me away. I will definitely be coming back next week."'
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="testimonials-heading">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((item) => (
          <article className="testimonial-card" key={item.id}>
            <div className="stars" aria-label={`Rating: ${item.rating} stars`}>
              {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
            </div>
            <div className="user-info">
              <img src={item.image} alt={item.name} className="user-avatar" />
              <h3 className="user-name">{item.name}</h3>
            </div>
            <p className="testimonial-text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
