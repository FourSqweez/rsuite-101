import { useState } from 'react'
import './App.css'
import 'rsuite/dist/rsuite.min.css'
import { ButtonToolbar, Button, IconButton } from 'rsuite'
import { Message } from '@rsuite/icons'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<Button appearance="subtle">Hello world</Button>
			<ButtonToolbar>
				<Button size="lg">Large</Button>
				<Button size="md">Medium</Button>
				<Button size="sm">Small</Button>
				<Button size="xs">Xsmall</Button>
			</ButtonToolbar>

			<ButtonToolbar>
				<Button color="yellow" appearance="primary">
					Yellow
				</Button>
				<Button color="blue" appearance="subtle">
					Blue
				</Button>
				<Button color="green" appearance="ghost">
					Green
				</Button>
			</ButtonToolbar>

			<ButtonToolbar>
				<IconButton icon={<Message />} />
			</ButtonToolbar>
		</div>
	)
}

export default App
