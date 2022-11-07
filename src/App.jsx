import { useState } from 'react'
import './App.css'
import 'rsuite/dist/rsuite.min.css'
import { ButtonToolbar, Button, IconButton } from 'rsuite'
import {  Unvisible, Visible } from '@rsuite/icons'
import { CustomProvider } from 'rsuite'
import { useEffect } from 'react'

function App() {
	const [toggleMode, setToggleMode] = useState(
		localStorage.getItem('toggle-mode') === 'true'
	)
	useEffect(() => {
		localStorage.setItem('toggle-mode', toggleMode)
	}, [toggleMode])

	const toggleModeFunc = () => {
		setToggleMode(!toggleMode)
	}

	return (
		<CustomProvider theme={toggleMode ? 'dark' : 'light'}>
			<div className="App">
				<ButtonToolbar>
					<IconButton
						onClick={toggleModeFunc}
						icon={toggleMode ? <Visible /> : <Unvisible />}
						color="orange"
						appearance="ghost"
					/>
				</ButtonToolbar>
			</div>
		</CustomProvider>
	)
}

export default App
