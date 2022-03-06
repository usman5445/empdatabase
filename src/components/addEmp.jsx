import {
  AddPhotoAlternate,
  PersonPinCircleOutlined,
} from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData, updateData } from "../redux-setup/actions/fetchData";
import { changeaction } from "../redux-setup/reducers/handleUpdateReducer";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const handelImgUpload = (e, imgurlref, nameref) => {
  const file = e.target.files[0];
  const storage = getStorage();
  const strgRef = ref(storage, `employee-img/${nameref.current.value}`);
  uploadBytesResumable(strgRef, file).then(() =>
    getDownloadURL(strgRef).then((url) => (imgurlref.current.value = url))
  );
  console.log(nameref.current.value);
};
const handelSubmit = (
  nameref,
  emailref,
  imgurlref,
  dis,
  navigate,
  changeHappen,
  editEmployeeObj
) => {
  if (!changeHappen.v) {
    if (
      nameref.current.value !== "" &&
      emailref.current.value !== "" &&
      imgurlref.current.value !== ""
    ) {
      dis(
        addData({
          name: nameref.current.value,
          email: emailref.current.value,
          imgurl: imgurlref.current.value,
        })
      );
      nameref.current.value = "";
      emailref.current.value = "";
      imgurlref.current.value = "";
      navigate("/");
    } else {
      alert("Please enter all details");
    }
  } else {
    dis(
      updateData(editEmployeeObj.id, {
        name: nameref.current.value,
        email: emailref.current.value,
        imgurl: imgurlref.current.value,
      })
    );
    dis(changeaction(false));
    navigate("/");
  }
};

export default function AddEmp() {
  const nameref = useRef();
  const emailref = useRef();
  const imgurlref = useRef();
  const dis = useDispatch();
  const navigate = useNavigate();
  const changeHappen = useSelector((state) => state.changer);
  const employeeArr = useSelector((state) => state.dtr);
  const editEmployeeObj = employeeArr[changeHappen.i];
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          padding: "20px",
          height: "fit-content",
          width: "fit-content",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 0 10px black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          style={{ margin: "3px" }}
          id="standard-basic"
          label="Name"
          variant="standard"
          defaultValue={changeHappen.v ? editEmployeeObj.name : ""}
          inputRef={nameref}
        />
        <TextField
          style={{ margin: "5px" }}
          label="Email"
          variant="standard"
          defaultValue={changeHappen.v ? editEmployeeObj.email : ""}
          inputRef={emailref}
        />
        <TextField
          style={{ margin: "5px" }}
          label="Image URL"
          variant="standard"
          disabled
          defaultValue={
            changeHappen.v ? editEmployeeObj.imgurl : "Nothing to show"
          }
          inputRef={imgurlref}
        />
        <Button
          startIcon={<AddPhotoAlternate />}
          variant="contained"
          component="label"
        >
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handelImgUpload(e, imgurlref, nameref)}
          />
        </Button>
      </div>
      <Button
        style={{ marginTop: "20px" }}
        variant={"contained"}
        startIcon={<PersonPinCircleOutlined />}
        onClick={() =>
          handelSubmit(
            nameref,
            emailref,
            imgurlref,
            dis,
            navigate,
            changeHappen,
            editEmployeeObj
          )
        }
      >
        {changeHappen.v ? "Update Employee" : "Add Employee"}
      </Button>
    </div>
  );
}
