import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlSocialGithub } from 'react-icons/sl'

const Footer = (): JSX.Element => {
  return (
    <footer className='footer-main'>
      <article className='footer'>
        <p className='footer__text'>
          The sole purpose of this website is to help you find the best color palette for your project.
        </p>
        <section className='footer__social'>
          <SlSocialGithub className='footer__social-icon' />
          <SlSocialInstagram className='footer__social-icon' />
          <SlSocialLinkedin className='footer__social-icon' />
          <SlSocialFacebook className='footer__social-icon' />
          <SlSocialTwitter className='footer__social-icon' />
        </section>
      </article>
    </footer>
  )
}

export default Footer
