import React from 'react'

function LineItemFormSaveButton(props){
    return(
        <section className="save-button-section">
        <button
          id="button-save"
          className="button save-button-section__button"
          type="submit"
          value="Save"
          onClick={props.handleSave}
        >
          Save
        </button>
      </section>
    )
}

export default LineItemFormSaveButton; 