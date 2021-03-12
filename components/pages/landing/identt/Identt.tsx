const Identt = () => {
    return (
        <>
            <section className="identt_main">
                <video muted autoPlay playsInline loop src="videos/identt/identt.mp4" className="identt_video"></video>
                <div className="container">
                    <div className="image" />
                    <h1 className="content f-size-h3 f-weight-bl">
                        Module that creates {" "}
                        <span>blockchain profiles.</span>
                    </h1>
                </div>
                <div className="identt_content">
                    <p className="f-size-p4 f-weight-l">Blockchain profiles are a new form of digital ownership, these blockchain profiles are solely owned by the individual and organization, since they are essentially smart contracts they can hold crypto assets or nfts inside them.</p>
                    <p className="f-size-p4 f-weight-l">The most important thing to understand is that they are decentralized and immutable. They can represent a person's digital identity on the blockchain. You can attach your social media links and picture to these profiles, and other organizations can verify ‘claims’ on this profile to give you credentials. It is built on the erc725 standard. </p>
                </div>
            </section>
        </>
    )
}

export default Identt
