import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from '../components/head'

export default function Header() {
	const router = useRouter();

	return (
		<>
		<Head/>
		<nav className="navbar navbar-expand-lg mt-2 mb-2 mt-lg-1 mb-lg-0" id="main-header">
			<div className="container">
				<Link href="/" className="navbar-brand" passHref>
					<div className="site-title"/>
				</Link>
				<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon material-icons">menu</span>
				</button>
				<div className="navbar-collapse collapse mt-3 mt-lg-0" id="mainNavBar">
					<ul className="navbar-nav main-nav ms-auto">
						<li className={`main-nav-item ${router.pathname == "/" && "active"}`} id="home"><Link href="/">Home</Link></li>
						<li className={`main-nav-item ${router.pathname == "/about" && "active"}`} id="about-me"><Link href="/about">About Me</Link></li>
						<li className={`main-nav-item ${router.pathname == "/contact" && "active"}`} id="contact"><Link href="/contact">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
		</>
	)
}
