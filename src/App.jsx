import { useState } from 'react'
import React from 'react'
import './App.css'
import 'rsuite/dist/rsuite.min.css'
import { Others, Unvisible, Visible } from '@rsuite/icons'
import {
	CustomProvider,
	ButtonToolbar,
	IconButton,
	Navbar,
	Nav,
	Container,
	Header,
	Content,
	Footer,
	List,
	FlexboxGrid,
	Col,
	AvatarGroup,
} from 'rsuite'

import { useEffect } from 'react'
import { Avatar } from 'rsuite'
import { Badge } from 'rsuite'

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Forms } from './components/Forms'

function App() {
	const [toggleMode, setToggleMode] = useState(
		localStorage.getItem('toggle-mode') === 'true'
	)
	useEffect(() => {
		localStorage.setItem('toggle-mode', toggleMode)
	}, [toggleMode])

	const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => {
		console.log('NavLink test : ', rest)
		console.log('href : ', href)
		console.log('Children: ', children)
		return (
			<Link ref={ref} to={href} {...rest}>
				{children}
			</Link>
		)
	})

	const toggleModeFunc = () => {
		setToggleMode(!toggleMode)
	}

	return (
		<Router>
			<CustomProvider theme={toggleMode ? 'dark' : 'light'}>
				<Container style={{ minHeight: '100vh' }}>
					<Header>
						<Navbar appearance="default">
							<Navbar.Brand>THE BLA BLA</Navbar.Brand>
							<Nav>
								<Nav.Item
									as={NavLink}
									href="/"
									children={<Home />}
									icon={<Others />}
								>
									Home
								</Nav.Item>

								<Nav.Item
									as={NavLink}
									href="/form"
									icon={<Others />}
									children={<Forms />}
								>
									Form
								</Nav.Item>

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

								<Nav.Item>
									<Badge content={999}>
										<Avatar
											src="https://avatarfiles.alphacoders.com/915/91508.jpg"
											alt="@luffy"
											size="md"
										/>
									</Badge>
								</Nav.Item>
								<Nav.Item>
									<Avatar
										circle
										style={{ backgroundColor: 'red', fontSize: 23 }}
									>
										Ava
									</Avatar>
								</Nav.Item>
							</Nav>
						</Navbar>
					</Header>

					<Content>
						<Routes>
							<Route exact path="/" element={<Home testProps='test' />}></Route>
							<Route path="/form" element={<Forms />}></Route>
						</Routes>
					</Content>
					<Footer>
						<List>
							<FlexboxGrid justify="space-between">
								<FlexboxGrid.Item
									style={{
										marginBottom: 5,
										display: 'flex',
										justifyContent: 'center',
									}}
									colspan={6}
									as={Col}
								>
									<List>
										<h6>THICC MEMES INC</h6>
										<List.Item>342-420-6969</List.Item>
										<List.Item>Moscow, Russia</List.Item>
										<List.Item>123 Streeet South North</List.Item>
									</List>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item
									style={{
										marginBottom: 5,
										display: 'flex',
										justifyContent: 'center',
									}}
									colspan={6}
									as={Col}
								>
									<List>
										<h6>Stuff</h6>
										<List.Item>DANK MEMES</List.Item>
										<List.Item>OTHER STUFF</List.Item>
										<List.Item>GUD STUFF</List.Item>
									</List>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item
									style={{
										marginBottom: 5,
										display: 'flex',
										justifyContent: 'center',
									}}
									colspan={6}
									as={Col}
								>
									<List>
										<h6>WELL ANOTHER COLUMN</h6>
										<List.Item>DANK MEMES</List.Item>
										<List.Item>OTHER STUFF</List.Item>
										<List.Item>GUD STUFF</List.Item>
									</List>{' '}
								</FlexboxGrid.Item>
							</FlexboxGrid>
							<FlexboxGrid justify="center">
								<FlexboxGrid.Item>
									&copy;{new Date().getFullYear()}| THICC MEMES | All rights
									reserved Terms Of Service | Privacy
								</FlexboxGrid.Item>
							</FlexboxGrid>
						</List>
					</Footer>
				</Container>
			</CustomProvider>
		</Router>
	)
}

export default App
