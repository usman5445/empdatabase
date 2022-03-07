import { getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux-setup/actions/fetchData";
import { empcolref } from "../redux-setup/reducers/manageDataReducer";
import EmpCard from "./card";
async function rtdt() {
  const data = await getDocs(empcolref);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
export default function CardContainer() {
  let empDataArr = useSelector((state) => state.dtr);
  let deletor = useSelector((state) => state.deleter);
  const dis = useDispatch();
  useEffect(() => {
    let f = async () => {
      const dataarr = await rtdt();
      dis(getData(dataarr));
    };
    f();
  }, [deletor]);
  return (
    <div
      style={{
        padding: "5px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        flexDirection: "raw",
        backgroundColor: "lightgray",
      }}
    >
      {empDataArr.map((item, index) => (
        <EmpCard
          k={item.id}
          name={item.name}
          email={item.email}
          imgurl={item.imgurl}
          index={index}
        />
      ))}
    </div>
  );
}
