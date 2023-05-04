import React from "react";
import ReactToPdf from "react-to-pdf";
const allRef = React.createRef();

const Blog = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="card-actions justify-center mt-10">
          <ReactToPdf
            targetRef={allRef}
            filename="questions.pdf"
          >
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="btn btn-primary"
              >
                Download all
              </button>
            )}
          </ReactToPdf>
        </div>
      </div>
      <div
        ref={allRef}
        className="container mx-auto my-10 space-y-20"
      >
        <ReactToPdf filename="questionsOne.pdf">
          {({ toPdf, targetRef }) => (
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <div ref={targetRef}>
                  <h2 className="card-title">
                    <span className="text-primary font-bold">Q1:</span> Tell us
                    the differences between uncontrolled and controlled
                    components.
                  </h2>
                  <p className="text-secondary font-bold">A1:</p>
                  <p>
                    In a controlled component react, state handles all the form
                    data, whereas, in an uncontrolled component, the HTML form
                    element data is managed by only the DOM.
                  </p>

                  <p>
                    If we are using a controlled component, we are in control of
                    our form input values. The developer can decide what to
                    insert or not and where to insert it.
                  </p>

                  <p>
                    It is a must to use react state in a controlled component to
                    handle the dynamic form data. It is optional for the
                    uncontrolled component to have a state, but it must use
                    react Ref.
                  </p>

                  <p>
                    Controlled components are predictable since the component
                    manages the state of the form elements.
                  </p>

                  <p>
                    Because the form elements may change or be impacted by
                    external sources over the lifespan of a component,
                    uncontrolled components are not predictable.
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={toPdf}
                    className="btn btn-primary"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </ReactToPdf>
        <ReactToPdf filename="questionsTwo.pdf">
          {({ toPdf, targetRef }) => (
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <div ref={targetRef}>
                  <h2 className="card-title">
                    <span className="text-primary font-bold">Q2:</span> How to
                    validate React props using PropTypes?
                  </h2>
                  <p className="text-secondary font-bold">A2:</p>
                  <p className="underline">
                    Here is the way to validate React props using PropTypes:
                  </p>
                  <p>
                    <code>PropTypes.any</code>, The props can be of any data
                    type.
                  </p>
                  <p>
                    <code>PropTypes.bool</code>, The props should be a boolean.
                  </p>
                  <p>
                    <code>PropTypes.number</code>, The props should be a number.
                  </p>
                  <p>
                    <code>PropTypes.string</code>, The props should be a string.
                  </p>
                  <p>
                    <code>PropTypes.func</code>, The props should be a function.
                  </p>
                  <p>
                    <code>PropTypes.array</code>, The props should be an array.
                  </p>
                  <p>
                    <code>PropTypes.object</code>, The props should be an
                    object.
                  </p>
                  <p>
                    <code>PropTypes.symbol</code>, The props should be a symbol.
                  </p>
                  And so on...
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={toPdf}
                    className="btn btn-primary"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </ReactToPdf>
        <ReactToPdf filename="questionsThree.pdf">
          {({ toPdf, targetRef }) => (
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <div ref={targetRef}>
                  <h2 className="card-title">
                    <span className="text-primary font-bold">Q3:</span>Tell us
                    the difference between nodejs and express js.
                  </h2>
                  <p className="text-secondary font-bold">A3:</p>
                  <p className="underline">
                    Here is the prime differences between nodejs and express js:{" "}
                  </p>
                  <p>
                    <span className="text-secondary font-bold">Usage:</span>{" "}
                    <span className="font-bold">Node.js:</span> It is used to
                    build server-side, input-output, event-driven apps.{" "}
                    <span className="font-bold">Express.js:</span> It is used to
                    build web-apps using approaches and principles of Node.js.
                  </p>

                  <p>
                    <span className="text-secondary font-bold">
                      Level of features:
                    </span>{" "}
                    <span className="font-bold">Node.js:</span> IFewer features.{" "}
                    <span className="font-bold">Express.js:</span> More features
                    than Node.js.
                  </p>

                  <p>
                    <span className="text-secondary font-bold">
                      Building Block :
                    </span>{" "}
                    <span className="font-bold">Node.js:</span> It is built on
                    Google’s V8 engine.{" "}
                    <span className="font-bold">Express.js:</span> It is built
                    on Node.js.
                  </p>

                  <p>
                    <span className="text-secondary font-bold">
                      Written in:
                    </span>{" "}
                    <span className="font-bold">Node.js:</span> C, C++,
                    JavaScript <span className="font-bold">Express.js:</span>{" "}
                    JavaScript
                  </p>

                  <p>
                    <span className="text-secondary font-bold">
                      Framework/Platform:
                    </span>{" "}
                    <span className="font-bold">Node.js:</span> Run-time
                    platform or environment designed for server-side execution
                    of JavaScript.{" "}
                    <span className="font-bold">Express.js:</span> Framework
                    based on Node.js.
                  </p>

                  <p>
                    <span className="text-secondary font-bold">
                      Controllers:
                    </span>{" "}
                    <span className="font-bold">Node.js:</span> Controllers are
                    not provided. <span className="font-bold">Express.js:</span>{" "}
                    Controllers are provided.
                  </p>

                  <p>
                    <span className="text-secondary font-bold">Routing:</span>{" "}
                    <span className="font-bold">Node.js:</span> Routing is not
                    provided. <span className="font-bold">Express.js:</span>{" "}
                    Routing is provided.
                  </p>

                  <p>
                    <span className="text-secondary font-bold">
                      Coding time:
                    </span>{" "}
                    <span className="font-bold">Node.js:</span> It requires more
                    coding time. <span className="font-bold">Express.js:</span>{" "}
                    It requires less coding time.
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={toPdf}
                    className="btn btn-primary"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </ReactToPdf>
        <ReactToPdf filename="questionsFour.pdf">
          {({ toPdf, targetRef }) => (
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <div ref={targetRef}>
                  <h2 className="card-title">
                    <span className="text-primary font-bold">Q4:</span> What is
                    a custom hook, and why will you create a custom hook?
                  </h2>
                  <p className="text-secondary font-bold">A3:</p>
                  <p>
                    Custom React JS hooks are reusable functions that a React JS
                    software developer can use to add special and unique
                    functionality to the React applications. Usually, if there
                    is a requirement to add a feature, one can install a
                    third-party library and solve the problem. But what if there
                    is no such library with hooks that can be used? This problem
                    is solved by using custom React JS hooks.
                  </p>

                  <p className="underline">
                    I will create a custom hook because of:
                  </p>

                  <p>
                    <span className="font-bold">Reusability</span>: We can write
                    reusable logic that can be shared across multiple
                    components, reducing code duplication and making it easier
                    to maintain and update your code.
                  </p>

                  <p>
                    <span className="font-bold">Readability</span>: Custom hooks
                    provide a way to encapsulate complex logic in a single
                    place, making it easier to understand and reason about our
                    code. This can improve the overall readability of your
                    codebase.
                  </p>

                  <p>
                    <span className="font-bold">Testability</span>: By
                    encapsulating logic in a custom hook, we can write tests for
                    the hook itself and test it independently of the components
                    that use it. This can help us catch bugs and errors earlier
                    in the development process and improve the overall quality
                    of your code.
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={toPdf}
                    className="btn btn-primary"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </ReactToPdf>
      </div>
    </>
  );
};

export default Blog;
