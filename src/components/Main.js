import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Hello! My name is Alex. I'm a life-long student, a software engineer by trade, and a
            tinkerer at heart. I have a full-stack background and have worked
            at places like Microsoft and Amazon.
            Check out my <a href="https://www.linkedin.com/in/apsking/">LinkedIn</a> for
            a little more about me.
          </p>
          <p>
            Most recently, I have been interested in building voice applications
            on AWS and Amazon Alexa. I was one of the first developers to integrate
            <a href="https://www.amazon.com/Alexander-King-My-Pet-Rock/dp/B073VDPTCW"> Alexa's
            in-skill purchasing</a> and really love how that opens the market
            for voice applications. I've tinkered with things like the smarthome automation
            using AWS IoT, kept up with the latest JS frameworks, tried to
            harness the AWS CDK to maximize its potential, and much more.
          </p>
          <p>
            I love writing beautiful code and using technology to make our lives easier, more productive, and more enjoyable.
          </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>
            Instagram - Puppy Can't Hang
          </h3>
          <p>
            For a long time, I wanted to create an Instagram following. I decided
            to create <a href="https://www.instagram.com/puppy.cant.hang/">Puppy Can't Hang</a> after
            finding the niche that I just couldn't pass up - Sleeping puppies! Puppy
            Can't Hang is all about sharing those precious moments of our four-legged
            friends who just want to snooze!
          </p>
          <h3>
			Alexa Skill - My Pet Rock
		  </h3>
		  <p>
			In <a href="https://www.amazon.com/Alexander-King-My-Pet-Rock/dp/B073VDPTCW" target="_blank" rel="noopener noreferrer">My Pet Rock</a>,
            you get to take care of your own pet. Take your new pet on walks,
            play games with it, and feed it regularly, so that it grows big and
            strong! Your pet will grow up over time to learn more skills and tricks.
            Join nearly than 500,000 other people and see what it's all about!
		  </p>
          <h3>
			Alexa Skill - Interview Prep
		  </h3>
		  <p>
			<a href="https://www.amazon.com/Alexander-King-Interview-Prep/dp/B01LW7L2VD" target="_blank"rel="noopener noreferrer">Interview Prep</a> is
            your one-stop skill to help you prepare for your next interview!
            It has hundreds of questions for a variety of different job types
            and areas of work. For best results, ask Interview Prep a few
            questions every day to prepare your answers. Consider answering
            directly into a mirror and focusing not only on your answer, but
            also your body language!
		  </p>
          <p>
            This skill was recently featured on <a href="https://lifehacker.com/how-to-use-alexa-to-help-you-prep-for-a-job-interview-1833024806">LifeHacker!</a>
          </p>
          <h3>
			Alexa Skill - Ancient Alchemy
		  </h3>
		  <p>
			In <a href="https://www.amazon.com/Alexander-King-Ancient-Alchemy/dp/B074F4NHJ8" target="_blank"rel="noopener noreferrer">Ancient Alchemy</a>, you
            take on the challenge of restoring the Library of Elements by finding
            recipes for all of the elements in the realm. As The Alchemist, you
            start by combining primitive elements and then continue to use your
            findings to make many more! This creative journey will immerse you
            in its world and challenge your abilities!
		  </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
