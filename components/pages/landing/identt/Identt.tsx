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
                    <p className="f-size-p4 f-weight-l">With digital decentralization and accessibility comes digital ownership of goods, media, and data. To identify who owns these digital goods, blockchain profiles were created to give an identity (IDENTT) to the owners of the goods.</p>
                    <p className="f-size-p4 f-weight-l">Being owned by the individual or organization themselves, the control is in their hands, with no outside parties being able to shut them down or tinker with their profiles and assets, giving a new level of user control to digital goods.</p>
                </div>
            </section>
        </>
    )
}

export default Identt
