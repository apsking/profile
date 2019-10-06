import PropTypes from 'prop-types'
import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
>>>>>>> Add default content.
=======
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
>>>>>>> Revert "Updates"

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Revert "Updates"
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
<<<<<<< HEAD
>>>>>>> Add default content.
          <p>
            Hello! My name is Alex. I'm a life-long student, a software engineer by trade, and a
            tinkerer at heart. I have a full-stack background and have worked
            at places like Microsoft and Amazon.
            Check out my <a href="https://www.linkedin.com/in/apsking/">LinkedIn</a> for
            a little more about me.
          </p>
<<<<<<< HEAD
=======
=======
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
>>>>>>> Revert "Updates"
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
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
<<<<<<< HEAD
>>>>>>> Add default content.
          <p>
            Most recently, I have been interested in building voice applications
            on AWS and Amazon Alexa. I was one of the first developers to integrate
            <a href="https://www.amazon.com/Alexander-King-My-Pet-Rock/dp/B073VDPTCW"> Alexa's
            in-skill purchasing</a> and really love how that opens the market
            for voice applications. I've tinkered with things like the smarthome automation
            using AWS IoT, keeping up with the latest JS frameworks, trying to
            harness the AWS CDK to maximize its potential, and much more.
          </p>
          <p>
            I love writing beautiful code and using technology to make our lives easier, more productive, and more enjoyable.
          </p>
          {close}
        </article>
<<<<<<< HEAD

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>
			Alexa Skill - My Pet Rock
		  </h3>
		  <p>
			In <a href="https://www.amazon.com/Alexander-King-My-Pet-Rock/dp/B073VDPTCW" target="_blank" rel="noopener noreferrer">My Pet Rock</a>, you get to take care of your own pet. Take your new pet on walks, play games with it, and feed it regularly, so that it grows big and strong! Your pet will grow up over time to learn more skills and tricks. Join nearly than 500,000 other people and see what it's all about!
		  </p>
          <h3>
			Alexa Skill - Interview Prep
		  </h3>
		  <p>
			<a href="https://www.amazon.com/Alexander-King-Interview-Prep/dp/B01LW7L2VD" target="_blank"rel="noopener noreferrer">Interview Prep</a> is your one-stop skill to help you prepare for your next interview! It has hundreds of questions for a variety of different job types and areas of work. For best results, ask Interview Prep a few questions every day to prepare your answers. Consider answering directly into a mirror and focusing not only on your answer, but also your body language!
		  </p>
          <p>
            This skill was recently featured on <a href="https://lifehacker.com/how-to-use-alexa-to-help-you-prep-for-a-job-interview-1833024806">LifeHacker!</a>
          </p>
          <h3>
			Alexa Skill - Ancient Alchemy
		  </h3>
		  <p>
			In <a href="https://www.amazon.com/Alexander-King-Ancient-Alchemy/dp/B074F4NHJ8" target="_blank"rel="noopener noreferrer">Ancient Alchemy</a>, you take on the challenge of restoring the Library of Elements by finding recipes for all of the elements in the realm. As The Alchemist, you start by combining primitive elements and then continue to use your findings to make many more! This creative journey will immerse you in its world and challenge your abilities!
		  </p>
          {close}
        </article>
=======
>>>>>>> Add default content.
=======
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
>>>>>>> Revert "Updates"
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
