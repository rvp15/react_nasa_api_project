import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setremoveliked } from "../slices/likedSlice";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Liked() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { likeddata } = useSelector((state) => state.liked);
  console.log(likeddata);

  return (
    <div className="likedcontainer">
      {likeddata?.map((item,i) => {
        return (
          
          <MDBCard  key={i}>
            <div className="eachcardliked">
            <Link to={`/${i}`}>
              <MDBCardImage className="image" src={item.url} position="top" />
              </Link>
              <MDBCardBody>
                <MDBCardText>{item.title}</MDBCardText>
                <div className="buttonsliked">
                <Button
                  className="detailbtn"
                  variant="primary"
                  onClick={() => setShow(true)}
                >
                  {" "}
                  Details
                </Button>
                <MDBBtn
                  className="detailbtn"
                  onClick={() => dispatch(setremoveliked(item))}
                >
                  Remove
                </MDBBtn>
                </div>
              </MDBCardBody>
            </div>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  {item.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{item.explanation}</p>
              </Modal.Body>
            </Modal>
          </MDBCard>
        );
      })}
    </div>
  );
}

export default Liked;
