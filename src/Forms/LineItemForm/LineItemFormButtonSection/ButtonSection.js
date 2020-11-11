import React from 'react'

function ButtonSection(props){
    return(
        <section className="button-section">
        <button className="button button-section__button button_delete">
          Delete
        </button>
        <button
          id="button-save"
          className="button button-section__button button_save"
          type="submit"
          value="Save"
          onClick={props.handleSave}
        >
          Save
        </button>
      </section>
    )
}

export default ButtonSection; 