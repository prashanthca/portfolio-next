import {default as _Head} from 'next/head'
import { useRouter } from 'next/router';
import Script from 'next/script'

export default function Head({children}) {
	const router = useRouter();
	return (
		<>
		<_Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Prashanth C A</title>
			<meta name="description" content="Portfolio Website of Prashanth C A" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons"/>
			{children}
		</_Head>
		</>
	)
}
