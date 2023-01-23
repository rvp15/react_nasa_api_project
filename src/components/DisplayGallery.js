import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setlikedlist } from "../slices/likedSlice";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// https://react-bootstrap.netlify.app/components/modal/#rb-docs-content

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  // MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBIcon,
} from "mdb-react-ui-kit";


function DisplayGallery({ pictures }) {
  const [show, setShow] = useState(false);
  const { likeddata } = useSelector((state) => state.liked);
  const dispatch = useDispatch();
  const alreadyLiked = (pic) => {
    let findItem = likeddata?.find((item) => item.title === pic.title);
    return findItem ? true : false;
  };

  
  return (
    <div className="container">
      {pictures?.map((pic, i) => {
        const isliked = alreadyLiked(pic);
        return (
          <MDBCard key={i}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <div className="eachcardliked">
             
                   <MDBCardImage className="image" src={pic.url} fluid alt={pic.title} position='top'/>
                  
                  <MDBCardBody>
                  <MDBCardTitle className="title">{pic.title}</MDBCardTitle>
                  <div className="buttonsliked">
                  <Button
                    className="detailbtn"
                    variant="primary"
                    onClick={() => setShow(true)}
                  > Details</Button>
                  {isliked ? (
                    <MDBBtn    className="detailbtn" flat>
                      <MDBIcon icon="thumbs-up" className="cyan-text" />
                    </MDBBtn>
                  ) : (
                    <MDBBtn  className="detailbtn" onClick={() => dispatch(setlikedlist(pic))}>
                      Like
                    </MDBBtn>
                  )}
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
                    {pic.title}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{pic.explanation}</p>
                </Modal.Body>
              </Modal>
            </MDBRipple>
          
          </MDBCard>
        );
      })}
    </div>
  );
}

export default DisplayGallery;
