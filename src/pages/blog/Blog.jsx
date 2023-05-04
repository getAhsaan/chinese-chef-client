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
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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
