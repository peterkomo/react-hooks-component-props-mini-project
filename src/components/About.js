import React from 'react';

// The About component takes 'image' and 'about' props. It displays the blog logo as an image,
// using the provided 'image' prop (or a default placeholder image) and shows the blog description
// using the 'about' prop.
const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
