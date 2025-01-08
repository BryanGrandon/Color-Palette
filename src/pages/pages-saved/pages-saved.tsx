// import { useHookContext } from '../../hooks/hook-context'
import { useHookContext } from '../../hooks/hook-context'
import SavedCard from './components/ui/saved-card'

const PagesSaved = () => {
  const { options } = useHookContext()
  const { saved } = options.get
  console.log(saved)

  return (
    <main className='pages-saved'>
      <section className='saved'>
        {saved.map((e) => (
          <SavedCard key={e.id} id={e.id} colors={e.palette} />
        ))}
      </section>
    </main>
  )
}

export default PagesSaved
