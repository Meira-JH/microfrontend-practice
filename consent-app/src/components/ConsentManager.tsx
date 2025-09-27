import React, { useState } from "react";

type ConsentOption = {
  id: string;
  label: string;
  checked: boolean;
};

const consentOptions: ConsentOption[] = [
  { id: "sms_notification", label: "Receive notifications by SMS", checked: true },
  { id: "email_notification", label: "Receive notifications by E-Mail", checked: false },
];

const containerStyle = {
  border: "2px solid #007BFF",
  borderRadius: "8px",
  padding: "24px",
  backgroundColor: "#000000",
  fontFamily: "sans-serif",
  width: "clamp(300px, 90%, 500px)",
  margin: "20px auto",
};

const titleStyle = {
  margin: "0 0 16px 0",
  color: "#0056b3",
};

const itemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "12px",
};

const checkboxStyle = {
  marginRight: "10px",
  width: "18px",
  height: "18px",
};

const ConsentManager: React.FC = () => {
  const [consents, setConsents] = useState<ConsentOption[]>(consentOptions);

  const handleToggle = (id: string) => {
    setConsents(consents.map(c => (c.id === id ? { ...c, checked: !c.checked } : c)));
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Consent Management</h3>
      <div>
        {consents.map(consent => (
          <div key={consent.id} style={itemStyle}>
            <input
              type="checkbox"
              id={consent.id}
              checked={consent.checked}
              onChange={() => handleToggle(consent.id)}
              style={checkboxStyle}
            />
            <label htmlFor={consent.id}>{consent.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsentManager;
