import React, { Fragment } from "react";
import {
  Button,
  Card,
  CheckboxComponent,
  FormGroup,
  SelectComponent,
  SubPaymentCard,
  SwitchComponent,
} from "@/components";
import { createRoot } from "react-dom/client";
import "../styles/global.css";
import "./main.css"

export default function App() {
  const [selectValue, setSelectValue] = React.useState<string>("0");
  const [checkboxValue, setCheckboxValue] = React.useState<boolean>(false);
  const [switchValue, setSwitchValue] = React.useState<boolean>(false);

  return (
    <div className="app">
      <div className="wrap">
        {/* Header */}
        <div className="header">
          <h1 className="h1">Payment portal components</h1>
        </div>

        <div className="grid">
          {/* Form Controls Section */}
          <div className="stack-8">
            <div className="card">
              <h2 className="card-title">Form Controls</h2>

              <div className="stack-6">
                <div className="section">
                  <label className="label">Select Component</label>
                  <SelectComponent
                    isSearchable
                    value={selectValue}
                    options={[
                      { value: "0", label: "Option #1" },
                      { value: "1", label: "Option #2" }
                    ]}
                    onChange={(v) => setSelectValue(v)}
                  />
                </div>

                <div className="section">
                  <label className="label">Checkbox Component</label>
                  <CheckboxComponent
                    label="Check it!!!"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                </div>

                <div className="section">
                  <label className="label">Switch Component</label>
                  <SwitchComponent
                    label="Switch me"
                    value={switchValue}
                    onChange={(e) => setSwitchValue(e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons & Cards Section */}
          <div className="stack-8">
            <div className="card">
              <h2 className="card-title">Button Components</h2>

              <div className="section">
                <div className="btn-grid">
                  <Button primary small block>
                    <span>Primary Button</span>
                  </Button>
                  <Button danger>
                    <span>Danger Button</span>
                  </Button>
                  <Button spinning>
                    <span>Default Button</span>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <SubPaymentCard
                label="Apple pay"
                onChange={() => {}}
                value={false}
                thumbnail="https://app.lightfunnels.com/assets/17e549a22f1083ef8936.png"
                className={"pm-card"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



createRoot(document.getElementById('app')).render(<App />)