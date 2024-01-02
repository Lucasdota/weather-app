import SearchBar from './components/SearchBar.jsx'
import SkyImage from './components/SkyImage.jsx'
import Temperature from './components/Temperature.jsx'
import Conditions from './components/Conditions.jsx'

function App() {
  return (
    <main className='bg-gradient-to-b from-cyan-100 to-cyan-200 h-[100dvh] w-[100dvw] flex items-center justify-center'>
			{/* app container */}
			<section aria-label='weather app' className='h-96 w-72 rounded-lg shadow-2xl bg-gradient-to-b from-cyan-950 to-cyan-900 flex flex-col items-center justify-between p-8 pb-4'>

				<SearchBar />
				<SkyImage />
				<Temperature />
				<Conditions />

			</section>
		</main>
  )
}

export default App
