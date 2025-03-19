import { IGithub, IIn } from '../icons/i-social'

const Footer = (): JSX.Element => {
  return (
    <footer className='footer-main'>
      <article className='footer'>
        <p className='footer__text'>
          The sole purpose of this website is to help you find the best color palette for your project.
        </p>
        <section className='footer__social'>
          <IGithub className='footer__social-icon' />
          <IIn className='footer__social-icon' />
        </section>
      </article>
    </footer>
  )
}

export default Footer
