import React, { useEffect, useReducer, useRef } from "react";

export declare interface AccordionProps {
  title?: string;
  show?: boolean;
  children?: React.ReactNode;
}

type State = {
  collapse: boolean;
};

type Action = { type: "collapse" } | { type: "show" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "collapse":
      return {
        collapse: !state.collapse
      };
    case "show":
      return {
        collapse: true
      };
  }
}

export function Accordion({
  title = "Accordion Title",
  show = false,
  children
}: AccordionProps) {
  const accordionBodyRef = useRef<HTMLDivElement>(null);
  const [{ collapse }, dispatch] = useReducer(reducer, {
    collapse: show
  });

  const randomId = useRef(
    window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
  );

  useEffect(() => {
    if (show) dispatch({ type: "show" });
  }, [show]);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${randomId.current}`}>
        Hello
        <button
          className={`accordion-button${collapse ? "" : " collapsed"}`}
          type="button"
          aria-expanded={collapse}
          aria-controls={`collapse-${randomId.current}`}
          onClick={() => dispatch({ type: "collapse" })}
        >
          See
        </button>
      </h2>

      <div
        id={`collapse-${randomId.current}`}
        aria-labelledby={`heading-${randomId.current}`}
        className={`accordion-collapse`}
        style={
          collapse
            ? {
                height: accordionBodyRef.current?.clientHeight,
                transition: "height 0.2s ease",
                overflow: "hidden"
              }
            : {
                height: 0,
                transition: "height 0.2s ease",
                overflow: "hidden"
              }
        }
      >
        <div className="accordion-body" ref={accordionBodyRef}>
          Accourdion Body
        </div>
      </div>
    </div>
  );
}