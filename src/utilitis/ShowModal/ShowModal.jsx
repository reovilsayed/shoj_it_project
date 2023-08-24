import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SignUpModal from "../SignUpModal/SignUpModal";

export default function ShowModal({ open, setOpen, setSubModal }) {
  return (
    <div>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]  2xl:h-[721px] xl:h-[600px] lg:h-[600px]   bg-[#FFF] rounded-lg">
            <SignUpModal setOpen={setOpen} setSubModal={setSubModal} />
          </div>
        </Modal>
      </div>
    </div>
  );
}
