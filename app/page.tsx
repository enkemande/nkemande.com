export default function Home() {
  return (
    <div className="prose dark:prose-invert py-10">
      <h3>Hey 👋🏽, I&apos;m Edison Nkemande</h3>
      <p>A <strong>Senior Software Engineer</strong> currently working at Q2, my focus is on creating robust web applications that enhance customer experiences, leveraging my expertise in Ember JS, Node JS, Go, .Net, React, React Native, Python and MySQL. With a solid foundation in Computer Science, I apply a methodical approach to software design and problem-solving.</p>
      <p>When I&apos;m not coding, I enjoy playing soccer, watching movies, reading books and spending time with my family.</p>
      {/* // list of skills in grid form and a pretty design */}
      <h4>Skills</h4>
      <div className="grid grid-cols-2 gap-4">
        <div>Ember JS</div>
        <div>Node JS</div>
        <div>Go</div>
        <div>.Net</div>
        <div>React</div>
        <div>React Native</div>
        <div>Python</div>
        <div>MySQL</div>
      </div>
    
      <h4>Get in touch</h4>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/edison-nkemande/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/enkemande" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </div>
  )
}
