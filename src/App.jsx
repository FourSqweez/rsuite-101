import { useState } from 'react'
import './App.css'
import 'rsuite/dist/rsuite.min.css'
import { ButtonToolbar, IconButton, Navbar, Nav } from 'rsuite'
import { Others, Unvisible, Visible } from '@rsuite/icons'
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
			<Navbar appearance='inverse'>
				<Navbar.Brand>THE BLA BLA</Navbar.Brand>
				<Nav>
					<Nav.Item icon={<Others />}>Home</Nav.Item>
					<Nav.Item icon={<Others />}>MOdal</Nav.Item>
					<Nav.Menu title="About">
						<Nav.Item icon={<Others />}>Home</Nav.Item>
						<Nav.Item icon={<Others />}>Modal</Nav.Item>
						<Nav.Item icon={<Others />}>Ha</Nav.Item>
						<Nav.Item icon={<Others />}>Aah</Nav.Item>
					</Nav.Menu>
				</Nav>
        
				<Nav pullRight>
					<Nav.Item>
						<ButtonToolbar>
							<IconButton
								onClick={toggleModeFunc}
								icon={toggleMode ? <Visible /> : <Unvisible />}
								color="orange"
								appearance="ghost"
							/>
						</ButtonToolbar>
					</Nav.Item>
				</Nav>
			</Navbar>
		</CustomProvider>
	)
}

export default App
