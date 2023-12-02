import React, { Suspense } from 'react'
import { Preloader } from '../components/common/Preloader/Preloader'
import preloaderGif from '../assets/images/preloader.gif'

export const WithSuspense = <WCP, >(Component: React.ComponentType<WCP>) => {
	return (props: WCP) => {
		return <Suspense fallback={<Preloader preloader={preloaderGif} />}><Component {...props} /></Suspense>
	}
}
