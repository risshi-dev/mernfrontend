import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
					<div className='loaderContainer'>
						<Spinner
							animation="grow"
                            size='xl'
							role="status"
							aria-hidden="true"
							style={{
								
									color: '#007bffa6',
									width: '50px',
									height: '50px'
				
							}}
						/>
					</div>
				);
}

export default Loader
