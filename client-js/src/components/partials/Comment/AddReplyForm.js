import React from "react";

const addReplyForm = React.forwardRef((props, ref) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(ref.current.value);
        ref.current.value = "";
      }}
    >
      <div className="form__group">
        {props.toName && (
          <span
            className="form__input__text-label"
            ref={(elem) => {
              // Add a left padding to the input because of the name label
              if (elem)
                elem.nextSibling.style.paddingLeft = `${elem.clientWidth +
                  10}px`;
            }}
          >
            {props.toName}
          </span>
        )}
        <input
          className="form__input form__input--lined"
          autoFocus
          required
          placeholder="Add your reply..."
          ref={ref}
        />
      </div>
      <div className="right-content margin-bottom-2">
        <button
          type="button"
          className="btn btn-sm btn-default margin-right-1"
          onClick={() => props.onCancel()}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-sm btn-blue">
          Add
        </button>
      </div>
    </form>
  );
});

export default addReplyForm;
