
import React, { useEffect, useState } from 'react'
import Alert from "react-bootstrap/Alert";
function AlertMess({error, variant}) {

const [show, setShow] = useState(true)

    return (
					<div>
						<Alert variant={variant}>
							{error}
						</Alert>
					</div>
				);
}

export default AlertMess
