import { ExternalLink } from "react-feather";




const Software = () => {
    return (
        <>
            <div className="software_main">
                <div className="blob_purple" />
                <div className="container">
                    <h1 className="title f-size-h1 f-weight-bl">
                        Built using a stack of powerful <b>open source</b> software
                    </h1>
                    <div className="cards">
                        <div className="card">
                            <a target='_blank' href='https://cosmos.network/' className='f-size-h5 f-weight-bo'>
                                Cosmos SDK
                                <ExternalLink size={20} color={'var(--dark-grey)'} />

                                <div className="image" style={{ backgroundImage: `url('images/software/cosmos.svg')` }} />
                            </ a>
                        </div>


                        <div className="card">
                            <a target='_blank' href='https://ipfs.io/' className='f-size-h5 f-weight-bo'>
                                IPFS
                                <ExternalLink size={20} color={'var(--dark-grey)'} />

                                <div className="image" style={{ backgroundImage: `url('images/software/IPFS.svg')` }} />
                            </ a>
                        </div>


                        <div className="card">
                            <a target='_blank' href='https://daostack.io/' className='f-size-h5 f-weight-bo'>
                                DAOstack
                                <ExternalLink size={20} color={'var(--dark-grey)'} />

                                <div className="image" style={{ backgroundImage: `url('images/software/DAOstack.svg')` }} />
                            </ a>
                        </div>


                        <div className="card">
                            <a target='_blank' href='https://tendermint.com/' className='f-size-h5 f-weight-bo'>
                                Tendermint
                                <ExternalLink size={20} color={'var(--dark-grey)'} />

                                <div className="image" style={{ backgroundImage: `url('images/software/tendermint.svg')` }} />
                            </ a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Software
