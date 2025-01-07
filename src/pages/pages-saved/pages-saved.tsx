import { useHookContext } from '../../hooks/hook-context'
import SavedCard from './components/ui/saved-card'

const Saved = () => {
  const { options } = useHookContext()
  const { saved } = options.get
  console.log(saved)

  return (
    <main>
      <section>
        {saved.map((e) => (
          <SavedCard key={e.id} id={e.id} colors={e.palette} />
        ))}
      </section>
    </main>
  )
}

export default Saved
