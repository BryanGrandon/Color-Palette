// import { useHookContext } from '../../hooks/hook-context'
import Title from '../../core/components/ui/title'
import { useHookContext } from '../../hooks/hook-context'
import SavedCard from './components/ui/saved-card'

const PagesSaved = () => {
  const { options } = useHookContext()
  const { saved } = options.get
  return (
    <main className='pages-saved'>
      <section className='pages-saved__text'>
        <Title text='Saved color palettes' />
        <p>Here you will find all the color palettes you have saved.</p>
      </section>
      <section className='saved'>
        {saved.map((e) => (
          <SavedCard key={e.id} id={e.id} colors={e.palette} />
        ))}
      </section>
    </main>
  )
}

export default PagesSaved
