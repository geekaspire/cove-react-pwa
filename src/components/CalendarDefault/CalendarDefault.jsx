import React, { useState } from "react";
import { DatePicker } from "antd-mobile";

const CalendarDefault = ({ onClose, onMaskClick }) => {
  const [visible, setVisible] = useState(false);
  const now = new Date();
  return (
    <div className="adm-input input-default" onClick={() => setVisible(true)}>
      <span style={{ color: "#ccc", fontSize: 16, paddingLeft: 15 }}>
        Date of birth
      </span>
      <DatePicker
        title="Date of birth"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        max={now}
        onConfirm={(val) => {
          console.log(val);
          //   Toast . show ( val . toDateString ( ) )
        }}
      />
    </div>
  );
};

export default CalendarDefault;
