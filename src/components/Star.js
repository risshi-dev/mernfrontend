
import React from 'react'
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { StarBorder } from '@material-ui/icons';
function Star({value}) {

   return (
				<div style={{ color: "007bff", display:'flex', margin: "10px 0px"  }}>
					<div>
						{value >= 1 ? (
							<StarIcon style={{ color: "007bff" }} />
						) : value >= 0.5 ? (
							<StarHalfIcon style={{ color: "007bff" }} />
						) : (
							<StarBorder style={{ color: "007bff" }} />
						)}
					</div>
					<div>
						{value >= 2 ? (
							<StarIcon style={{ color: "007bff" }} />
						) : value >= 1.5 ? (
							<StarHalfIcon style={{ color: "007bff" }} />
						) : (
							<StarBorder style={{ color: "007bff" }} />
						)}
					</div>
					<div>
						{value >= 3 ? (
							<StarIcon style={{ color: "007bff" }} />
						) : value >= 2.5 ? (
							<StarHalfIcon style={{ color: "007bff" }} />
						) : (
							<StarBorder style={{ color: "007bff" }} />
						)}
					</div>
					<div>
						{value >= 4 ? (
							<StarIcon style={{ color: "007bff" }} />
						) : value >= 3.5 ? (
							<StarHalfIcon style={{ color: "007bff" }} />
						) : (
							<StarBorder style={{ color: "007bff" }} />
						)}
					</div>
					<div>
						{value >= 5 ? (
							<StarIcon style={{ color: "007bff" }} />
						) : value >= 4.5 ? (
							<StarHalfIcon style={{ color: "007bff" }} />
						) : (
							<StarBorder style={{ color: "007bff" }} />
						)}
					</div>
				</div>
			);
}

export default Star
