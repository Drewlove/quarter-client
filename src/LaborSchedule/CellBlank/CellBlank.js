import React  from "react";
import {Link} from 'react-router-dom'

function CellBlank() {

  return (
    <Link to='/schedule/form' className="schedule-row__cell schedule-row__cell_blank">
      <div className="schedule-add">+</div>
    </Link>
  );
}

export default CellBlank
