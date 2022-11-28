import React from 'react'

const Testimonial = () => {
  const testtimonialsList = [
    {
      name: 'David Sherman',
      feedback: "It was a pleasure to use this provider. I've used him for many jobs and all were done perfectly and on time.",
      id: 1,
    },
    {
      name: 'Transmedia',
      feedback: "Muhammad does exactly what he says he will do when he says he will do it. His English is good. He is easy to work with. He works using ZOOM within Upwork environment when showing his completed work. His ZOOM presentation makes it easy to understand what he has drawn. Yes, I will work with him again.",
      id: 2,
    },
    {
      name: 'Giorgia Tessari',
      feedback: '"Muhammad completed our job in a short time with no mistakes. We are very happy about this cooperation. Highly recommended."',
      id: 3,
    },
  ];
  return (
    <div id='testimonial'>
      <h2>Testimonials</h2>
      <section>
        {testtimonialsList.map(i => (<TestimonialCard name={i.name} feedback={i.feedback} key={i.id} />

        ))}
        
      </section>
    </div>
  )
}

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="client" />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
)




export default Testimonial