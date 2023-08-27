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
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]  2xl:h-[751px] xl:h-[650px] lg:h-[600px] md:h-auto   bg-[#FFF] rounded-[16px]">
            <SignUpModal
              setOpen={setOpen}
              open={open}
              setSubModal={setSubModal}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}
