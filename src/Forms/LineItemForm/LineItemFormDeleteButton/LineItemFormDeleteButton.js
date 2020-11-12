import React from 'react'

function LineItemFormDeleteButton(props){
    return(
        <section className="delete-button-section">
        <button
          id="button-delete"
          className="button delete-button-section__button"
          value="delete"
          onClick={props.handleDelete}
        >
          Delete
        </button>
      </section>
    )
}

export default LineItemFormDeleteButton; 