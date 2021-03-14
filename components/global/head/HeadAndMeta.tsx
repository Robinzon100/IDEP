import Head from 'next/head';




const HeadAndMeta = () => {
    return (
        <>
            <Head>
                <title>IDEP</title>
                <link rel="shortcut icon" href="/logo_mark.svg" />
            </Head>
            <Head>
                <meta name="title" content="🌌IDEP" />
                <meta name="description" content="IDEP will introduce standards and tools that will enable a new economy based on blockchain powered data and digital media."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://idep-plum.vercel.app/og_image.png"
                />
                <meta property="og:title" content="🌌IDEP" />
                <meta property="og:description" content="IDEP will introduce standards and tools that will enable a new economy based on blockchain powered data and digital media."
                />
                <meta property="og:image" content="/og_image.png" />/
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://idep-plum.vercel.app/og_image.png"
                />
                <meta property="twitter:title" content="🌌IDEP" />
                <meta property="twitter:description" content="IDEP will introduce standards and tools that will enable a new economy based on blockchain powered data and digital media."
                />
                <meta property="twitter:image" content="/og_image.png" />
            </Head>

        </>
    )
}

export default HeadAndMeta
